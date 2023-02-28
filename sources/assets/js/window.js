function closeWin(){
    document.getElementById("window").style.display = "none";
}

function fullwidth() {
    document.getElementById("window").classList.toggle("full-width")
}

function openCalculatApp(){
    document.getElementById("window").style.display = "block";
    document.getElementById("calculate").style.display = "block";
    document.getElementById("tictactoe").style.display = "none";
    document.getElementById("horloge_B").style.display = "none";
    document.getElementById("settings").style.display = "none";
}

function openHorlogeApp(){
    document.getElementById("window").style.display = "block";
    document.getElementById("horloge_B").style.display = "block";
    document.getElementById("calculate").style.display = "none";
    document.getElementById("tictactoe").style.display = "none";
    document.getElementById("settings").style.display = "none";
}
function openTictactoeApp(){
    document.getElementById("window").style.display = "block";
    document.getElementById("tictactoe").style.display = "block";
    document.getElementById("calculate").style.display = "none";
    document.getElementById("horloge_B").style.display = "none";
    document.getElementById("settings").style.display = "none";
}
function openSettingsApp(){
    document.getElementById("window").style.display = "block";
    document.getElementById("settings").style.display = "block";
    document.getElementById("tictactoe").style.display = "none";
    document.getElementById("calculate").style.display = "none";
    document.getElementById("horloge_B").style.display = "none";
}
