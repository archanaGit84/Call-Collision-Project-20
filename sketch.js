var car, wall, speed,weight;
function setup() {
  createCanvas(windowWidth,400);
  //createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(100,100,20,20);
  wall = createSprite(1200,100,20, height/2);
  wall.shapeColor = color(80,80,80);
  car.velocityX = speed; 
}

function draw() {
  background(255);  
  var deformation;
  //car.collide(wall);
  if(wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0;
    car.x = wall.x - wall.width/2 - car.width/2;
    
    deformation = 0.5* weight * speed * speed /22500;
    if (deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    else if(deformation >= 100 && deformation <= 180){
      car.shapeColor = color(230,230,0);
    }   
    else if(deformation < 180){
      car.shapeColor = color(255,0,0);
    } 
  }
  drawSprites();
}