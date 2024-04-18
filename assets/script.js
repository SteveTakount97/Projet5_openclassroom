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
	var arrowLeft = document.querySelector('.arrow_left');
	// Ajoute un écouteur d'événements pour le clic droit
	arrowLeft.addEventListener("contextmenu", function(event) {
		event.preventDefault(); // Empêche l'affichage du menu contextuel par défaut
		alert("Clic droit sur la flèche gauche !");
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

// Fonction pour mettre à jour le contenu de la balise p dans le conteneur #banner
function updateBannerContent() {
    var bannerImg = document.querySelector('#banner .banner-img');
    var tagLine = document.querySelector('#banner p');
	
      // Récupérer la tagline de la diapositive actuelle
	  var currentSlide = slides[currentSlideIndex];
	  var tagLineContent = currentSlide.tagLine;
  
	  // Mettre à jour le contenu de la balise p
	  tagLine.innerHTML = tagLineContent;
   
}

document.addEventListener('DOMContentLoaded', function() {
    var images = ['./assets/images/slideshow/slide1.jpg', './assets/images/slideshow/slide2.jpg', './assets/images/slideshow/slide3.jpg', './assets/images/slideshow/slide4.png']; // Chemins vers les images des slides
    var currentSlideIndex = 0; // Index de la slide actuelle

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
	currentSlideIndex = (currentSlideIndex + 1) % images.length; // Passe à la prochaine slide en bouclant à la fin
	updateBannerImage();
	updateDots();
	updateBannerContent(); // Mettre à jour le contenu du carrousel

});

  // Écouteur d'événement pour le clic sur la flèche gauche
  var arrowLeft = document.querySelector('.arrow_left');
  arrowLeft.addEventListener('click', function() {
	  currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length; // Passe à la slide précédente en bouclant au début
	  updateBannerImage();
	  updateDots();
	  updateBannerContent(); // Mettre à jour le contenu du carrousel

  });
 // Appel initial pour afficher la première diapositive
updateBannerContent();
});
