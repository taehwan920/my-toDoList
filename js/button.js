function button() {
    const input = document.querySelector('input');
    let submitted = input.value;

    const board = document.querySelector('.list-board');
    const createDiv = document.createElement('div')
    const addContent = document.createTextNode(submitted);

    let HowMany = board.childElementCount

    if (HowMany == 5) {
        input.value = '';
    } else {
        createDiv.appendChild(addContent);
        createDiv.setAttribute("class", "to-do");
        board.appendChild(createDiv);
        input.value = '';
    };
};


