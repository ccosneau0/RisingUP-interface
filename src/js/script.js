let experienceBarLevel = document.querySelector('.bar__level');
let card = document.querySelector('.card');
let userExperience = 44;


experienceBarLevel.style.width = userExperience * 0.4 + "vw";

card.addEventListener('click', function() {
  document.location.href="file:///Users/charles/Desktop/RisingUp/RisingUp-interface/class.html"; 
});