var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeDown = new Image();

// load images

bird.src = "assets/images/fbsprite.png";
bg.src = "assets/images/bg.png";
fg.src = "assets/images/fg.png";
pipeUp.src = "assets/images/pipeUp.png";
pipeDown.src = "assets/images/pipeDown.png";


var gap = 80;
var constant = pipeUp.height+gap;

var bX = 10;
var bY = 150;

var gravity = 1;

// key press event

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 20;
}

// pipe coordinates

var pipe = [];

// draw images

function draw(){

    ctx.drawImage(bg,0,0);

    ctx.drawImage(pipeDown,150,0);
    ctx.drawImage(pipeUp,150,0+constant);

    ctx.drawImage(fg,0,cvs.height - fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    requestAnimationFrame(draw);
}

draw();