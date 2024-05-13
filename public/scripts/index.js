import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import Lenis from "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/+esm"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Initialize scroll trigger from gsap
gsap.registerPlugin(ScrollTrigger);

// Initialize three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Color, Intensity
scene.add( ambientLight );

const light = new THREE.AmbientLight( 0xffffff, 0.6 ); // soft white light
light.position.set(0, 1, 0)
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set(10, 5, 10);
scene.add( directionalLight );

const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.5 );
scene.add( hemisphereLight );

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(-5, -2, 0);
scene.add(pointLight);


// Example cube object
// const geometry = new THREE.BoxGeometry( 2, 2, 2 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );

// Load models
const loader = new GLTFLoader();

// const axesHelper = new THREE.AxesHelper(20);
// scene.add(axesHelper);

// Set camera position
camera.position.z = 8;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();






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
  textbox.style.color = '#333533'
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

// horizontal scrolling
const slider = document.getElementById('slider');
const cards = gsap.utils.toArray('.card');
const gigglehub = document.getElementById('gigglehub');
const experienceTwo = document.getElementById('experience-two');
const experienceThree = document.getElementById('experience-three');
const clouds = gsap.utils.toArray('.cloud-container img');

let tl = gsap.timeline({
  defaults: {
    ease: "none"
  }, 
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth,
  }
})

tl.to(slider, {
  xPercent: -75.1
})

// fade in cards
tl.from(gigglehub, {
  opacity: 0,
  scale: 0.96,
  scrollTrigger: {
    trigger: gigglehub,
    start: "left 50%",
    end: "center center",
    containerAnimation: tl,
    scrub: true,
    // markers: true
  }
})

tl.from(experienceTwo, {
  scale: 0.95,
  opacity: 0,
  scrollTrigger: {
    trigger: experienceTwo,
    start: "left 60%",
    end: "center center",
    containerAnimation: tl,
    scrub: true,
    // markers: true
  }
})

tl.from(experienceThree, {
  // xPercent: -5,
  // yPercent: -5,
  opacity: 0,
  scale: 0.95,
  scrollTrigger: {
    trigger: experienceThree,
    start: "left 60%",
    end: "center center",
    containerAnimation: tl,
    scrub: true,
    // markers: true
  }
})

// fade out cards
tl.to(gigglehub, {
  yPercent: 7,
  opacity: 0,
  scrollTrigger: {
    trigger: gigglehub,
    start: "right 70%", 
    end: "left center", 
    scrub: true,
    // markers: true 
  }
});

// cloud animation on scrolling
clouds.forEach((cloud, index) => {
  gsap.from(cloud, {
    xPercent: cloud.dataset.distance,
    scrollTrigger: {
      scrub: 0.3
    }
  })
})

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)