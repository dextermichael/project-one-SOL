// View
var canvas = document.querySelector('#canvas');
var c = canvas.getContext("2d");
c.font = '400px Arial';
var contoller; // controller
var FPS;// loop
var circlex = 200;  
var circley = 00;
var velocityx = 0;
var velocityy = 2;
var radius = 30;
var friction = .9;
var gravity = 1;







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



//enemy

var enemyList = {};


Enemy('E1',250,440,1,1);
Enemy('E2',350,440,1,1);
Enemy('E3',550,240,1,1);




function Enemy(id,x,y,dx,dy,) {


var enemy = {

  x:x,
  y: y,
  dx: dx,
  dy:dy,
  name:"E",
  id:id
  }
enemyList[id] = enemy;
}






function updateBlock(block)
{

  block.x += block.dx;
  block.y += block.dy;
c.fillText(block.name ,block.x, block.y);

if(block.x < 0 || block.x > innerWidth){

  block.dx = -block.dx;
}

if(block.y < 0 || block.y > innerHeight){

  block.dy = -block.dy;
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
 
//  player.update()
 
 updateBlock(playerOne)
 
for( var key in enemyList){
  updateBlock(enemyList[key])
}

}

//  if (controller.up && )

FPS();










  // window.addEventListener("keydown", controller.keyListener)
  // window.addEventListener("keyup", controller.keyListener);
  // window.requestAnimationFrame(FPS);







 