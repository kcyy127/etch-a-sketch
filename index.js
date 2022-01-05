

const container = document.getElementById("grid");

function changeColor(event) {
    event.target.classList.add("drawn");
}

function clearGrid() {
    console.log(this);
    const cells = document.querySelectorAll(".drawn");
    cells.forEach(cell => cell.classList.remove("drawn"));
    let dim = Number(window.prompt("New sketch dimensions"));
    while (!(dim > 0 && dim <=100)) {
        dim = Number(window.prompt("New sketch dimensions"));
    }


    const old = document.querySelectorAll(".grid-item");
    old.forEach(o => o.remove());
    makeGrid(dim);
}

function makeGrid(dim) {
    container.style.setProperty('--grid-dim', dim);
    for (let i = 0; i<dim * dim; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item"
        
        // cell.addEventListener('mouseover', function(e){
        //     // this.classList.add("drawn");
        //     // e.target.classList.add("drawn");
        //     // console.log(e.target);
        //     // setTimeout(function() {
        //     //     e.target.style.backgroundColor = "";
        //     // }, 500);
        // }, false);;

        cell.onmouseenter = changeColor;
    };

};

makeGrid(20);

const clearBtn = document.getElementById("clear");
clearBtn.onclick = clearGrid;