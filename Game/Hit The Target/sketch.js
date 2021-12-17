
var player;
var target;
var edges;

function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
player = createSprite(50,550,30,30); 
target = createSprite(550,50,30,30);
obs1 = createSprite(100,150,100,20);
obs1.velocityX = 10;
obs2 = createSprite(500,150,100,20);
obs2.velocityX = -10;
obs3 = createSprite(100,300,100,20);
obs3.velocityX = 10;
obs4 = createSprite(500,300,100,20);
obs4.velocityX = -10;
obs5 = createSprite(100,450,100,20);
obs5.velocityX = 10;
obs6 = createSprite(500,450,100,20);
obs6.velocityX = -10;
target.shapeColor = "blue"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red"
obs5.shapeColor = "red"
obs6.shapeColor = "red"
player.shapeColor = "yellow"
}

function draw() {
background("black");  

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
if(keyDown("w")){
  player.y=player.y-10;
}
if(keyDown("s")){
  player.y=player.y+10;
}
if(keyDown("a")){
  player.x=player.x-10;
}
if(keyDown("d")){
  player.x=player.x+10;
}
if(keyDown("space")){
  obs1.velocityX=10;
  obs2.velocityX=-10;
  obs3.velocityX=10;
  obs4.velocityX=-10;
  obs5.velocityX=10;
  obs6.velocityX=-10;
  player.x=30;
  player.y=550;
}

if(player.isTouching(obs1)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU LOSE",300,300);
}
if(player.isTouching(obs2)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU LOSE",300,300);
}
if(player.isTouching(obs3)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU LOSE",300,300);
}
if(player.isTouching(obs4)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU LOSE",300,300);
}
if(player.isTouching(obs5)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU LOSE",300,300);
}
if(player.isTouching(obs6)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU LOSE",300,300);
}

if(player.isTouching(target)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  obs3.velocityX=0;
  obs4.velocityX=0;
  obs5.velocityX=0;
  obs6.velocityX=0;
  player.x=30;
  player.y=550;
  obs1.x=100;
  obs2.x=500;
  obs3.x=100;
  obs4.x=500;
  obs5.x=100;
  obs6.x=500;
  obs1.y=150;
  obs2.y=150;
  obs3.y=300;
  obs4.y=300;
  obs5.y=450;
  obs6.y=450;
  if(keyDown("w")){
    player.y=player.y-0;
  }
  if(keyDown("s")){
    player.y=player.y+0;
  }
  if(keyDown("a")){
    player.x=player.x-0;
  }
  if(keyDown("d")){
    player.x=player.x+0;
  }
  text("YOU WON",300,300);
}
  drawSprites();
}

