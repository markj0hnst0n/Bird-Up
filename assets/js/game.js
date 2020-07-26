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

// draw images

function draw(){

    ctx.drawImage(bg,0,0);


}

draw();