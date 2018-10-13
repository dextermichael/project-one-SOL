// A game engine consit of three main things 
// Viewing
// Game Loops
// Handinling user input
//
//Varbles and Math

//View
var canvas = document.querySelector('#canvas');
var c = canvas.getContext("2d");
 // make the ball move

 var dx = 2;
 var dy = -2;
// delta x delta y
// every frame we want to go right two pixels the ball to up pixels
//down is positive up is negative
//dimensions
var x = canvas.width/2;
var y = canvas.height-30;
//ball
var ballRadius = 10;
//
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX =(canvas.width-paddleWidth)/2;
// pddle movement

var paddleDx = 7;
var rightPressed;
var leftPressed;



//renedering ball 
// function of drawing ball
// rendering paddle 


//Controller

function keyDownHandler(event)// press the key

{
 if(event.keyCode == 39){
     rightPressed = true;

    }
 else if(event.keyCode == 37){

    leftPressed = true;
 }

}

function keyUpHandler(event) // release the key

{
 if(event.keyCode == 39){
     rightPressed = false;


 }
 else if(event.keyCode == 37){

    leftPressed = false;
 }

}






document.addEventListener('keydown', keyDownHandler,false);
document.addEventListener('keyup', keyUpHandler,false );

 function drawBall() {

c.beginPath();
c.arc(x, y, ballRadius, 0 ,Math.PI*2);
c.fillStyle = "blue"; // color
c.fill();
c.closePath();

}

function drawPaddle() {

    c.beginPath();
    c.rect(paddleX, canvas.height - paddleHeight, paddleWidth , paddleHeight);
    c.fillStyle = "red"; // color
    c.fill();
    c.closePath();


}



//Game Loop
function draw() {

    c.clearRect(0, 0, canvas.width, canvas.height,);
    //clear the canvas every time new frame happens

    drawBall();
    drawPaddle();
//collison dectect 
//is the ball going to hit

//      is the centr of the ball + where its going greater than the canvas
//       width (right side)                   (left side)
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius)

    // if its true we want x to change direction
    { dx = -dx;

}
// is the centr of the ball + where its going greater than the canvas
//   beyond the  (top)     
if (y + dy < ballRadius ||(

    y + dy > canvas.height - paddleHeight - ballRadius &&
    x + dx > paddleX &&
    x + dx < paddleX + paddleWidth) ) 
    {
//change the y direction
    dy= -dy;
} else if ( y + dy > canvas.height) {
    location.reload();
}

if(rightPressed && (paddleX + paddleWidth) < canvas.width) {

    paddleX += paddleDx;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= paddleDx;
}





    
    



    x += dx;// update ball
    y += dy;// update ball
    

    requestAnimationFrame(draw);
    }
    
    requestAnimationFrame(draw);