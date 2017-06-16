/**
 * Created by Gabri on 15/06/2017.
 */

window.onload=function(){

}
//COMMONS
function paintBorders(ctx){
    ctx.fillStyle = "lime";
    ctx.fillRect(0,0,400,400);

    ctx.fillStyle = "white";
    ctx.fillRect(10,10,380,380);
    ctx.fill();
}


//SNAKE
var posx, posy;
var dirx, diry;
var snake = [];
var lenght = 5;
var inter;
var point = {};



function snakeStart(){
        gameRunning = true;
        document.getElementById("buttonSnake").innerHTML="Retry";
        canv = document.getElementById("canvasSnake");
        document.addEventListener("keydown", keyPressed)
        ctx = canv.getContext("2d");
        lenght = 5;
        while (snake.length > 0) snake.shift();
        snake.push({x: 11, y: 11});
        diry = 0;
        dirx = 10;
        clearInterval(inter);
        point.x = Math.floor(((Math.random())*37)+1)*10+1;
        point.y = Math.floor(((Math.random())*37)+1)*10+1;
        inter = setInterval(updateSnake, 1000 / 10, ctx);

}

function score(){
    lenght++;
    point.x = Math.floor(((Math.random())*37)+1)*10+1;
    point.y = Math.floor(((Math.random())*37)+1)*10+1;
}

function updateSnake(ctx){
    paintBorders(ctx);
    ctx.fillStyle = "blue";

    ctx.fillRect((point.x),(point.y),8,8);
    ctx.fillStyle = "lime";
    var ultim = snake.length-1;
    snake.push({x: snake[ultim].x + dirx,y: snake[ultim].y + diry});
    ultim++;
    if(snake[ultim].x > 390 || snake[ultim].x < 10||snake[ultim].y < 10 ||snake[ultim].y > 390)
        clearInterval(inter);
    if(snake[ultim].x == point.x && snake[ultim].y == point.y) score();
    for(var i = 0; i < ultim; i++){
       ctx.fillRect(snake[i].x,snake[i].y,8,8);
       if(i != ultim && snake[ultim].x == snake[i].x && snake[ultim].y == snake[i].y)
           clearInterval(inter);
    }
    while(snake.length > lenght) snake.shift();
}

function keyPressed(event){
    switch(event.keyCode) {
        case 87: //up
        case 38:
            if(diry == 0)diry = -10;
            dirx = 0;
            break;

        case 83: //down
        case 40:
            if(diry == 0)diry = 10;
            dirx = 0;
            break;

        case 65: //left
        case 37:
            diry = 0;
            if(dirx == 0)dirx = -10;
            break;

        case 68: //right
        case 39:
            diry = 0;
            if(dirx == 0)dirx = 10;
            break;

    }
}