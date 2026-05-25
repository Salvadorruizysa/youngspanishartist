// auto-rename-project.js
// Ejecutar:
// node auto-rename-project.js

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

const FILE_EXTENSIONS = [
  ".html",
  ".css",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".php",
];

const renamedItems = [];

// ----------------------------
// Convierte nombres
// ----------------------------

function normalizeName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes
    .replace(/\s+/g, "-") // espacios -> -
    .replace(/[^a-zA-Z0-9._-]/g, "") // quitar caracteres raros
    .replace(/-+/g, "-")
    .toLowerCase();
}

// ----------------------------
// Recorrer carpetas
// ----------------------------

function walk(dir, callback) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);

    if (
      fullPath.includes("node_modules") ||
      fullPath.includes(".git")
    ) {
      continue;
    }

    callback(fullPath);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, callback);
    }
  }
}

// ----------------------------
// Renombrar archivos y carpetas
// ----------------------------

function renameItems(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const oldPath = path.join(dir, item);

    if (
      oldPath.includes("node_modules") ||
      oldPath.includes(".git")
    ) {
      continue;
    }

    if (fs.statSync(oldPath).isDirectory()) {
      renameItems(oldPath);
    }

    const newName = normalizeName(item);

    if (item !== newName) {
      const newPath = path.join(dir, newName);

      try {
        fs.renameSync(oldPath, newPath);

        renamedItems.push({
          old: item,
          new: newName,
        });

        console.log(`✅ ${item} -> ${newName}`);
      } catch (err) {
        console.log(`❌ Error: ${item}`);
      }
    }
  }
}

// ----------------------------
// Actualizar referencias
// ----------------------------

function updateReferences() {
  walk(ROOT, (filePath) => {
    if (!fs.statSync(filePath).isFile()) return;

    const ext = path.extname(filePath).toLowerCase();

    if (!FILE_EXTENSIONS.includes(ext)) return;

    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    for (const item of renamedItems) {
      if (content.includes(item.old)) {
        content = content.split(item.old).join(item.new);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`📝 Actualizado: ${filePath}`);
    }
  });
}

// ----------------------------

console.log("\n🚀 Renombrando archivos y carpetas...\n");

renameItems(ROOT);

console.log("\n🔄 Actualizando referencias...\n");

updateReferences();

console.log("\n🎉 Todo completado.\n");