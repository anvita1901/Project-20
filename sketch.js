var bullet, wall, thicknes;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet = createSprite(50,200,100,20);
  bullet.shapeColor = "blue";
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hasCollided(bullet, wall)){
     bullet.velocityX=0;
     damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  }

  if(damage>10){
    wall.shapeColor=color(255, 0, 0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }



   }

function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
