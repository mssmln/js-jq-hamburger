// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!


$( document ).ready(function() {

  // isolo l'icona a forma di hamburger e la classe hamburger-menu
  var menu = $('.header-right > a i');
  var menuAperto = $('.hamburger-menu');

  // al click del hamburger mostriamo la x menu
  menu.click(function() {
    menuAperto.show();
  });

  // al click di nuovo chiudiamo il menu ad x
  menuAperto.click(function() {
    menuAperto.hide();
  });

});
