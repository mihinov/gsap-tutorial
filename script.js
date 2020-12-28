const headerInner = document.querySelector('.header__inner');
const textMain = document.querySelector('.text__main');
const textAfterReading = document.querySelector('.text__after-reading');
const textWords = document.querySelectorAll('.text__words span');
const btnAnimashka = document.querySelector('.btn-animashka');

const tl = gsap.timeline({defaults: {duration: 0.7}});

function btnAnimashkaAnimEnd() {
  const btnAnimashkaTl = tl.getById('btnAnimashka');
  console.log(btnAnimashkaTl);
  tl.remove(btnAnimashkaTl);
}

tl.from(headerInner, {x: -400, opacity: 0, 'user-select': 'none', 'pointer-events': 'none'})
  .from(textMain, {y: 200, opacity: 0, 'user-select': 'none', 'pointer-events': 'none'})
  .from(textAfterReading, {opacity: 0, scale: 2, 'user-select': 'none', 'pointer-events': 'none'})
  .from(textWords, {opacity: 0, x: 200, y: 100, duration: 0.6, stagger: 0.2, 'user-select': 'none', 'pointer-events': 'none'})
  .from(btnAnimashka, {id: 'btnAnimashka', opacity: 0, onComplete: btnAnimashkaAnimEnd});

btnAnimashka.addEventListener('click', (e) => {
  if (tl.reversed()) {
    tl.play();
  } else {
    tl.reverse();
  }
});