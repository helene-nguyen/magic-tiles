/*Color the tiles Yumicode 2022*/

/* var testFunc = "Hello it's a test" */

//^VARIABLES
const container = document.querySelector("#grid-container");


//^FUNCTIONS
//~Create grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows); //select rows on CSS
    container.style.setProperty('--grid-cols', cols); //select cols on CSS

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div"); //create a new cell div
        cell.classList.add("grid-item"); //add class grid-item
        container.appendChild(cell); //select the parent where we want to appendChild
    };
}

//~Select grid item and color
function selectItem() {
    const select = document.querySelectorAll(".grid-item");
    for (let item = 0; item <= select.length; item++) {
        select[item].addEventListener('click', function () {
            this.classList.toggle("colored");
        });
    }
}

//~Erase all
function removeColor() {
    const select = document.querySelectorAll(".grid-item");
    for (let item = 0; item <= select.length; item++) {
        select[item].classList.remove("colored");
    };
}

//~Get erase button
function eraseButton(){
    const eraseBtn = document.querySelector("#btn-change");
    eraseBtn.addEventListener('click', removeColor);
}
