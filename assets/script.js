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

// Récupère l'élément HTML avec l'id "banner"
const slideContainer = document.getElementById("banner");

// Récupère l'élément HTML avec la classe "dots"
const dotContainer = document.querySelector(".dots");

// Récupère tous les éléments HTML avec la classe "dot"
const dots = document.querySelectorAll(".dot");

// Nombre total de diapositives
const totalSlides = slides.length;

// Index de la diapositive actuellement affichée, initialisé à 0
let currentSlideIndex = 0;

// Initialisation de la première diapositive comme sélectionnée
slides[0].selected = true;

// Fonction pour mettre à jour l'état des points (indicateurs visuels des diapositives)
function updateDots() {
    dots.forEach((dot, index) => {
        // Ajoute ou enlève la classe "dot_selected" en fonction de l'index de la diapositive courante
        dot.classList.toggle("dot_selected", index === currentSlideIndex);
    });
}

// Fonction pour mettre à jour l'image et le slogan de la bannière
function updateBannerContent() {
    // Récupère l'élément HTML avec la classe "banner-img"
    const bannerImg = document.querySelector('.banner-img');
    // Change la source de l'image à afficher
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
    
    // Récupère l'élément <p> dans l'élément avec l'id "banner"
    const tagLine = document.querySelector('#banner p');
    // Change le contenu HTML du slogan
    tagLine.innerHTML = slides[currentSlideIndex].tagLine;
}

// Fonction pour afficher la diapositive suivante
function afficherDiapositiveSuivante() {
    // Incrémente l'index de la diapositive courante de manière cyclique
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    // Met à jour le contenu de la bannière
    updateBannerContent();
    // Met à jour l'état des points
    updateDots();
}

// Récupère l'élément HTML avec la classe "arrow_right"
const arrowRight = document.querySelector('.arrow_right');

// Ajoute un écouteur d'événement pour les clics sur la flèche droite
arrowRight.addEventListener('click', (event) => {
    
    // Affiche la diapositive suivante
     afficherDiapositiveSuivante();
});

// Récupère l'élément HTML avec la classe "arrow_left"
const arrowLeft = document.querySelector('.arrow_left');

// Ajoute un écouteur d'événement pour les clics sur la flèche gauche
arrowLeft.addEventListener('click', (event) => {
     // Décrémente l'index de la diapositive courante de manière cyclique
     currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    // Met à jour le contenu de la bannière
     updateBannerContent();
    // Met à jour l'état des points
    updateDots();
});
