var car, wall;
var speed, weight;

function setup() {
  createCanvas(1366,400);
  car = createSprite(75, 200, 100, 50);
  wall = createSprite(1266,200,60,height/2);

  speed = random(55,90);
  weight = random(400,1500);

  wall.shapeColor = rgb(160,82,45);
}

function draw() {
  background("black");
  
  if(keyDown("space"))
  {
    car.velocityX = speed;
  }

  if(wall.x-car.x <car.width/2+car.width/2)
{
  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation > 100){
    car.shapeColor = color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
}
  drawSprites();
}