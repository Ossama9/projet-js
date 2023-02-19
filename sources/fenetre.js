function closeWin(){
    document.getElementById("window").style.display = "none";
}

function fullwidth() {
    if (document.getElementById("window").style.width<"100%"){
        document.getElementById("window").style.width = "100%";
        document.getElementById("window").style.height = "100vh";
        document.getElementById("window").style.marginTop = "0vh";
    }
    else {
        document.getElementById("window").style.width = "50%";
        document.getElementById("window").style.height = "70vh";
        document.getElementById("window").style.marginTop = "10vh";
    }
}