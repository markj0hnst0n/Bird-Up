let pipe = document.getElementById("pipe");
let space = document.getElementById("space");
let sprite = document.getElementById("sprite");
let jumping = 0;

space.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300) +150);
    space.style.top = random + "px";
});
setInterval(function(){
    let spriteTop = 
    parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
    if(jumping==0){
        sprite.style.top = (spriteTop+3)+"px";
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var spriteTop = parseInt(window.getComputedStyle(sprite).getPropertyValue("top"));
        if((spriteTop>6)&&(counter<15)){
            sprite.style.top = (spriteTop-10)+"px";
        }
        if(jumpCount>20) {
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}