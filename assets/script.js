const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	
	}
]
// Récupérer l'élément du conteneur de diapositives
var slideContainer = document.getElementById("banner");

// Récupérer l'élément du conteneur de points
var dotContainer = document.querySelector(".dots");

// Récupérer tous les éléments avec la classe "dot" (vos points de diapositive)
var dots = document.querySelectorAll(".dot");

// Nombre total de diapositives
var totalSlides = slides.length;

var currentSlideIndex = 0 ;// Index de la slide actuelle

// Définir la première diapositive comme sélectionnée
slides[0].selected = true;

// Parcourir le tableau de diapositives
slides.forEach(function(slide, index) {
    // Vérifier si la diapositive est sélectionnée
    if (slide.selected) {
        // Ajouter la classe "dot_selected" à l'élément correspondant au point dans la présentation
        dots[index].classList.add("dot_selected");
    } else {
        // Si la diapositive n'est pas sélectionnée, supprimer la classe "dot_selected" de l'élément correspondant
        dots[index].classList.remove("dot_selected");
    }
});


document.addEventListener("DOMContentLoaded", function() {
	var arrowRight = document.querySelector('.arrow_right');
	// Ajoute un écouteur d'événements pour le clic droit
	arrowRight.addEventListener("contextmenu", function(event) {
		event.preventDefault(); // Empêche l'affichage du menu contextuel par défaut
		alert("Clic droit sur la flèche droit !");
	});
    // Ajoute un écouteur d'événements pour le clic de souris gauche sur l'image avec la classe "arrow_left"
    arrowLeft.addEventListener("click", function(event) {
        if (event.button === 0) {
            alert("Clic gauche sur la flèche gauche !");
        }   else if (event.button === 2) {
			// Clic droit
			alert("Clic droit sur la flèche gauche !");
		}
    });


})

// Fonction pour afficher la diapositive suivante
function afficherDiapositiveSuivante() {
    // Mettre à jour l'index de la diapositive actuelle pour passer à la suivante
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // Mettre à jour le contenu du carrousel
    updateBannerContent();
}

// Fonction pour mettre à jour le contenu de la balise p dans le conteneur #banner
function updateBannerContent() {
    var bannerImg = document.querySelector('#banner .banner-img');
    var tagLine = document.querySelector('#banner p');


}
// Fonction pour mettre à jour le tagline
function updateTagLine() {
    var tagLineContent = slides[currentSlideIndex].tagLine;
    var tagLine = document.querySelector('#banner p');

	 // Mettre à jour le contenu de la balise p
	 tagLine.innerHTML = tagLineContent;
}

document.addEventListener('DOMContentLoaded', function() {
    var images = ['./assets/images/slideshow/slide1.jpg', './assets/images/slideshow/slide2.jpg', './assets/images/slideshow/slide3.jpg', './assets/images/slideshow/slide4.png']; // Chemins vers les images des slides

    // Fonction pour mettre à jour l'image de la bannière et le tagline
    function updateBannerImage() {
        var bannerImg = document.querySelector('.banner-img');
		
        bannerImg.src = images[currentSlideIndex]; // Met à jour l'image en fonction de l'index de la slide actuelle
		
		
    }
  // Fonction pour mettre à jour les bullet points
  function updateDots() {
	var dots = document.querySelectorAll('.dot');
	dots.forEach(function(dot, index) {
		if (index === currentSlideIndex) {
			dot.classList.add('dot_selected'); // Applique la classe dot_selected à la slide actuelle
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Écouteur d'événement pour le clic sur la flèche droite
var arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', function() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Passe à la prochaine slide en bouclant à la fin 
	updateBannerImage();
	updateDots();
    updateBannerContent()
	updateTagLine();
});

  // Écouteur d'événement pour le clic sur la flèche gauche
  var arrowLeft = document.querySelector('.arrow_left');
  arrowLeft.addEventListener('click', function() {
	  currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length; // Passe à la slide précédente en bouclant au début
	  updateBannerImage();
	  updateDots();
	  updateBannerContent(); // Mettre à jour le contenu du carrousel
	  updateTagLine();

  });

});