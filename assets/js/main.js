(function () {
  const track = document.querySelector('.depo__track');
  const cards = Array.from(document.querySelectorAll('.depo__card'));
  const btnPrev = document.querySelector('.depo__arrow--prev');
  const btnNext = document.querySelector('.depo__arrow--next');

  if (!track || !cards.length || !btnPrev || !btnNext) return;

  const CARD_WIDTH = 463;
  const GAP = 32;
  const STEP = CARD_WIDTH + GAP; // 495px por card
  const total = cards.length;
  let current = 0;

  const isMobile = () => window.innerWidth <= 768;

  function update() {
    if (isMobile()) {
      cards.forEach(c => c.classList.remove('is-active'));
      cards[current].classList.add('is-active');
      track.style.transform = '';
    } else {
      track.style.transform = `translateX(-${current * STEP}px)`;
    }
  }

  btnNext.addEventListener('click', () => {
    current = current + 1 >= total ? 0 : current + 1;
    update();
  });

  btnPrev.addEventListener('click', () => {
    current = current - 1 < 0 ? total - 1 : current - 1;
    update();
  });

  window.addEventListener('resize', () => { current = 0; update(); });

  update();
})();