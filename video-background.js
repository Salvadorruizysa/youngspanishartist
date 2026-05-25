document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-bg__media');
    if (!video) {
        return;
    }

    const normalRate = 1;
    const slowRate = 0.33;
    const edgeThreshold = 0.05;

    let isHovering = false;
    let isReversed = false;

    function getBaseRate() {
        return isHovering ? slowRate : normalRate;
    }

    function applyPlaybackRate() {
        video.playbackRate = getBaseRate() * (isReversed ? -1 : 1);
    }

    function setHoverRate(active) {
        isHovering = active;
        applyPlaybackRate();
    }

    function togglePlaybackDirection() {
        const duration = video.duration;
        if (!duration || Number.isNaN(duration)) {
            return;
        }

        if (!isReversed && video.currentTime >= duration - edgeThreshold) {
            // Al llegar al final del vídeo, activamos reversa y mantenemos la posición en el extremo.
            isReversed = true;
            applyPlaybackRate();
            video.currentTime = duration;
        } else if (isReversed && video.currentTime <= edgeThreshold) {
            // Al llegar al inicio, volvemos a reproducir hacia adelante.
            isReversed = false;
            applyPlaybackRate();
            video.currentTime = 0;
        }
    }

    video.loop = false;
    video.muted = true;
    video.playsInline = true;
    applyPlaybackRate();

    video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {
            // Autoplay suele ser permitido cuando el vídeo está muteado.
        });
    });

    video.addEventListener('timeupdate', togglePlaybackDirection);

    // En caso de que el evento timeupdate sea poco frecuente, reforzamos la comprobación.
    setInterval(togglePlaybackDirection, 200);

    document.documentElement.addEventListener('pointerenter', () => setHoverRate(true));
    document.documentElement.addEventListener('pointerleave', () => setHoverRate(false));

    const homeCard = document.querySelector('.home-card');
    if (homeCard) {
        homeCard.addEventListener('pointerenter', () => setHoverRate(true));
    }
});
