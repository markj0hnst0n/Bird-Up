const cvs = document.getElementById("canvas");
cvs.width = 288;
cvs.height = 512;

const ctx = cvs.getContext("2d");

// Event Listeners to control game

document.addEventListener("keydown",moveUp);
document.addEventListener("click", moveUp);

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeTop = new Image();
let pipeBottom = new Image();

// load images

bird.src = "assets/images/fbsprite.png";
bg.src = "assets/images/bg.png";
fg.src = "assets/images/fg.png";
pipeTop.src = "assets/images/pipeDown.png";
pipeBottom.src = "assets/images/pipeUp.png";

const gap = pipeTop.height+200;

let bX = 10;
let bY = 150;

const gravity = 1.5;

function moveUp(){
    bY -= 30;
}

// pipe coordinates

let pipe = [];

pipe [0] = {
    x : cvs.width,
    y : 0
};

// Play Game

function draw(){

    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird,bX,bY);
    bY += gravity;

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeTop,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeBottom,pipe[i].x,pipe[i].y+gap);

        pipe[i].x--;

        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeTop.height) - pipeTop.height
            });
        }

        // Collision Detection

        let collision = bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeTop.width && (bY <= pipe[i].y + pipeTop.height || bY+bird.height >= pipe[i].y+gap) || bY + bird.height >= cvs.height - fg.height;
        
        
        if(collision){
            if (confirm("Game Over!  Start Again?")) {
                location.reload();
            } else {
                txt = "You pressed Cancel!";
            }
            return;
        }
    }
    ctx.drawImage(fg,0,cvs.height - fg.height);
    requestAnimationFrame(draw);
}

draw();