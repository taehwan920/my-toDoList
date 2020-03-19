const inputEle = document.querySelector('input');
const btnEle = document.querySelector('button');

const inputFocused = () => {
    btnEle.style.opacity = 1;
}

const inputBlurred = () => {
    btnEle.style.opacity = 0;
}

inputEle.addEventListener('focus', inputFocused);
inputEle.addEventListener('blur', inputBlurred);