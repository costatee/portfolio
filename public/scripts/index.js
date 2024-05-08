import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";

console.log(gsap.version); // -> 3.12.2
console.log(ScrollTrigger.version); // -> 3.12.2

gsap.registerPlugin(ScrollTrigger);

let date = new Date().getFullYear()
document.getElementById('date').innerHTML = date.toString();

let colors = [  
  "#FFB6C1", "#FF69B4", "#FFA07A", "#FF7F50", "#F08080",
  "#E9967A", "#FA8072", "#FF6347", "#FF4500", "#FFD700",
  "#FFFF00", "#32CD32", "#98FB98", "#90EE90", "#00FF7F",
  "#00FA9A", "#00CED1", "#20B2AA", "#87CEEB", "#87CEFA",
  "#4682B4", "#B0C4DE", "#ADD8E6", "#B0E0E6", "#AFEEEE",
  "#00BFFF", "#00FFFF", "#1E90FF", "#6495ED", "#7B68EE",
  "#8A2BE2", "#9400D3", "#9932CC", "#BA55D3", "#DA70D6",
  "#DB7093", "#FF69B4", "#FF1493", "#FFC0CB", "#FFB6C1",
  "#FFA07A", "#FF7F50", "#FF6347", "#FF4500", "#FFD700",
  "#FFFF00", "#32CD32", "#98FB98", "#90EE90", "#00FF7F",
  "#00FA9A", "#00CED1", "#20B2AA", "#87CEEB", "#87CEFA",
  "#4682B4", "#B0C4DE", "#ADD8E6", "#B0E0E6", "#AFEEEE",
  "#00BFFF", "#00FFFF", "#1E90FF", "#6495ED", "#7B68EE",
  "#8A2BE2", "#9400D3", "#9932CC", "#BA55D3", "#DA70D6",
  "#DB7093", "#FF69B4", "#FF1493", "#FFC0CB", "#FFB6C1",
  ]
  
  function getRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomIndex];
    return randomColor;
  }

  
// selecting elements
const textbox = document.getElementById('textbox');
const h1 = document.getElementById('h1');

// p text coloring
if (textbox) {
  const text = textbox.textContent.trim();
  textbox.style.color = 'grey'
  textbox.style.width = '20ch'
  const newText = text.split('').map(letter => `<span>${letter}</span>`).join('');
  textbox.innerHTML = newText;

  textbox.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.style.transition = 'color 30ms ease-in-out'; 
        event.target.style.color = getRandomColor();
    }
  });

  textbox.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.style.transition = 'color 5s ease-in-out';
        event.target.style.color = '';
    }
  });
}

// h1 text coloring
if (h1) {
  const h1text = h1.textContent.trim();
  const newh1Text = h1text.split('').map(letter => `<span>${letter}</span>`).join('');
  h1.innerHTML = newh1Text;

  h1.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.style.transition = 'color 30ms ease-in-out'; 
        event.target.style.color = getRandomColor();
    }
  });

  h1.addEventListener('mouseout', function(event) {
    if (event.target.tagName === 'SPAN') {
        event.target.style.transition = 'color 5s ease-in-out';
        event.target.style.color = '';
    }
  });
}

const slider = document.getElementById('slider');

let tl = gsap.timeline({
  defaults: {
    ease: "none"
  }, 
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth
  }
})

tl.to(slider, {
  xPercent: -66
})
