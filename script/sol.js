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


  


  

//    Objects in the game

var circlex = 200   
var velocityx = 10;
var radius = 30;

function drawcircle() {
  c.beginPath()
  c.arc(circlex,200, radius, 30,0,Math.PI * 2, false);
  c.strokeStyle = 'red';
  
  c.stroke();

  
 }





  


FPS = function() {


c.clearRect(0, 0, innerWidth,innerHeight)
 requestAnimationFrame(FPS)

 drawcircle()
  // creating collison
 if ( circlex + radius > innerWidth || circlex - radius < 0 )  {
    velocityx = -velocityx
}
 
 
  circlex += velocityx;
 
 
 

}

FPS();










  // window.addEventListener("keydown", controller.keyListener)
  // window.addEventListener("keyup", controller.keyListener);
  // window.requestAnimationFrame(FPS);