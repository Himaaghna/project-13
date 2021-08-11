var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple1,apple2,appleImg;
var leaf,leafImg;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  var select_sprites=Math.round(random(1,2));
  console.log(random); 

  if (frameCount% 80 == 0) 
   if(select_sprites==1) {
     
      apple=createSprite(200,50,40,10);
      apple1=createSprite(350,50,40,10);
      apple2=createSprite(50,350,40,10);

      apple.velocityY=4;
      apple1.velocityY=4;
      apple2.velocityY=4;

      apple.addImage("image",appleImg);
      apple1.addImage("image",appleImg);
      apple2.addImage("image",appleImg);

      apple.scale=0.1;
      apple1.scale=0.1;
      apple2.scale=0.1;

      apple.y=Math.round(random(50,350));
      apple1.y=Math.round(random(50,350));
      apple2.y=Math.round(random(50,350));

      apple.lifetime=400;
      apple1.lifetime=400;
      apple2.lifetime=400;
    }
  
  
   
  
  drawSprites();
}


