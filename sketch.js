var ground,ground_img,bat,batman,bat_running,canvas,power_img,power,bat_jump,bg,back,star_img,star,coin_img,coin;
var car_img, batarang_img, Obstacle;
var starGroup,coinGroup1,coinGroup2,coinGroup3,coinGroup4,coinGroup5,batarangGroup,ObstaclesGroup,carsGroup,powersGroup
var score=0;
var lives=5;

var READY=0;
var PLAY=1;
var END=2;
var gameState=READY;
var reset,reset_img
var play,play_img;
var gameOver,game_img;
var coiny;

//SOUNDS
var coinSound;
var overSound;
var ouchSound;
var clickSound;
var runSound;


function preload(){
 bg = loadImage("images/N back.jpeg");
 
 bat_running = loadAnimation("images/b1.png","images/b2.png","images/b3.png","images/b4.png","images/b5.png","images/b6.png","images/b7.png","images/b8.png");
 
 power_img=loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png","images/p5.png","images/p6.png","images/p7.png","images/p8.png","images/p9.png","images/p10.png","images/p11.png","images/p12.png","images/p13.png","images/p14.png","images/p15.png","images/p16.png","images/p17.png","images/p18.png","images/p19.png","images/p20.png","images/p21.png","images/p22.png","images/p23.png","images/p24.png","images/p25.png","images/p26.png","images/p27.png","images/p28.png","images/p29.png","images/p30.png","images/p31.png","images/p32.png","images/p33.png","images/p34.png","images/p35.png","images/p36.png","images/p37.png","images/p38.png","images/p39.png","images/p40.png","images/p41.png","images/p42.png","images/p43.png","images/p44.png","images/p45.png","images/p46.png","images/p47.png","images/p48.png","images/p49.png","images/p50.png","images/p51.png","images/p52.png","images/p53.png","images/p54.png","images/p55.png","images/p56.png","images/p57.png","images/p58.png","images/p59.png","images/p60.png","images/p61.png","images/p62.png","images/p63.png");
 
 bat_jump=loadImage("images/b4.png");
 //Standing Batman
 bat= loadImage("images/Batman.png");

  star_img= loadAnimation("images/f1.png","images/f2.png","images/f3.png","images/f4.png","images/f5.png","images/f6.png","images/f7.png","images/f8.png","images/f9.png");

  coin_img=loadAnimation("images/cc1.png","images/cc2.png","images/cc3.png","images/cc4.png","images/cc5.png","images/cc6.png","images/cc7.png","images/cc8.png","images/cc9.png","images/cc10.png","images/cc11.png","images/cc12.png","images/cc13.png","images/cc14.png","images/cc15.png","images/cc16.png","images/cc17.png","images/cc18.png","images/cc19.png","images/cc20.png","images/cc21.png","images/cc22.png","images/cc23.png","images/cc24.png","images/cc25.png","images/cc26.png","images/cc27.png","images/cc28.png","images/cc29.png","images/cc30.png",)

  car_img=loadImage("images/car2.png")

  batarang_img = loadImage("images/batarang1.png");

  Obstacle = loadImage("images/ob1.png");

  ground_img=loadImage("images/ground1.png");
  

  reset_img=loadImage("images/restart2.png");

  //ground_img=loadImage("images/ground2.png");

  game_img=loadImage("images/game_over.png")

  play_img=loadImage("images/play.png")

  //SOUNDS
  coinSound = loadSound("sounds/coin2.mp3");
  overSound = loadSound("sounds/gameover1.mp3");
  //ouchSound = loadSound("sounds/ouch1.mp3")
  clickSound = loadSound("sounds/press.mp3")
  //runSound = loadSound("sounds/run2.mp3");

}



function setup() {
  canvas = createCanvas(1800,800);

  back=createSprite(900,400,1800,800);
   back.x=back.width/2;
   //back.velocityX=-2;
   back.addImage(bg);
   back.scale=2;

  play=createSprite(900,400, 100, 100);
  play.addImage("play",play_img)
    
  batman= createSprite(110,660,20,50);
  batman.addImage("standing", bat);
  batman.addAnimation("running",bat_running);
  batman.addImage("jumping", bat_jump);
  batman.scale = 0.59;
  //batman.addImage("car",car_img);

  ground=createSprite(900,750,1800,20);
  ground.x = ground.width /2;
 // ground.addImage(ground_img);
  //ground.scale=0.3
  //ground.velocityX = -2;
  ground.visible=true;

  starGroup=new Group();

  coinGroup1=new Group();
  coinGroup2=new Group();
  coinGroup3=new Group();
  coinGroup4=new Group();
  coinGroup5=new Group();

  batarangGroup=new Group();
  obstaclesGroup=new Group();
  carsGroup=new Group();
  powersGroup=new Group();

  

  gameOver=createSprite(900,300);
  gameOver.addImage("game",game_img)
  gameOver.visible=false;

  reset=createSprite(900,660);
  reset.addImage(reset_img)
  reset.visible=false


}

function draw() {
  background(255);  
  //back.visible=false
  //batman.visible=false
  console.log(gameState);
 
  if(gameState===READY){
    
    back.visible=false
    batman.visible=false
    ground.visible=false
    //score.visible=false
    //batman.velocityX=0;
    //batman.velocityY=0;

    if(mousePressedOver(play)){
      play.visible=false;
      back.visible=true
      batman.visible=true
      gameState=PLAY;
      clickSound.play();
    }
  }
  
  

  if(gameState===PLAY){
    back.visible=true
    batman.visible=true
    ground.visible=true
    batarangGroup.setVisibleEach(true)
    powersGroup.setVisibleEach(true)
    carsGroup.setVisibleEach(true)
    obstaclesGroup.setVisibleEach(true)
    starGroup.setVisibleEach(true)
    coinGroup1.setVisibleEach(true)
    coinGroup2.setVisibleEach(true)
    coinGroup3.setVisibleEach(true)
    coinGroup4.setVisibleEach(true)
    coinGroup5.setVisibleEach(true)
    
    coiny = Math.round(random(200,550));
    spawnCoin1();
    spawnCoin2();
    spawnCoin3();
    spawnCoin4();
    spawnCoin5();
 
    if(batman.isTouching(coinGroup1)){
      coinGroup1.destroyEach();
      score=score+1; 
      coinSound.play();
    }
    if(batman.isTouching(coinGroup2)){
      coinGroup2.destroyEach();
      score=score+1; 
      coinSound.play();
    }
    if(batman.isTouching(coinGroup3)){
      coinGroup3.destroyEach();
      score=score+1; 
      coinSound.play();
    }
    if(batman.isTouching(coinGroup4)){
      coinGroup4.destroyEach();
      score=score+1; 
      coinSound.play();
    }
    if(batman.isTouching(coinGroup5)){
      coinGroup5.destroyEach();
      score=score+1; 
      coinSound.play();
    }

    if(batman.isTouching(obstaclesGroup)){
      obstaclesGroup.destroyEach();
      lives=lives-1; 
      //ouchSound.play()
    }

    if(batman.isTouching(starGroup)){
      starGroup.destroyEach();
      lives=lives-1; 
      //ouchSound.play()
    }


    back.velocityX=0;
    batman.changeAnimation("standing", bat);
    batman.scale = 0.5;
    batman.velocityX=0

    //Batman jumps & changes animation
    if(keyDown("up") &&  batman.isTouching(ground)){
      batman.velocityY=-28;
      batman.changeAnimation("jumping", bat_jump);
      batman.scale=1.1;
    }
    if(keyDown("right")){
      back.velocityX=-30;
      batman.changeAnimation("running",bat_running);
      batman.scale=1.1;
      //runSound.play()
    }

    if(keyDown("left")){
      back.velocityX=30;
      batman.changeAnimation("running",bat_running);
      batman.scale=1.1;
    }
  
  

    if(back.x>1800){
      back.x=back.width/2;

    }

    if(back.x<0){
      back.x=back.width/2;
    }
    //console.log(batman.y);

    //When batman is in air, looks like jumping
    if(batman.y<615){
      batman.changeAnimation("jumping", bat_jump);
      batman.scale=1.1;
    }

    spawnStar();

    spawnBat();
    spawnObstacles();
    spawnCar();
    spawnPower();

    batman.velocityY=batman.velocityY+0.8;
  // reset.visible=true;


    if(lives===0){
      gameState=END;
      overSound.play();
      
    }
  } //GAMESTATE PLAY ENDING


  if(gameState===END){
    back.visible=false
    batman.visible=false
    ground.visible=false
    batarangGroup.setVisibleEach(false)
    powersGroup.setVisibleEach(false)
    carsGroup.setVisibleEach(false)
    obstaclesGroup.setVisibleEach(false)
    starGroup.setVisibleEach(false)
    coinGroup1.setVisibleEach(false)
    coinGroup2.setVisibleEach(false)
    coinGroup3.setVisibleEach(false)
    coinGroup4.setVisibleEach(false)
    coinGroup5.setVisibleEach(false)
    //gameOver=playSound(gameover.mp3)
    gameOver.visible=true
    reset.visible=true


    reset.addImage(reset_img)
    reset.scale=0.7
    gameOver.addImage("game",game_img);
    batman.changeAnimation("standing",bat);
    batman.scale=0.5;
    batman.velocityX=0;
    batman.velocityY=0;
    back.velocityX=0;
    starGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    coinGroup1.setLifetimeEach(-1);
    coinGroup2.setLifetimeEach(-1);
    coinGroup3.setLifetimeEach(-1);
    coinGroup4.setLifetimeEach(-1);
    coinGroup5.setLifetimeEach(-1);
    batarangGroup.setLifetimeEach(-1);
    carsGroup.setLifetimeEach(-1);
    powersGroup.setLifetimeEach(-1);
    starGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
    coinGroup1.setVelocityXEach(0);
    coinGroup2.setVelocityXEach(0);
    coinGroup3.setVelocityXEach(0);
    coinGroup4.setVelocityXEach(0);
    coinGroup5.setVelocityXEach(0);
    carsGroup.setVelocityXEach(0);
    batarangGroup.setVelocityXEach(0);
    powersGroup.setVelocityXEach(0);

    if(mousePressedOver(reset)){
      
      restart();
    }
  } //GAMESTATE END ENDING

  

  

  //if(lives=0){
    //obstaclesGroup.velocityX=0;
    //coinGroup.velocityX=0;
    //starGroup.velocityX=0;
    //batarangGroup.velocityX=0;
    //carsGroup.velocityX=0;
    //powersGroup.velocityX=0;
  //}

  
  batman.collide(ground);
  drawSprites();

  fill(255);
  textSize(35);
  text("Score: "+score,100,100);

  fill(255)
  textSize(35)
  text("Lives: "+lives,100,150)


}


function restart(){
  reset.visible=false;
  gameOver.visible=false;
  clickSound.play();
  lives = 5;
  score=0
  batarangGroup.destroyEach()
  powersGroup.destroyEach()
  carsGroup.destroyEach()
  obstaclesGroup.destroyEach()
  starGroup.destroyEach()
  coinGroup1.destroyEach()
  coinGroup2.destroyEach()
  coinGroup3.destroyEach()
  coinGroup4.destroyEach()
  coinGroup5.destroyEach()
  gameState=PLAY;
}

