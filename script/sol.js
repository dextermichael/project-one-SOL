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
var frameCount = 0;
var score = 0;
var counter = 0; 

  



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
  color:'green',
  atkSd:1,
  atkCounter:0,
  pressingDown:false,
  pressingUp:false,
  pressingLeft:false,
  pressingRight:false,

};

document.onkeydown = function(event){
event.keyCode 
alert(event.keyCode);


}



//enemy

var enemyList = {};
var bulletList = {};
var upgradeList = {}




// this is tracking the movement of the rectangles
// with the pythagoras theum

getDisBetObjects = function (entity1,entity2){

  var vx = entity1.x - entity2.x;
  var vy = entity1.y -entity2.y;
  return Math.sqrt(vx*vx*vy*vy);
}

// dectecting when the rectangles collide
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



// enemy object
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

randomEnemies = function(){
  var x = Math.floor(Math.random()*innerWidth);
  var y = Math.floor(Math.random()*innerHeight);
  var height = 10 + Math.floor(Math.random()*30);
  var width = 10 + Math.floor(Math.random()*30);
  var id = Math.random();
  var dx = 5 + Math.floor(Math.random()*5);
  var dy = 5 + Math.floor(Math.random()*5);
  Enemy(id,x,y,dy,dx,width,height);
  
}




Bullet = function (id,x,y,dx,dy,width,height) {


  var aaa = {
  
    x:x,
    y: y,
    dx: dx,
    dy:dy,
    name:"E",
    id:id,
    color:'black',
    width:width,
    height:height,
    timer:0
  
    };
  bulletList[id] = aaa;
  }

randomBullet = function(){

	var x = playerOne.x;
	var y = playerOne.y;
	var height = 10;
	var width = 10;
	var id = Math.random();
	
	var angle = Math.random()*360;
	var dx= Math.cos(angle/180*Math.PI)*5;
	var dy = Math.sin(angle/180*Math.PI)*5;
	Bullet(id,x,y,dx,dy,width,height);
}













document.onmousemove = function(mouse) {

  var mouseX = mouse.clientX;
  var mouseY = mouse.clientY;

  if(mouseX < playerOne.width/2)
		mouseX = playerOne.width/2;
	if(mouseX > innerWidth-playerOne.width/2)
		mouseX = innerWidth - playerOne.width/2;
	if(mouseY < playerOne.height/2)
		mouseY = playerOne.height/2;
	if(mouseY > innerHeight - playerOne.height/2)
		mouseY = innerHeight- playerOne.height/2; 



  playerOne.x = mouseX;
  playerOne.y = mouseY;
}

document.onclick = function(mouse){
  if(playerOne.atkCounter > 25){
    randomBullet();
    playerOne.atkCounter = 0;
  }
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
frameCount++;
score++;

if(frameCount % 100 === 0)
randomEnemies();

playerOne.atkCounter += playerOne.atkSd;
 
  
 

for( var key in bulletList){
  updateBlock(bulletList[key])

var remove = false;

    bulletList[key].timer++;
    if(bulletList[key].timer > 75){
      remove = true;
}
  


  for(var key2 in enemyList) {
  var isColl = testcollisionrectrect(bulletList[key],enemyList[key2]);
  if(isColl){
    remove = true;
    delete enemyList [key2];
    break;
  }
}

if(remove){
  delete bulletList[key];
}
 
}



  for( var key in enemyList){
    updateBlock(enemyList[key])

var isColl = testcollisionrectrect(playerOne,enemyList[key]);
  if(isColl){
    playerOne.hp = playerOne.hp - 1;
     }
    }
  if(playerOne.hp <= 0){
    playerOne.hp = 10
    startNewGame()
  }
  drawObject(playerOne);
  c.fillText(playerOne.hp +"Hp", 0, 40);
  c.fillText("Score:" +score, 200, 30);
  
  
}
startNewGame = function(){ /// restart function
playerOne.hp = 10
gameStart = Date.now()
framecount = 0;
enemyList = {};
bulletList = {};
randomEnemies();
randomEnemies();
randomEnemies();


}












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

 
