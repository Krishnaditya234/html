
var player;
var target;
var edges;
var wormGroup;

function preload(){
  BUNNY=loadImage("img/bunny.png");
  CARROT=loadImage("img/carrot.png");
  SNAKE=loadImage("img/snake.png");
  BG=loadImage("img/bg.png");
}
function setup() {
createCanvas(800,600);
wormGroup= new Group();
background("black");  

swamp = createSprite(300,300)
swamp.scale=4.5;
swamp.addImage(BG);

edges=createEdgeSprites();

player = createSprite(50,550,20,20); 
player.addImage(BUNNY);
player.scale=0.2;

target = createSprite(700,50,30,30);
target.addImage(CARROT);
target.scale=0.2;

obs1 = createSprite(100,150,100,20);
obs1.velocityX = -10;
obs2 = createSprite(300,150,100,20);
obs2.velocityX = -10;
obs3 = createSprite(500,150,100,20);
obs3.velocityX = -10;
obs4 = createSprite(700,150,100,20);
obs4.velocityX = +10;
obs5 = createSprite(100,300,100,20);
obs5.velocityX = +10;
obs6 = createSprite(300,300,100,20);
obs6.velocityX = +10;
obs7 = createSprite(500,300,100,20);
obs7.velocityX = +10;
obs8 = createSprite(700,300,100,20);
obs8.velocityX = -10;
obs9 = createSprite(100,450,100,20);
obs9.velocityX = -10;
obs10 = createSprite(300,450,100,20);
obs10.velocityX = -10;
obs11 = createSprite(500,450,100,20);
obs11.velocityX = -10;
obs12 = createSprite(700,450,100,20);
obs12.velocityX = +10;
target.shapeColor = "pink"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red"
obs5.shapeColor = "red"
obs6.shapeColor = "red"
obs7.shapeColor = "red"
obs8.shapeColor = "red"
obs9.shapeColor = "red"
obs10.shapeColor = "red"
obs11.shapeColor = "red"
obs12.shapeColor = "red"
player.shapeColor = "white"
wormGroup= new Group();
}


function draw() {
player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);
obs6.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);
obs7.bounceOff(edges[1]);
obs7.bounceOff(edges[0]);
obs8.bounceOff(edges[1]);
obs8.bounceOff(edges[0]);
obs9.bounceOff(edges[1]);
obs9.bounceOff(edges[0]);
obs10.bounceOff(edges[1]);
obs10.bounceOff(edges[0]);
obs11.bounceOff(edges[1]);
obs11.bounceOff(edges[0]);
obs12.bounceOff(edges[1]);
obs12.bounceOff(edges[0]);
wormGroup.bounceOff(edges[3]);
wormGroup.bounceOff(edges[0]);
wormGroup.bounceOff(edges[1]);
wormGroup.bounceOff(edges[0]);


if(keyDown("up")){
  player.y=player.y-20;
}
if(keyDown("down")){
  player.y=player.y+20;
}
if(keyDown("left")){
  player.x=player.x-20;
}
if(keyDown("right")){
  player.x=player.x+20;
}


if(keyDown("enter")){
  obs1.velocityX=-10;
  obs2.velocityX=-10;
  obs3.velocityX=-10;
  obs4.velocityX=+10;
  obs5.velocityX=+10;
  obs6.velocityX=+10;
  obs7.velocityX=+10;
  obs8.velocityX=-10;
  obs9.velocityX=-10;
  obs10.velocityX=-10;
  obs11.velocityX=-10;
  obs12.velocityX=+10;
  player.x=30;
  player.y=550;
  obs1.x=50;
  obs2.x=275;
  obs3.x=500;
  obs4.x=750;
  obs5.x=50;
  obs6.x=275;
  obs7.x=500;
  obs8.x=750;
  obs9.x=50;
  obs10.x=275;
  obs11.x=500;
  obs12.x=750;
  obs1.y=150;
  obs2.y=150;
  obs3.y=150;
  obs4.y=150;
  obs5.y=300;
  obs6.y=300;
  obs7.y=300;
  obs8.y=300;
  obs9.y=450;
  obs10.y=450;
  obs11.y=450;
  obs12.y=450;
  
}

if(keyDown("shift")){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  obs1.x=50;
  obs2.x=275;
  obs3.x=500;
  obs4.x=750;
  obs5.x=50;
  obs6.x=275;
  obs7.x=500;
  obs8.x=750;
  obs9.x=50;
  obs10.x=275;
  obs11.x=500;
  obs12.x=750;
  obs1.y=150;
  obs2.y=150;
  obs3.y=150;
  obs4.y=150;
  obs5.y=300;
  obs6.y=300;
  obs7.y=300;
  obs8.y=300;
  obs9.y=450;
  obs10.y=450;
  obs11.y=450;
  obs12.y=450;
}

if(player.isTouching(obs1)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs2)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs3)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs4)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs5)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs6)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs7)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs8)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs9)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs10)){
obs1.velocityX=0;
obs2.velocityX=0;
obs3.velocityX=0;
obs4.velocityX=0;
obs5.velocityX=0;
obs6.velocityX=0;
obs7.velocityX=0;
obs8.velocityX=0;
obs9.velocityX=0;
obs10.velocityX=0;
obs11.velocityX=0;
obs12.velocityX=0;
player.x=30;
player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs11)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(obs12)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  text("YOU LOSE",430,20);
}
if(player.isTouching(target)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  obs7.velocityX=0;
  obs8.velocityX=0;
  obs9.velocityX=0;
  obs10.velocityX=0;
  obs11.velocityX=0;
  obs12.velocityX=0;
  player.x=30;
  player.y=550;
  obs1.x=50;
  obs2.x=275;
  obs3.x=500;
  obs4.x=750;
  obs5.x=50;
  obs6.x=275;
  obs7.x=500;
  obs8.x=750;
  obs9.x=50;
  obs10.x=275;
  obs11.x=500;
  obs12.x=750;
  obs1.y=150;
  obs2.y=150;
  obs3.y=150;
  obs4.y=150;
  obs5.y=300;
  obs6.y=300;
  obs7.y=300;
  obs8.y=300;
  obs9.y=450;
  obs10.y=450;
  obs11.y=450;
  obs12.y=450;
  text("YOU WON",430,20);
  drawSprites();

}

  
  
  
  generateWorms();
  
  for(var i = 0 ; i< (wormGroup).length ;i++){
    var temp = (wormGroup).get(i) ;
    if (player.isTouching(temp)) {
  player.x=30;
  player.y=550;
      }   
    }
  
    drawSprites();

  }


function generateWorms(){
  if(frameCount % 20===0){
    console.log(frameCount);
  
      var worm = createSprite(random(10,700),random(10,550),10,5);
      worm.addImage(SNAKE);
      worm.scale =random(0.3,0.5);
      worm.shapeColor="white"
      worm.velocityX=random(5,10);
      worm.velocityY=random(5,10);
      wormGroup.add(worm);
    }
  }