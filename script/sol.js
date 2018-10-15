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
var gameStart = Date.now();

  



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//    Objects in the game


//player

var playerOne = {

  
  x: 150,
  y: 140,
  dx: 1,
  dy:1,
  name:"Player",
  hp:20,
  width:20,
  height:20,
  color:'green'
}



//enemy

var enemyList = {};






getDisBetObjects = function (entity1,entity2){

  var vx = entity1.x - entity2.x;
  var vy = entity1.y -entity2.y;
  return Math.sqrt(vx*vx*vy*vy);
}

testCollisionE = function  (entity1,entity2){
var rect1 = {
x:entity1.x-entity1.width/2,
x:entity1.y-entity1.height/2,
width:entity1.width,
height:entity1.height,
 }
 var rect2 = {
  x:entity2.x-entity2.width/2,
  x:entity2.y-entity2.height/2,
  width:entity2.width,
  height:entity2.height,
   }

   return testcollisionrectrect(rect1,rect2)
  
}

testcollisionrectrect = function(rect1,rect2){

return rect1.x <= rect2.x+rect2.width
   &&  rect2.x <= rect1.x+rect1.width  
   &&  rect1.y <= rect2.y+rect2.height
   &&  rect2.y <= rect2.y+rect2.height;


}




Enemy = function (id,x,y,dx,dy,width,height) {


var enemy = {

  x:x,
  y: y,
  dx: dx,
  dy:dy,
  name:"E",
  id:id,
  color:'red',
  width:width,
  height:height,

  };
enemyList[id] = enemy;
}

document.onmousemove = function(mouse) {

  var mouseX = mouse.clientX;
  var mouseY = mouse.clientY;

  playerOne.x = mouseX;
  playerOne.y = mouseY;
}




// updateBlock
updateBlock = function (block)
{
  updatePosition(block);
  drawObject(block);
}


//update position
updatePosition = function(block)
  {
    block.x += block.dx;
    block.y += block.dy;

    if(block.x < 0 || block.x > innerWidth){

      block.dx = -block.dx;
      }
    
    if(block.y < 0 || block.y > innerHeight){
    
      block.dy = -block.dy;
      }

    }


//    drawObject = function (block)
// {
//   c.fillText(block.name ,block.x, block.y);

//   }

 drawObject = function(block){
    c.save();
    c.fillStyle = block.color;
    c.fillRect(block.x-block.width/2,block.y-block.height/2,block.width,block.height)
    c.restore();
 }
 
 


// Animation

FPS = function() {


 c.clearRect(0, 0, innerWidth,innerHeight)
 requestAnimationFrame(FPS)
 
//  player.update()
 


 
 
for( var key in enemyList){
  updateBlock(enemyList[key])
  
  var isColl = testcollisionrectrect(playerOne,enemyList[key]);
  if(isColl){
    playerOne.hp = playerOne.hp - 1;
    if(playerOne.hp <= 0){
    playerOne.hp = 10
  }
    
  }
  drawObject(playerOne);
  c.fillText(playerOne.hp +"Hp", 0, 40);
  
}




}

Enemy('E1',150,140,1,1,30,30);
Enemy('E2',350,440,1,1,40,50);
Enemy('E3',550,240,1,1,30,55);




FPS();










  // window.addEventListener("keydown", controller.keyListener)
  // window.addEventListener("keyup", controller.keyListener);
  // window.requestAnimationFrame(FPS);







 
  // function User(circlex, circley, velocityx, velocityy)

// {


  



// this.circlex = circlex;
// this.circley = circley;
// this.velocityx = velocityx
// this.velocityy = velocityy
// this.radius = radius
// this.draw = function(){

  

//   c.beginPath()
//   c.arc(this.circlex,this.circley, this.radius, 30,0,Math.PI * 2, false);
//   c.strokeStyle = 'black';
//   c.fillStyle = 'blue';
//   c.fill();
//   c.stroke();
//   }

// this.update = function(){

//   if  ( this.circley + this.radius > innerHeight)
// {
//   this.velocityy = -this.velocityy * friction;
// } 
// else {
//   this.velocityy += gravity;


// }
//   this.circlex += this.velocityx;
//   this.circley += this.velocityy;
//   this.draw()

//      }



     

     
// }

//  var player = new User(700,100, 0, 1,);

 
