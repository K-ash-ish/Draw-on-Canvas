


const canvas  = document.getElementById("draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
ctx.globalCompositeOperation="lighten";

let isDrawing = false;
let hue = 0;
let lastX = 0; 
let lastY = 0;
 
function draw(e){
    if(!isDrawing) return;

    ctx.strokeStyle = "hsl("+hue+",100%,50%)";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    console.log(hue);
    hue++;
    if(hue>=360){
        hue=0;
    }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;

} );
canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;

} );
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("touchend", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
canvas.addEventListener("touchend", () => isDrawing = false);
