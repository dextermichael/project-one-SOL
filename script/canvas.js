var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');// this what we drawing on
var gravity = 1;
var friction = 0.99;

function animate(){

requestAnimationFrame(animate)
c.clearRect(0 ,0 , canvas.width, canvas.height)
}




canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Objects
 function Player(x,y,dy,radius,color){

    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
};

Object.prototype.draw = function()  {

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.Pi * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
};

Object.prototype.update = function () {
if (this.y + this.radius > canvas.height){

    this.dy = -this.dy * friction;

} else {



    this.dy += gravity;

    console.log(this.dy)
}

this.y += this.dy;
this.draw();

};


// animate()








var xPos = 0; // postion of box
var yPos = 700;// postion of box



var box = c.rect(xPos, yPos, 100, 100);

c.stroke();// draw rectangle

function move(e) {  ///



    if (e.keyCode == 39) {
        xPos += 100


    }

    if (e.keyCode == 37) {

        xPos -= 100
    }

    if (e.keyCode == 40) {

        yPos += 100


    }


    if (e.keyCode == 38) {

        yPos -= 100

        
    }







    // alert(e.keyCode);

    canvas.width = canvas.width; //loop
    c.rect(xPos, yPos, 100, 100);
    c.stroke();

}

document.onkeydown = move;





function blaster() {


    requestAnimationFrame(blaster)

    c.rect(xPos, yPos, 100, 100);

    c.stroke();
    c.clearRect(xPos, yPos, innerWidth, innerHeight);
    xPos += 3;


    canvas.width = canvas.width; //loop
    c.rect(xPos, yPos, 100, 100);
    c.stroke();
}

// blaster()
