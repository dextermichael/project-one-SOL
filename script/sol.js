// View
var canvas = document.querySelector('#canvas');
var c = canvas.getContext("2d");
var contoller; // controller
var FPS;// loop
var radius = 30;
var friction = 0.9;
var gravity = 4.5;
var gameStart = Date.now();
var frameCount = 0;
var score = 0;
var counter = 0;
c.font = "100px Arial"

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var playerOne = {




  x: 50,
  y: 600,
  dx: 1,
  dy: 0,
  name: "Player",
  hp: 20,
  width: 50,
  height: 50,
  color: 'green',
  atkSd: 1,
  atkCounter: 0,
  gunAngle:0,
  jumping: true,
  x_velocity: 0,
  y_velocity: 0,
  
  
  
  

  pressingUp: false,
  pressingLeft: false,
  pressingRight: false,




};




document.onkeydown = function (event) {
  if (event.keyCode === 39)
    playerOne.pressingRight = true;
  else if (event.keyCode === 37)
    playerOne.pressingLeft = true;
  else if (event.keyCode === 40)
    playerOne.pressingUp = true;
  else if (event.keyCode === 38)
    playerOne.pressingDown = true;

}

document.onkeyup = function (event) {
  if (event.keyCode === 39)
    playerOne.pressingRight = false;
  else if (event.keyCode === 37)
    playerOne.pressingLeft = false;
  else if (event.keyCode === 40)
    playerOne.pressingUp = false;
  else if (event.keyCode === 38)
    playerOne.pressingDown = false;

}

movePlayer = function () {

  if (playerOne.pressingRight) {
    playerOne.x += 5;
  }
  if (playerOne.pressingLeft) {
    playerOne.x -= 5;
  }
  if (playerOne.pressingUp) {
    playerOne.y += 10;
  }
  if (playerOne.pressingDown) {
    playerOne.y -= 10;
  }

  if (playerOne.x < playerOne.width / 2)
    playerOne.x = playerOne.width / 2;
  if (playerOne.x > innerWidth - playerOne.width / 2)
    playerOne.x = innerWidth - playerOne.width / 2;
  if (playerOne.y < playerOne.height / 2)
    playerOne.y = playerOne.height / 2;
  if (playerOne.y > innerHeight - playerOne.height / 2)
    playerOne.y = innerHeight - playerOne.height / 2;




}










//enemy

var enemyList = {};
var bulletList = {};





// this is tracking the movement of the rectangles
// with the pythagoras theum

getDisBetObjects = function (entity1, entity2) {

  var vx = entity1.x - entity2.x;
  var vy = entity1.y - entity2.y;
  return Math.sqrt(vx * vx * vy * vy);
}

// dectecting when the rectangles collide
testCollisionE = function (entity1, entity2) {
  var rect1 = {
    x: entity1.x - entity1.width / 2,
    x: entity1.y - entity1.height / 2,
    width: entity1.width,
    height: entity1.height,
  }
  var rect2 = {
    x: entity2.x - entity2.width / 2,
    x: entity2.y - entity2.height / 2,
    width: entity2.width,
    height: entity2.height,
  }

  return testcollisionrectrect(rect1, rect2)

}

testcollisionrectrect = function (rect1, rect2) {

  return rect1.x <= rect2.x + rect2.width
    && rect2.x <= rect1.x + rect1.width
    && rect1.y <= rect2.y + rect2.height
    && rect2.y <= rect2.y + rect2.height;


}



// enemy object
Enemy = function (id, x, y, dx, dy, width, height) {


  var enemy = {

    x: x,
    y: y,
    dx: dx,
    dy: dy,
    name: "E",
    id: id,
    color: 'red',
    width: width,
    height: height,

  };
  enemyList[id] = enemy;
}

randomEnemies = function () {
  var x = innerWidth;
  var y = Math.floor(Math.random() * 100);
  var height = 10 + Math.floor(Math.random() * 30);
  var width = 10 + Math.floor(Math.random() * 30);
  var id = Math.random();
  var dx = -5
  var dy = -5 + Math.floor(Math.random() * 5);
  Enemy(id, x, y, dy, dx, width, height);

}

Bullet = function (id, x, y, dx, dy, width, height) {


  var aaa = {

    x: x,
    y: y,
    dx: dx,
    dy: dy,
    name: "E",
    id: id,
    color: 'black',
    width: width,
    height: height,
    timer: 0

  };
  bulletList[id] = aaa;
}

randomBullet = function () {

  var x = playerOne.x;
  var y = playerOne.y;
  var height = 10;
  var width = 10;
  var id = Math.random();

  
  var dx = 5
  var dy = 0
  Bullet(id, x, y, dx, dy, width, height);
}



document.onclick = function (mouse) {
  if (playerOne.atkCounter > 25) {
    randomBullet();
    playerOne.atkCounter = 0;
  }
}



// updateBlock
updateBlock = function (block) {
  updatePosition(block);
  drawObject(block);
}


//update position
updatePosition = function (block) {
  block.x += block.dx;
  block.y += block.dy;

  if (block.x < 0 || block.x > innerWidth) {

    block.dx = -block.dx;
  }

  if (block.y < 0 || block.y > innerHeight) {

    block.dy = -block.dy;
  }

}


//    drawObject = function (block)
// {
//   c.fillText(block.name ,block.x, block.y);

//   }

drawObject = function (block) {
  c.save();
  c.fillStyle = block.color;
  c.fillRect(block.x - block.width / 2, block.y - block.height / 2, block.width, block.height)
  c.restore();
}








// Animation

FPS = function () {

    //refresh frame
  c.clearRect(0, 0, innerWidth, innerHeight)
  requestAnimationFrame(FPS)

  //  player.update()
  frameCount++;
  score++;

  if (frameCount % 100 === 0)
    randomEnemies();

  playerOne.atkCounter += playerOne.atkSd;



   for (var key in bulletList) {
    updateBlock(bulletList[key])

    var remove = false;

    bulletList[key].timer++;
    if (bulletList[key].timer > 75) {
      remove = true;
    }



    for (var key2 in enemyList) {
      var isColl = testcollisionrectrect(bulletList[key], enemyList[key2]);
      if (isColl) {
        remove = true;
        delete enemyList[key2];
        break;
      }
    }

    if (remove) {
      delete bulletList[key];
    }

  }



  for (var key in enemyList) {
    updateBlock(enemyList[key])

    var isColl = testcollisionrectrect(playerOne, enemyList[key]); //HP
    if (isColl) {
      playerOne.hp = playerOne.hp - 1;
    }
  }
  if (playerOne.hp <= 0) {
    playerOne.hp = 10
    startNewGame()
  }


  // player movement gravity and friction
  movePlayer();
  if (movePlayer.pressingUp && playerOne.jumping == false) {
    playerOne.y_velocity -= 20;
      playerOne.jumping = true;
    }
    if (movePlayer.pressingLeft) {
  
      playerOne.y_velocity -= 0.5;
    }
  
    if (movePlayer.pressingRight) {
  
      playerOne.x_velocity += 0.5;
    }
    playerOne.y += gravity;// Gravity
    playerOne.x += playerOne.x_velocity;
    playerOne.y += playerOne.y_velocity;
    playerOne.x_velocity *= 0.9;
    playerOne.y_velocity *= 0.9;


  drawObject(playerOne);


 
  document.querySelector('.hp').innerHTML = "HP" + playerOne.hp
  document.querySelector('.score').innerHTML = "Score:" + score
  // c.fillText(, 200, 30);


}
startNewGame = function () { /// restart function
  playerOne.hp = 10
  gameStart = Date.now()
  framecount = 0;
  enemyList = {};
  bulletList = {};
  
  randomEnemies();
  


}





startNewGame()






FPS();





















