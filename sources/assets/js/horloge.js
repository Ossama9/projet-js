// HORLOGE
function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById('horloge').innerHTML = time;
}
setInterval(displayTime, 1000);


// initialisation des variables
var centi = 0;
var mili = 0;
var sec = 0;
var sec_m = document.getElementById('nombresec').value;
var sec_;
var afficher;
var compteur;

// affichage du compteur à 0
document.getElementById('time').innerHTML = "0" + sec + ":" + "0" + mili;
document.getElementById('minuterie').innerHTML = sec_m + ":" + "0" + mili;



function chrono() {
    const audio = new Audio('./style/horloge3.mp3');
    setInterval(function (){
        mili++;
        if (mili > 9) {
            mili = 0;
        }
    }, 1);
    centi++;
    centi*10;//pour passer en dixièmes de sec
    //on remet à zéro quand on passe à 1seconde
    if (centi > 9) {
        centi = 0;
        sec++;
        audio.play();
    }
    if (sec < 10) {
        sec_ = "0" + sec;
    }
    else {
        sec_ = sec;
    }
    afficher = sec_ + ":" + centi + mili;
    document.getElementById("time_app").innerHTML = afficher;
    reglage = window.setTimeout("chrono();",100);
}


centi_m=0;
function minuterie() {
    centi_m++;
    if (sec_m==0){
        const audio = new Audio('./style/finish.mp3');
        audio.play();
        return 0;
    }
    if (centi_m > 9) {
        centi_m = 0;
        sec_m--;
    }
    afficher = sec_m + ":" + centi_m;
    document.getElementById("minuterie").innerHTML = afficher;
    reglage = window.setTimeout("minuterie();",100);
}

function debut()
{
    document.parametre.lance.disabled = "disabled";
    document.parametre.pause.disabled = "";
    document.parametre.zero.disabled = "";
    document.parametre.intermediaire.disabled = "";
    document.parametre.rappel.disabled = "";
}
function arret()
{
    window.clearTimeout(reglage);
    document.parametre.lance.disabled = "";
    document.parametre.pause.disabled = "disabled";
    document.parametre.zero.disabled = "";
    document.parametre.intermediaire.disabled = "";
    document.parametre.rappel.disabled = "";
}

function raz()
{
    document.parametre.zero.disabled = "disabled";
    document.parametre.intermediaire.disabled = "disabled";
    document.parametre.rappel.disabled = "disabled";
    centi = 0;
    mili = 0;
    sec = 0;
    compteur = "aucun temps intermediaire enregistré";
    afficher = sec + "0:" + centi + mili;
    document.getElementById("time_app").innerHTML = afficher;
    document.getElementById('presenter').style.visibility='hidden';
    document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(50,205,50, 0.25)';
}

function inter()
{
    compteur = document.getElementById("time_app").innerHTML;
    document.getElementsByName('intermediaire')[0].style.backgroundColor = "orange";
}

function rappeler() {
    document.getElementById('presenter').style.visibility='visible';
    document.getElementById('interm').innerHTML = compteur;
    document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(50,205,50, 0.25)';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}