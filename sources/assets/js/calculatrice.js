let outputScreen =document.getElementById("output-screen");

function display(num){
    outputScreen.value += num;
}

function calculatrice(){
    const regex = /(\d+\.?\d*)([+\-*/])(\d+\.?\d*)/;
    const match = outputScreen.value.match(regex);
    if (match) {
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
    outputScreen.value = outputScreen.value.slice(0,-1);
}