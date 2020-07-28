const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();

// load images

bird.src = "assets/images/fbsprite.png";
bg.src = "assets/images/bg.png";
fg.src = "assets/images/fg.png";
pipeNorth.src = "assets/images/pipeDown.png";
pipeSouth.src = "assets/images/pipeUp.png";


const gap = 200;
const constant = pipeNorth.height+gap;

let bX = 10;
let bY = 150;

const gravity = 1.5;

// key press event

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 30;
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

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;

        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height) - pipeNorth.height
            });
        }

        // Collision Detection
        
        let collision = bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >= cvs.height - fg.height;

        if(collision){
            return;
        }

    }
    

    ctx.drawImage(fg,0,cvs.height - fg.height);

    ctx.drawImage(bird,bX,bY);

    bY += gravity;

    requestAnimationFrame(draw);
}

draw();