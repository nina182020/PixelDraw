const startingCanvas = (() => {
    let i = 0;
    while (i<256){
    i++;
    createDiv();
    };
})();

window.addEventListener("mouseover", function() {
    let pixels = document.querySelectorAll(".pixel");
    Array.from(pixels, function(pixel) {
        pixel.addEventListener("mousedown", function() {
            let color = document.getElementById("pickColor").value;
            this.style.backgroundColor = color;
        });
    });
});

function createDiv() {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.classList.add('pixel');
};  

function getInputValue() {
    let inputValue = document.getElementById("canvasSize").value;
    let i = 0;
    while (i < inputValue) {
        i++;
        createDiv();    
    };
};

function reset() {
    window.location.reload();
};

let funBtn = document.getElementById("funBtn");
funBtn.addEventListener('click', function(e) { 
    funBtn.innerHTML = "HI!";
    funBtn.style.boxShadow = 'none';
});