// View
var canvas = document.querySelector('#canvas');
var c = canvas.getContext("2d");
var contoller; // controller
var FPS;// loop

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


 

 
// c.fillRect(100, 100, 100, 100);


//contoller
// controller = {
  
//     left:false,
//     right:false,
//     up:false,
//     keyListener:function(event) {
  
//       var key_state = (event.type == "keydown")?true:false;
  
//       switch(event.keyCode) {
  
//         case 37:// left key
//           controller.left = key_state;
//         break;
//         case 38:// up key
//           controller.up = key_state;
//         break;
//         case 39:// right key
//           controller.right = key_state;
//         break;
  
//       }
  
//     }
  
//   };

var circlex = 200;  
var circley = 00;
var velocityx = 0;
var velocityy = 2;
var radius = 30;
var friction = .9;
 var gravity = 1;

  


  

//    Objects in the game


function Shape(circlex, circley, velocityx, velocityy){

this.circlex = circlex;
this.circley = circley;
this.velocityx = velocityx
this.velocityy = velocityy
this.radius = radius
this.draw = function(){

  

  c.beginPath()
  c.arc(this.circlex,this.circley, this.radius, 30,0,Math.PI * 2, false);
  c.strokeStyle = 'gold';
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

 var circle = new Shape(300,200, 0, 0, 0);
 




// function drawCircle() {
//   c.beginPath()
//   c.arc(circlex,circley, radius, 30,0,Math.PI * 2, false);
//   c.strokeStyle = 'red';
//   c.fillStyle = 'red';
//   c.fill();
//   c.stroke();

  
//  }









FPS = function() {


c.clearRect(0, 0, innerWidth,innerHeight)
 requestAnimationFrame(FPS)
 

 circle.update()
//  drawCircle();
  // creating collison
//  if ( circlex + radius > innerWidth || circlex - radius < 0 )  {
//     velocityx = -velocityx
// }
 
// if  ( circley + radius > innerHeight)
// {
//   velocityy = -velocityy * friction;
// } 
// else {
//   velocityy += gravity;
// }



//   circlex += velocityx;
//   circley += velocityy;
 
 
 

}

FPS();










  // window.addEventListener("keydown", controller.keyListener)
  // window.addEventListener("keyup", controller.keyListener);
  // window.requestAnimationFrame(FPS);