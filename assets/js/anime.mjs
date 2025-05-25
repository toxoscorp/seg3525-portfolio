import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/+esm';
import { animate, svg, stagger, waapi, utils, onScroll } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

// const [ container ] = utils.$('.scroll-container');
// const debug = true;
// animate('.idk-an', {
//   x: '15rem',
//   rotate: '1turn',
//   duration: 2000,
//   alternate: true,
//   loop: true,
//   ease: 'inOutQuad',
//     autoplay: onScroll({
//         container,
//     enter: 'bottom-=50 top',
//     leave: 'top+=60 bottom',
//         debug})
// });

// animate('span', {
//   // Property keyframes
//   y: [
//     { to: '-2.75rem', ease: 'outExpo', duration: 600 },
//     { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
//   ],
//   // Property specific parameters
//   // rotate: {
//   //   from: '-1turn',
//   //   delay: 0
//   // },
//   delay: (_, i) => i * 50, // Function based value
//   ease: 'inOutCirc',
//   loopDelay: 1000,
//   loop: false
// });

waapi.animate('span', {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 400,
  loop: 3,
  alternate: true,
  ease: 'inOut(2)',
});

const animation = animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: false
});

// When the drawing animation is done, animate the fill
animation.then(() => {
  document.querySelectorAll('.to-fill').forEach(el => {
    animate(el, {
      fill: ['rgba(123,178,151,0)', '#7BB297'],
      duration: 1000,
        loop: true,
        alternate: true,
      easing: 'easeInOutQuad'
    });
  });
});

// Circles background animation
const svgBg = document.getElementById('background-circles');
function resizeBg() {
  svgBg.setAttribute('width', window.innerWidth);
  svgBg.setAttribute('height', window.innerHeight);
}
resizeBg();

const NUM_CIRCLES = 18;
const circles = [];
function randomColor() {
  const palette = ['#2196f3', '#e91e63', '#ffeb3b', '#00bcd4', '#8bc34a', '#ff9800', '#ffffff33'];
  return palette[Math.floor(Math.random() * palette.length)];
}
for (let i = 0; i < NUM_CIRCLES; i++) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  const r = Math.random() * 80 + 30;
  const cx = Math.random() * window.innerWidth;
  const cy = Math.random() * window.innerHeight;
  circle.setAttribute('cx', cx);
  circle.setAttribute('cy', cy);
  circle.setAttribute('r', r);
  circle.setAttribute('fill', randomColor());
  circle.setAttribute('opacity', 0.25 + Math.random() * 0.3);
  svgBg.appendChild(circle);
  circles.push(circle);
}
circles.forEach((circle, idx) => {
  anime({
    targets: circle,
    cx: [
      { value: Math.random() * window.innerWidth, duration: 6000 + Math.random() * 3000 },
      { value: Math.random() * window.innerWidth, duration: 9000 + Math.random() * 5000 }
    ],
    cy: [
      { value: Math.random() * window.innerHeight, duration: 8000 + Math.random() * 4000 },
      { value: Math.random() * window.innerHeight, duration: 10000 + Math.random() * 6000 }
    ],
    r: [
      { value: Math.random() * 100 + 30, duration: 8000 + Math.random() * 3000 },
      { value: Math.random() * 80 + 30, duration: 9000 + Math.random() * 6000 }
    ],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    delay: idx * 150
  });
});
window.addEventListener('resize', resizeBg);