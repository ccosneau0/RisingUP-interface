let experienceBarLevel = document.querySelector('.bar__level');
let userExperience = 44;

let accountLink = document.querySelector('.header__account');
let accountInfo = document.getElementById('account__info');

// Gestion du niveau de remplissage de la barre d'experience
experienceBarLevel.style.width = userExperience * 0.4 + "vw";

// au clic sur le nom de compte --> affichage des liens de redirection
accountLink.addEventListener('click', function() {
  if(accountInfo.classList.contains('account--none') == true) {
    accountInfo.classList.replace('account--none', 'account__info');
  } else {
    accountInfo.classList.replace('account__info', 'account--none');
  }
});
