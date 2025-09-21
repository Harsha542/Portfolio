// Typing Effect
const typingText = document.querySelector('.typing-text');
const text = "Hi, I'm Harsha 👋";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = () => {
  typingText.textContent = "";
  typeEffect();
};

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll Reveal
const sections = document.querySelectorAll('.about, .projects, .profiles, .contact');
const revealSection = () => {
  sections.forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });
};
window.addEventListener('load', revealSection);
