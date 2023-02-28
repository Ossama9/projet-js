let input;
const screenWidth = window.innerWidth;
document.addEventListener('DOMContentLoaded', () => {
    input = document.querySelector('#input-file')
})
if (screenWidth < 750){
    result = confirm('La page marche que sur la rotation')
    if (result){
        location.reload()
    }
}

function clickFunction() {
    input.click()
}
