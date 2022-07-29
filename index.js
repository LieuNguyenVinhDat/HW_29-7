let myCanvas = document.getElementById("myCanvas");

const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let pen = myCanvas.getContext("2d");
let body = document.getElementsByTagName("body")[0]
body.onclick = function() {
        moMat = !moMat
    }
    // set stroke color
    // pen.strokeStyle = "black";

// pen.beginPath();
// pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, Math.PI * 2, );
// pen.stroke();



// pen.beginPath();
// pen.arc(WIDTH / 2 - 120, HEIGHT / 1.8 - 80, 30, 0, Math.PI);
// pen.stroke();

// pen.beginPath();
// pen.arc(WIDTH / 2 + 120, HEIGHT / 1.8 - 80, 30, 0, Math.PI);
// pen.stroke();

// pen.beginPath();
// pen.arc(WIDTH / 2 - 40, HEIGHT / 1.8 + 50, 50, 0, Math.PI);
// pen.stroke();

// pen.beginPath();
// pen.arc(WIDTH / 2 + 60, HEIGHT / 1.8 + 50, 50, 0, Math.PI);
// pen.stroke();




// hello


function drawFace(mat) {
    pen.fillStyle = 'Pink';
    pen.strokeStyle = "black";
    pen.lineWidth = 5;
    pen.beginPath();
    pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, Math.PI * 2, );
    pen.stroke();
    pen.fill();



    // Mieng
    pen.beginPath();
    pen.arc(WIDTH / 2 - 40, HEIGHT / 1.8 + 50, 50, 0, Math.PI);
    pen.stroke();

    pen.beginPath();
    pen.arc(WIDTH / 2 + 60, HEIGHT / 1.8 + 50, 50, 0, Math.PI);
    pen.stroke();
    pen.stroke();



    if (mat == true) {
        // Mat phai
        pen.beginPath();
        pen.lineWidth = 2;
        pen.fillStyle = '#00FFFF';
        pen.arc(270, 170, 35, 0, Math.PI * 2);
        pen.stroke();
        pen.fill();

        pen.beginPath();
        pen.fillStyle = '#00FFFF';
        pen.arc(450, 170, 35, 0, Math.PI * 2);
        pen.stroke();
        pen.fill();

    } else {

        // Mat nham
        pen.beginPath();

        pen.lineWidth = 2;
        pen.arc(270, 170, 35, Math.PI, 0 * Math.PI, true);

        pen.stroke();

        pen.beginPath();

        pen.lineWidth = 2;
        pen.arc(450, 170, 35, Math.PI, 0 * Math.PI, true);

        pen.stroke();
    }


}

const FPS = 3.5;
let startFrameTime = Date.now();
let moMat = true;

function gameLoop() {
    pen.clearRect(0, 0, WIDTH, HEIGHT);
    let currentFrameTime = Date.now();
    let deltaTime = currentFrameTime - startFrameTime;
    let actualFPS = 1000 / deltaTime;
    pen.textStyle = "20px Arial";
    pen.fillText("FPS: " + actualFPS.toFixed(2), 10, 20);
    startFrameTime = currentFrameTime;

    drawFace(moMat)



    console.log(startFrameTime);
}

setInterval(gameLoop, 2000 / FPS);