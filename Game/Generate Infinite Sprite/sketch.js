
var player;
var score=0;
var wormGroup;

function setup() {
createCanvas(600,600);
player = createSprite(40,550,30,30); 
wormGroup= new Group();
}

function draw() {
background("black");  
stroke("red")
noFill();
ellipse(100,350,30,30);
player.x= mouseX;
player.y= mouseY;

{

text("        "+mouseX+","+mouseY,mouseX,mouseY);}
generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
player.x=30;
player.y=550;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){
if(frameCount % 20===0){
  console.log(frameCount);

    var worm = createSprite(600,random(70,520),random(30,120),5);
    wormGroup.add(worm);
    worm.shapeColor="white"
    worm.velocityX=random(-4,2);
    worm.velocityY=random(-4,2);
      }
}

