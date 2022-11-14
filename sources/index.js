let inputs = document.querySelectorAll('input')
const totalSpan = document.querySelector('#total')

let total = '';
let old = 0;
inputs.forEach((input) => {

    input.addEventListener('click', () => {


        if (input.value === '+' || input.value === '=' && total !== '') {
            old === 0 ? old = parseFloat(total) : old += parseFloat(total)
            totalSpan.innerHTML = parseFloat(old)
            total = 0
        } else if (!isNaN(input.value)) {
            total += input.value
            totalSpan.innerHTML = parseFloat(total)
        }


    })
})