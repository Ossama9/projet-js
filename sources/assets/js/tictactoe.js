const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
// les 9 champs du jeu
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won !`;
const drawMessage = () => `The game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

// ici on liste toutes les probalités de gagné
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    //Cette ligne met à jour l'état du jeu pour indiquer que le joueur a joué dans la cellule cliquée
    gameState[clickedCellIndex] = currentPlayer;
    //Cette ligne met à jour le contenu de la cellule cliquée pour afficher le symbole du joueur qui vient de jouer
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
    // si curentplayer X danc on met O sinon X
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // Cette ligne met à jour le texte affiché pour indiquer le tour du joueur en cours
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    // on teste tous les probalités pour gagné
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        // a b ou c contient le contenu de la première deuxiemme ou toisiemme case de la condition gagnante
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        // si A = B = C donc on a le meme joueur qui realiser une probabilité gagnante
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        var audio = document.getElementById("win");
        audio.play();
        document.getElementById('tictactoe').setAttribute("style", "background-image: url('assets/images/winner.gif')");
        document.getElementById('game--container').style.display = "none";
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    //récupère la case cliquée en utilisant l'événement clickedCellEvent
    const clickedCell = clickedCellEvent.target;
    //extrait l'index de la cellule en utilisant la méthode getAttribute
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    // si la case est deja cliqué ou la game est fini donc le clique n'est pas validé
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    //sinon on accepte le clique
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    document.getElementById('tictactoe').setAttribute("style", "background-image: url('')");
    document.getElementById('game--container').style.display = "";
}

//ajoute un écouteur d'événement click a tout les element cell, lorsque la clique la fonction handleCellClick est appelé
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
//ajoute un écouteur d'événement click au game--restart, lorsque la clique la fonction handleRestartGame est appelé
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);