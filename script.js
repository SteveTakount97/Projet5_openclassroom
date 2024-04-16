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
document.addEventListener("DOMContentLoaded", function() {
    var arrowLeft = document.querySelector(".arrow_left");
    var arrowRight = document.querySelector(".arrow_right");

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


    // Ajoute un écouteur d'événements pour le clic de souris droit sur l'image avec la classe "arrow_right"
    arrowRight.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Empêche le menu contextuel par défaut
        alert("Clic droit sur la flèche droite !");
    });
	 // Ajoute un écouteur d'événements pour le clic de souris gauche sur l'image avec la classe "arrow_right"
	 arrowRight.addEventListener("click", function(event) {
        if (event.button === 0) {
            alert("Clic gauche sur la flèche droite !");
        }   else if (event.button === 2) {
			// Clic droit
			alert("Clic droit sur la flèche droite !");
		}
    });
});