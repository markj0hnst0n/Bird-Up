var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

// load images

bird.src = "assets/images/fbsprite.png";
bg.src = "assets/images/bg.png";
fg.src = "assets/images/fg.png";
pipeNorth.src = "assets/images/pipeDown.png";
pipeSouth.src = "assets/images/pipeUp.png";


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

pipe [0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){

    ctx.drawImage(bg,0,0);

    for(var i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;
    }
    

    ctx.drawImage(fg,0,cvs.height - fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    requestAnimationFrame(draw);
}

draw();