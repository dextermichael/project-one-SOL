var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');// this what we drawing on
var gravity = -1;
var friction = 0.99;

//Create canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// animate()


var xPos = 300; // postion of box
var yPos = 300;// postion of box



c.rect(xPos, yPos, 100, 100);

c.stroke();// draw rectangle

function move(e) {  



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
