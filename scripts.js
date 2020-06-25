let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext("2d")

let dx =1;
let dy =1;
let x = 200;
let y = 10;

function drawSprite(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.rect(x,y,20,20);
    ctx.fillStyle ="#0095DD"
    ctx.fill();
    ctx.closePath();
    
   if(x + dx > canvas.width){
        dx = -dx;
   } else if(x +dx < 0){
       dx = -dx;
   } else if (y + dy > canvas.height){
       dy = -dy;
   } else if(y + dy < 0){
       dy = -dy;
   } else{
       x += dx;
       y += dy;
   }

}
setInterval(drawSprite, 5);
console.log(ctx);