let outputScreen =document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calculatrice(){
    // regex qui definit les nombres et les operateurs
    //(\d+) suivis éventuellement d'un point décimal (.?) et de zéro ou plusieurs chiffres (\d*)
    const regex = /(\d+\.?\d*)([+\-*/%])(\d+\.?\d*)/;
    // La méthode match() retourne un tableau qui contient toutes les correspondances trouvées dans la chaîne de caractères.
    const match = outputScreen.value.match(regex);
    if (match) {
        // parseFloat() est une fonction JavaScript qui permet de convertir une chaîne de caractères en un float
        const operand1 = parseFloat(match[1]);
        const operator = match[2];
        const operand2 = parseFloat(match[3]);
        let result;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '%':
                result = operand1 % operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }
        outputScreen.value = result.toString();
        document.getElementById('output-screen').value = outputScreen.value;
    }
}
function Clear(){
    outputScreen.value = "" ;
}

function del(){
    //slice signifie qu'on extrait output en partant du premier caractère (index 0) jusqu'à l'avant-dernier caractère (index -1)
    outputScreen.value = outputScreen.value.slice(0,-1);
}