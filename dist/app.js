import scrollTo from 'scroll-to';
scrollTo(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});
const buttonLeft = document.querySelector("#btn-left");
const buttonRight = document.querySelector("#btn-right");
const number = document.querySelector("#number");
let actualNumber = 0;
function addMore() {
    if (number !== null) {
        actualNumber += 1;
        number.innerText = actualNumber.toString();
    }
}
function remove() {
    if (number !== null) {
        actualNumber -= 1;
        number.innerText = actualNumber.toString();
    }
}
buttonLeft.addEventListener("click", remove);
buttonRight.addEventListener("click", addMore);
