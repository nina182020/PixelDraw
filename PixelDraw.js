const container = document.getElementById("container");
const defaultCanvas = (() => {
    let i = 0;
    while (i < 256) {
        i++;
        createDiv();
    };
})();

document.addEventListener("mouseover", getPixel);
function getPixel() {
    let pixel = document.querySelectorAll(".pixel");
    Array.from(pixel, pixel => {
        pixel.addEventListener("mousedown", colorPixel);
    });
};
let color = document.getElementById("pickColor");
function colorPixel() {
    this.style.backgroundColor = color.value;
};

let canvasSize = document.getElementById("canvasSize");
function createCanvas() {
    if (canvasSize.value > 100) {
        alert("Error, canvas size is too big. Pick a smaller number.");
    } else {
        changeCanvas(canvasSize.value);
        let i = 0;
        while (i < canvasSize.value * canvasSize.value && i < 10000) {
            i++;
            createDiv();    
        };
    };
};
function changeCanvas(value) {
    container.style.setProperty('--gridColumns', value);
    container.style.setProperty('--gridRows', value);
};

function createDiv() {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add('pixel');
};

function reset() {
    window.location.reload();
};

let funBtn = document.getElementById("funBtn");
funBtn.addEventListener("click", () => { 
    funBtn.innerHTML = "HI!";
    funBtn.style.boxShadow = "none";
});