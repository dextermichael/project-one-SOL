// View
var canvas = document.querySelector('#canvas');
var c = canvas.getContext("2d");
var contoller; // controller
var FPS;// loop
var circlex = 200;  
var circley = 00;
var velocityx = 0;
var velocityy = 2;
var radius = 30;
var friction = .9;
var gravity = 1;



c.font = '30px Arial';



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;













//    Objects in the game


//player

var playerOne = {

  x: 150,
  y: 140,
  dx: 1,
  dy:1,
  name:"Player"
}



function updatePlayer()
{

  playerOne.x += playerOne.dx;
  playerOne.y += playerOne.dy;
c.fillText(playerOne.name ,playerOne.x, playerOne.y);

if(playerOne.x < 0 || playerOne.x > innerWidth){

  playerOne.dx = -playerOne.dx;
}

if(playerOne.y < 0 || playerOne.y > innerHeight){

  playerOne.dy = -playerOne.dy;
  }



}


//enemy
var enemy = {

  x: 350,
  y: 440,
  dx: 1,
  dy:1,
  name:"enemy"

}




function updateEnemy()
{

  enemy.x += enemy.dx;
  enemy.y += enemy.dy;
c.fillText(enemy.name ,enemy.x, enemy.y);

if(enemy.x < 0 || enemy.x > innerWidth){

  enemy.dx = -enemy.dx;
}

if(enemy.y < 0 || enemy.y > innerHeight){

  enemy.dy = -enemy.dy;
}



}











function User(circlex, circley, velocityx, velocityy)

{


  



this.circlex = circlex;
this.circley = circley;
this.velocityx = velocityx
this.velocityy = velocityy
this.radius = radius
this.draw = function(){

  

  c.beginPath()
  c.arc(this.circlex,this.circley, this.radius, 30,0,Math.PI * 2, false);
  c.strokeStyle = 'black';
  c.fillStyle = 'blue';
  c.fill();
  c.stroke();
  }

this.update = function(){

  if  ( this.circley + this.radius > innerHeight)
{
  this.velocityy = -this.velocityy * friction;
} 
else {
  this.velocityy += gravity;


}
   this.circlex += this.velocityx;
  this.circley += this.velocityy;
  this.draw()

     }



     

     
}

 var player = new User(700,100, 0, 1,);

 



// Animation

FPS = function() {


c.clearRect(0, 0, innerWidth,innerHeight)
 requestAnimationFrame(FPS)
 updateEnemy()
 updatePlayer()
 player.update()
 

}

//  if (controller.up && )















 
 



FPS();










  // window.addEventListener("keydown", controller.keyListener)
  // window.addEventListener("keyup", controller.keyListener);
  // window.requestAnimationFrame(FPS);







 