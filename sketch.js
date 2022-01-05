var bg, sleep, brush, gym, eat, drink, bath, move;
var astronaut;

function preload(){
  bg = loadImage("Images/iss.png");
  sleep = loadImage("Images/sleep.png");
  brush = loadImage("Images/brush.png");
  gym = loadAnimation("Images/gym12.png","Images/gym11.png","Images/gym1.png","Images/gym2.png");
eat = loadAnimation("Images/eat1.png","Images/eat2.png");
drink = loadAnimation("Images/drink2.png", "Images/drink1.png");
move = loadAnimation("Images/move1.png","Images/move.png");
bath = loadAnimation("Images/bath1.png","Images/bath2.png");
}
function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

 function draw() {
   background(bg);
   textSize(20);
   fill("white");
   text("Instructions",20,35);
   textSize(15);
   text("UP ARROW = Brushing",20,55);
   text("DOWN ARROW = Gymming",20, 70);
   text("LEFT ARROW = Eating",20, 85);
   text("RIGHT ARROW = Bathing",20, 100);
   text("m KEY = Moving",20, 115 );
   var edges = createEdgeSprites();
   astronaut.bounceOff(edges);
   if (keyDown("UP_ARROW")) {
     astronaut.addAnimation("brushing", brush);
     astronaut.changeAnimation("brushing")
     astronaut.y = 350;
     astronaut.VelocityX = 0;
     astronaut.VelocityY = 0;
   }

   if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350;
    astronaut.VelocityX = 0;
    astronaut.VelocityY = 0;
   }

   if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.VelocityX = 0;
    astronaut.VelocityY = 0;
   }

   if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350;
    astronaut.VelocityX = 0;
    astronaut.VelocityY = 0;
   }

   if (keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving")
    astronaut.y = 350;
    astronaut.VelocityX = 1;
    astronaut.VelocityY = 1;
   }
     drawSprites();
 }