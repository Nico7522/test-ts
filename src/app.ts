import scrollTo from 'scroll-to' 
 
scrollTo(500, 1200, {
  ease: 'out-bounce',
  duration: 1500
});

const buttonLeft = document.querySelector<HTMLButtonElement>("#btn-left")!;
const buttonRight = document.querySelector<HTMLButtonElement>("#btn-right")!;
const number = document.querySelector<HTMLSpanElement>("#number");

let actualNumber: number = 0;
function addMore(): void {
  if (number !== null) {
    actualNumber += 1;
    number.innerText = actualNumber.toString();
  }
}

function remove(): void {
  if (number !== null) {
    actualNumber -= 1;
    number.innerText = actualNumber.toString();
  }
}

buttonLeft.addEventListener("click", remove);
buttonRight.addEventListener("click", addMore);