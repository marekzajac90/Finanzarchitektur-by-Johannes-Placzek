const hamburger = document.querySelector(".header__nav--hamburger-js")
const aside = document.querySelector(".header__aside")

// angebot elemente
const element1 = document.querySelector("#angebot__element1")
const element2 = document.querySelector("#angebot__element2")
const element3 = document.querySelector("#angebot__element3")
const element4 = document.querySelector("#angebot__element4")
const element5 = document.querySelector("#angebot__element5")
const angebot__heading = document.querySelector("#angebot__heading")
const angebot__text = document.querySelector("#angebot__text")

$(element1).on('mouseover', function () {
    angebot__heading.innerHTML = '1. Analyse'
    angebot__text.innerHTML = 'Erfassen der Ist-Situation mit den individuellen Wünschen und Zielen des Kunden'});
$(element2).on('mouseover', function () {
    angebot__heading.innerHTML = '2. Planung'
    angebot__text.innerHTML = 'Auswertung und Vermögensplanung mit Qualitätssiegel'});
$(element3).on('mouseover', function () {
    angebot__heading.innerHTML = '3. Beratung'
    angebot__text.innerHTML = 'Persönliche Beratung, abgestimmt auf die individuellen Wünsche und Ziele des Kunden'});
$(element4).on('mouseover', function () {
    angebot__heading.innerHTML = '4. Umsetzung'
    angebot__text.innerHTML = 'Realisierung der Vermögensplanung'});
$(element5).on('mouseover', function () {
    angebot__heading.innerHTML = '5. Partnerschaft'
    angebot__text.innerHTML = 'Dauerhafte Betreuung und Partnerschaft'});

// nav elemente

const link__startseite = document.querySelector("#menu__link--startseite")
const link__übermich = document.querySelector("#menu__link--über-mich")
const link__leistungen = document.querySelector("#menu__link--leistungen")
const link__angebot = document.querySelector("#menu__link--angebot")
const link__kariere = document.querySelector("#menu__link--kariere")
const link__kontakt = document.querySelector("#menu__link--kontakt")

const link__startseite_pc = document.querySelector("#menu__link--startseite-pc")
const link__übermich_pc = document.querySelector("#menu__link--über-mich-pc")
const link__leistungen_pc = document.querySelector("#menu__link--leistungen-pc")
const link__angebot_pc = document.querySelector("#menu__link--angebot-pc")
const link__kariere_pc = document.querySelector("#menu__link--kariere-pc")
const link__kontakt_pc = document.querySelector("#menu__link--kontakt-pc")

const link__startseite_pc_float = document.querySelector("#menu__link--startseite-pc-float")
const link__übermich_pc_float = document.querySelector("#menu__link--über-mich-pc-float")
const link__leistungen_pc_float = document.querySelector("#menu__link--leistungen-pc-float")
const link__angebot_pc_float = document.querySelector("#menu__link--angebot-pc-float")
const link__kariere_pc_float = document.querySelector("#menu__link--kariere-pc-float")
const link__kontakt_pc_float = document.querySelector("#menu__link--kontakt-pc-float")

// Nawigacja pojawiajaca sie przy scrolowaniu zmienne
var previousScrollTop;
var isScrolling;
var nav = document.querySelector('.active');

// Nawigacja przy scrolowaniu kod
function hasScrolled() {
  
    var scrollTop = window.scrollY;
    
    if (scrollTop > previousScrollTop){
      nav.classList.add('active--up');
    } else {
      nav.classList.remove('active--up');
    }
      
    previousScrollTop = scrollTop;
    
  }

  document.addEventListener('scroll', function() {
    isScrolling = true;
  }, false);
  
  setInterval(function() {
    if (isScrolling) {
      hasScrolled();
      isScrolling = false;
    }
  }, 300);


// float menu

function floatmenu() {
    if ($(window).scrollTop() > 1000) {
        $('.header__navpcbgc').addClass('active');
    } else {
        $('.header__navpcbgc').removeClass('active');
    }
}
setInterval(floatmenu, 5);

// Hamburger menu

$(hamburger).on('click', function () {
    $(hamburger).toggleClass("is-active")
    $(aside).toggleClass("header__aside--active")
});

// Menu Mobile

$(link__startseite).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#header').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__übermich).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#über-mich').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__leistungen).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#leistungen').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active") 
});
$(link__angebot).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#angebot').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kariere).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#kariere').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kontakt).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#kontakt').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});

// Menu PC


$(link__startseite_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#header').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__übermich_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#über-mich').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__leistungen_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#leistungen').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active") 
});
$(link__angebot_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#angebot').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kariere_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#kariere').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kontakt_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#kontakt').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});


// Menu PC float active

$(link__startseite_pc_float).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#header').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__übermich_pc_float).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#über-mich').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__leistungen_pc_float).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#leistungen').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active") 
});
$(link__angebot_pc_float).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#angebot').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kariere_pc_float).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#kariere').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kontakt_pc_float).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#kontakt').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});


