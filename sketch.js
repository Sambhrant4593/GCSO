// declaring the variables
var wall, car;
var speed, weight;

function setup() {
//creating canvas
createCanvas(800,400);

//creating the car 
car =  createSprite(50, 200, 50, 50);
//creating the wall
wall = createSprite(700,200,60,200);


  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {

  car.velocityX=speed;

  background("orange");  
  drawSprites();
}