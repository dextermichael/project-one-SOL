var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');// this what we drawing on
var bullet;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var xPos = 0; // postion of box
var yPos = 0;// postion of box



var box = context.rect(xPos, yPos, 100, 100);
var bullet = context.rect(xPos, yPos, 100, 100);
context.stroke();// draw rectangle

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
    context.rect(xPos, yPos, 100, 100);
    context.stroke();

}

document.onkeydown = move;





function blaster() {


    requestAnimationFrame(blaster)

    context.rect(xPos, yPos, 100, 100);

    context.stroke();
    context.clearRect(xPos, yPos, innerWidth, innerHeight);
    xPos += 3;


    canvas.width = canvas.width; //loop
    context.rect(xPos, yPos, 100, 100);
    context.stroke();
}

// blaster()
