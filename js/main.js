const hamburger = document.querySelector(".header__nav--hamburger-js")
const aside = document.querySelector(".header__aside")
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
        scrollTop: $('#price').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active") 
});
$(link__angebot).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kariere).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kontakt).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
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
        scrollTop: $('#price').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active") 
});
$(link__angebot_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kariere_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});
$(link__kontakt_pc).on('click', function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 800);
    $(aside).removeClass("header__aside--active")
    $(hamburger).removeClass("is-active")
});