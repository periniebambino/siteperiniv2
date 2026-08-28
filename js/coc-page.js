(() => {
  const videoTrigger = document.querySelector('[data-coc-page-video-play]');
  if (videoTrigger) {
    videoTrigger.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const videoId = videoTrigger.dataset.videoId;
      if (!videoId) return;
      const iframe = document.createElement('iframe');
      iframe.className = 'coc-video-embed';
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
      iframe.title = 'Vídeo do Sistema COC de Ensino';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.setAttribute('tabindex', '0');
      videoTrigger.replaceWith(iframe);
      iframe.focus({ preventScroll: true });
    }, { once: true });
  }

  const track = document.querySelector('[data-coc-gallery-track]');
  const prev = document.querySelector('[data-coc-gallery-prev]');
  const next = document.querySelector('[data-coc-gallery-next]');
  if (track && prev && next) {
    const move = (direction) => {
      const card = track.querySelector('.coc-art-card');
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '16');
      const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth * .8;
      track.scrollBy({ left: direction * amount, behavior: 'smooth' });
    };
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
  }
})();
