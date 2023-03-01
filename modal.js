function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}







// DOM Elements

// Création d'une constante pour identifier le formulaire.
const modalbg = document.querySelector(".bground");

// Création d'une constante pour identifier le bouton d'ouverture du formulaire - "je m'inscris".
const modalBtn = document.querySelectorAll(".modal-btn");

// Création d'une constante pour identifier les div qui contiennent chaque champs de formulaire.
const formData = document.querySelectorAll(".formData");



// launch modal event -> selection du bouton d'ouverture de formulaire, auquel on applique une boucle forEach
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// 1 - TODO : FERMER LA MODALE
// launch modal form - fonction d'ouverture du formulaire
function launchModal() { 
  modalbg.style.display = "block";
};
// close modal form - fonction de fermeture du formulaire
function closeModal() {
	modalbg.style.display = "none";
};


// 2 - TODO : IMPLEMENTER ENTREES DU FORMULAIRE

// Création d'une constante pour identifier les input type text du formulaire.
let userFirstName = document.getElementById("first");



userFirstName.addEventListener('input', function(e) {
    if( userFirstName.value.length <= 2 ) {
        console.log("entrer plus de 2 caractères");
    } else {
        console.log("ok prénom");
    }
});



let userLastName = document.getElementById("last");
userLastName.addEventListener('input', function(e) {
  if( userLastName.value.length <= 2 ) {
      console.log("entrer plus de 2");
  } else {
      console.log("ok nom");
  }
});


let userEmail = document.getElementById("email");
userEmail.addEventListener('input', function(e) {
  function checkEmail(userEmail) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(userEmail));
  }

  if(checkEmail(userEmail)) {
      console.log("veuillez entrer un email valide");
  } else {
      console.log("ok email");
  }
});



function validate() {
  var email = document.getElementById("email").value;

  if (checkEmail(email)) {
      alert('Adresse e-mail valide');
  } else {
      alert('Adresse e-mail non valide');
  }
  return false;
}