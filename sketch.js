var boat ,boat_sailing, ocean, ocean_image;
function preload(){
  boat_sailing = loadAnimation("boat1.png","boat2.png", "boat3.png");
  ocean_image = loadImage("ocean_background.jpeg");

}

function setup(){
  
  createCanvas(600,600);
  ocean = createSprite(50,183,600,10);
  ocean.addImage(ocean_image);
  ocean.velocityX = -6;
  ocean.scale = 1.2;
  boat = createSprite(150,220,10,30);
  boat.addAnimation("sailing", boat_sailing);
  boat.scale = 0.2;
 
}

function draw() {
  background("white");
  if(ocean.x <160){
    ocean.x = ocean.width/2;
  } 
  console.log(ocean.x);
  drawSprites();
}