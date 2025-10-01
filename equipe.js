$(document).ready(function() {
  // Animation du dernier cadre (bannière récompense) : léger mouvement horizontal infini
  function animateBanner() {
    $('#reward-banner').animate({ left: "+=10px" }, 1000)
      .animate({ left: "-=10px" }, 1000, animateBanner);
  }

  // Position relative nécessaire pour l'animation
  $('#reward-banner').css('position', 'relative');

  animateBanner();
});