// HORLOGE
function displayTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    document.getElementById('horloge').innerHTML = "<div class='numbers_div'><div class='numbers'>"+ hours + "</div><div class='deux-point'> : </div><div class='numbers'>" + minutes +"</div><div class='deux-point'> : </div><div class='numbers'>" + seconds;
}
setInterval(displayTime, 1000);


// initialisation des variables
let centi = 0;
let mili = 0;
let sec = 0;
let sec_;
let afficher;
let compteur;

// affichage du compteur à 0
document.getElementById('time').innerHTML = "0" + sec + ":" + "0" + mili;



function chrono() {
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
    }
    if (sec < 10) {
        sec_ = "0" + sec;
    }
    else {
        sec_ = sec;
    }
    afficher ="<div class='numbers_div'><div class='numbers'>"+ sec_ + "</div><div class='deux-point'> : </div><div class='numbers'>" + centi + mili;
    document.getElementById("time_app").innerHTML = afficher;
    reglage = window.setTimeout("chrono();",100);
}


function minuterie(){
    let departMinutes = document.getElementById('nombresec').value;
    let temps = departMinutes * 60
    const timerElement = document.getElementById("timer")
    setInterval(async () => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
        if (minutes === 0 && secondes === 0) {
            var audio = document.getElementById("myAudio");
            audio.play();
            document.getElementById('son').innerHTML="<button class='stop_son' onclick='stopSound()'>ARRÊTER LE SON ET QUITTER</button>"
        }
        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
        timerElement.innerHTML = "<div class='numbers_div'><div class='numbers'>"+ minutes+ "</div><div class='deux-point'> : </div><div class='numbers'>" + secondes +"</div></div>"
        temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
}

function stopSound(){
    var audio = document.getElementById("myAudio");
    audio.pause();
    location.reload()
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
    slides[slideIndex-1].style.display = "block";
}