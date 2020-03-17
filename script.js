function button() {
    const input = document.querySelector('input');
    let submitted = input.value;

    const board = document.querySelector('.list-board');
    const createDiv = document.createElement('div');
    const addContent = document.createTextNode(submitted);

    createDiv.appendChild(addContent);
    board.appendChild(createDiv);
    input.value = '';
};