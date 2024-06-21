const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const slideContainer = document.getElementById("banner");
const dotContainer = document.querySelector(".dots");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
let currentSlideIndex = 0;

// Initialisation
slides[0].selected = true;

// Mise à jour de l'état des points
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentSlideIndex);
    });
}

// Mise à jour de l'image et du tagline
function updateBannerContent() {
    const bannerImg = document.querySelector('.banner-img');
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
    const tagLine = document.querySelector('#banner p');
    tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}

// Mise à jour de la diapositive suivante
function afficherDiapositiveSuivante() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateBannerContent();
    updateDots();
}

// Écouteur d'événement pour la flèche droite
const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', (event) => {
    if (event.button === 0) {
        afficherDiapositiveSuivante();
    } else if (event.button === 2) {
        alert("Clic droit sur la flèche droite !");
    }
});

// Écouteur d'événement pour la flèche gauche
const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', (event) => {
    if (event.button === 0) {
        currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
        updateBannerContent();
        updateDots();
    } else if (event.button === 2) {
        alert("Clic droit sur la flèche gauche !");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des éléments de la bannière
    updateBannerContent();
    updateDots();

    // Écouteur d'événement pour le clic droit sur la flèche gauche
    arrowLeft.addEventListener('contextmenu', (event) => {
        event.preventDefault(); // Empêche l'affichage du menu contextuel par défaut
        alert("Clic droit sur la flèche gauche !");
    });
});
