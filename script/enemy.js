var ctx = document.getElementById("ctx").getContext("2d"); 
ctx.font = '30px Arial';

var HEIGHT = 500;
var WIDTH = 500;
var message = 'Bouncing';

var player = {
	x:50,
	spdX:30,
	y:40,
	spdY:5,
	name:'P',	
};

var enemyList = {};

var enemy = {
	x:150,
	spdX:10,
	y:350,
	spdY:15,
	name:'E',
	id:'E1',
};
enemyList['E1'] = enemy;

var enemy2 = {
	x:250,
	spdX:10,
	y:350,
	spdY:-15,
	name:'E',
	id:'E2',
};
enemyList['E2'] = enemy2;

var enemy3 = {
	x:250,
	spdX:10,
	y:150,
	spdY:-8,
	name:'E',
	id:'E3',
};
enemyList['E3'] = enemy3;


setInterval(update,40);

function updateEntity(something){
	something.x += something.spdX;
	something.y += something.spdY;
	ctx.fillText(something.name,something.x,something.y);
		
		
	if(something.x < 0 || something.x > WIDTH){
		console.log(message);
		something.spdX = -something.spdX;
	}
	if(something.y < 0 || something.y > HEIGHT){
		console.log(message);
		something.spdY = -something.spdY;
	}
}


function update(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	
	for(var key in enemyList){
		updateEntity(enemyList[key]);
	}
	
	
	updateEntity(player);
	
}
