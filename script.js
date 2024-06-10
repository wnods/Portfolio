const particleContainer = document.querySelector('.particle-container');

for (let i = 0; i < 500; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${i * 0.01}s`;
    particleContainer.appendChild(particle);
}

const phrases = [
    "< Analista de Dados />",
    "< Web Developer />",
    "< Geoprocessamento />",
    "< Geofísico />"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenPhrases = 2000;
const dynamicTextElement = document.getElementById('dynamic-text');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
        currentCharIndex--;
        dynamicTextElement.innerHTML = currentPhrase.substring(0, currentCharIndex);
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        currentCharIndex++;
        dynamicTextElement.innerHTML = currentPhrase.substring(0, currentCharIndex);
        if (currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenPhrases);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    type();
});

function navigateToSection(event, sectionId) {
    event.preventDefault();
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
    targetSection.classList.add('active');

    targetSection.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("scroll", function() {
    var backToTop = document.querySelector(".back-to-top");
    if (window.scrollY > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

document.querySelector(".back-to-top").addEventListener("click", function() {
    window.scrollTo(0, 0);
});
