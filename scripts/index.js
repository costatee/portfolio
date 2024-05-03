const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Smooth scrolling script with custom speed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const scrollOptions = {
          behavior: 'smooth'
      };
      const duration = 1000; 
      const distance = Math.abs(target.getBoundingClientRect().top - window.scrollY);
      scrollOptions.duration = Math.min(duration, Math.max(100, distance));

      target.scrollIntoView(scrollOptions);
  });
});

const textbox = document.getElementById('textbox');

// Wrap each individual letter in a <span> tag
const text = textbox.textContent.trim();
const newText = text.split('').map(letter => `<span>${letter}</span>`).join('');
textbox.innerHTML = newText;

textbox.addEventListener('mouseover', function(event) {
  if (event.target.tagName === 'SPAN') {
      event.target.style.transition = 'color 30ms ease-in-out'; // Add transition for font size change
      event.target.style.color = getRandomColor(); // Change color to a random one
  }
});

textbox.addEventListener('mouseout', function(event) {
  if (event.target.tagName === 'SPAN') {
      event.target.style.transition = 'color 5s ease-in-out'; // Add transition for font size change
      event.target.style.color = ''; // Change color back to white
  }
});

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