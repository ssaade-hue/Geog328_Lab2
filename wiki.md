### Hello

## Slideshow / Carousel

Below is a self-contained slideshow you can paste into a markdown file or an HTML page. It uses inline CSS and JavaScript. Note: many markdown hosts (including GitHub) sanitize <script> tags, so to see the live behaviour open this file locally in a markdown viewer that allows raw HTML/JS or copy the HTML block into a standalone `.html` file.

<div class="carousel" id="carousel">
  <div class="carousel-track">
    <div class="slide active">
      <img src="https://via.placeholder.com/900x450.png?text=Slide+1" alt="Slide 1">
      <div class="caption">Slide 1 caption</div>
    </div>
    <div class="slide">
      <img src="https://via.placeholder.com/900x450.png?text=Slide+2" alt="Slide 2">
      <div class="caption">Slide 2 caption</div>
    </div>
    <div class="slide">
      <img src="https://via.placeholder.com/900x450.png?text=Slide+3" alt="Slide 3">
      <div class="caption">Slide 3 caption</div>
    </div>
  </div>

  <button class="carousel-control prev" aria-label="Previous slide">‹</button>
  <button class="carousel-control next" aria-label="Next slide">›</button>

  <div class="carousel-indicators" aria-hidden="false">
    <button class="indicator active" data-index="0" aria-label="Go to slide 1"></button>
    <button class="indicator" data-index="1" aria-label="Go to slide 2"></button>
    <button class="indicator" data-index="2" aria-label="Go to slide 3"></button>
  </div>
</div>

<style>
/* Carousel basic styles */
.carousel { max-width: 900px; margin: 1rem auto; position: relative; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.carousel-track { overflow: hidden; position: relative; }
.slide { display: none; position: relative; }
.slide.active { display: block; }
.slide img { width: 100%; height: auto; display: block; border-radius: 6px; }
.caption { position: absolute; left: 1rem; bottom: 1rem; background: rgba(0,0,0,0.45); color: #fff; padding: 0.4rem 0.6rem; border-radius: 4px; font-size: 0.95rem; }

.carousel-control { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.45); color: #fff; border: none; width: 42px; height: 42px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; line-height: 1; display: flex; align-items: center; justify-content: center; }
.carousel-control.prev { left: 0.5rem; }
.carousel-control.next { right: 0.5rem; }
.carousel-control:focus { outline: 2px solid #fff; }

.carousel-indicators { display: flex; gap: 0.5rem; justify-content: center; margin-top: 0.6rem; }
.indicator { width: 12px; height: 12px; background: #ddd; border-radius: 50%; border: none; cursor: pointer; }
.indicator.active { background: #333; }

@media (max-width: 640px) {
  .carousel { padding: 0 0.5rem; }
  .caption { font-size: 0.85rem; left: 0.6rem; bottom: 0.6rem; }
}
</style>

<script>
/* Lightweight carousel behavior */
(function(){
  const carousel = document.getElementById('carousel');
  if (!carousel) return; // safe-guard for markdown viewers that strip HTML

  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const prevBtn = carousel.querySelector('.carousel-control.prev');
  const nextBtn = carousel.querySelector('.carousel-control.next');
  const indicators = Array.from(carousel.querySelectorAll('.indicator'));
  let current = slides.findIndex(s => s.classList.contains('active')) || 0;
  let autoplayInterval = 4000; // ms
  let timer = null;

  function goTo(index){
    slides[current].classList.remove('active');
    indicators[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    indicators[current].classList.add('active');
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  nextBtn.addEventListener('click', () => { next(); resetTimer(); });
  prevBtn.addEventListener('click', () => { prev(); resetTimer(); });

  indicators.forEach(btn => {
    btn.addEventListener('click', (e) => { const idx = Number(btn.dataset.index); goTo(idx); resetTimer(); });
  });

  // keyboard
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); resetTimer(); }
    if (e.key === 'ArrowLeft') { prev(); resetTimer(); }
  });

  function startTimer(){ timer = setInterval(next, autoplayInterval); }
  function stopTimer(){ if (timer) { clearInterval(timer); timer = null; } }
  function resetTimer(){ stopTimer(); startTimer(); }

  // pause on hover/focus
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', startTimer);

  // initialize
  carousel.setAttribute('tabindex', '0');
  startTimer();
})();
</script>

### Notes

- To replace slides: swap the `src` values of the `<img>` tags with your images. For best results use same aspect ratio images (e.g., 16:9 or 2:1).
- Change autoplay speed: edit `autoplayInterval` (currently 4000 ms) inside the script.
- If your markdown host strips <script> tags (common on GitHub), copy the HTML/CSS/JS block into a standalone `.html` file to view locally in a browser.
