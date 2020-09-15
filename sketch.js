var ground,bat,batman,bat_running,canvas,power_img,power,bat_jump,bg,back,star_img,star,coin_img,coin;
var car_img, batarang_img, Obstacle;
var starGroup,coinGroup,batarangGroup,ObstaclesGroup,carsGroup
var score=0;
var lives=3;


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

}



function setup() {
  canvas = createCanvas(1800,800);

  back=createSprite(900,400,1800,800);
   back.x=back.width/2;
   //back.velocityX=-2;
   back.addImage(bg);
   back.scale=2;
  batman= createSprite(110,415,20,50);
  batman.addImage("standing", bat);
  batman.addAnimation("running",bat_running);
  batman.addImage("jumping", bat_jump);
  batman.scale = 0.59;
  //batman.addImage("car",car_img);

  ground=createSprite(500,570,4400,20);
  ground.x = ground.width /2;
 // ground.addImage(g_img)
  //ground.velocityX = -2;
  ground.visible=true;

  starGroup=new Group();
  coinGroup=new Group();
  batarangGroup=new Group();
  obstaclesGroup=new Group();
  carsGroup=new Group();

}

function draw() {
  background(255);  


 
  if(batman.isTouching(coinGroup)){
    coinGroup.destroyEach();
    score=score+1; 
   
   if(coinGroup.isTouching(batman)){
  coinGroup.destroyEach();

   score=score+1   
   }
  }

  if(batman.isTouching(obstaclesGroup)){
    obstaclesGroup.destroyEach();
    lives=lives-1; 
   
   if(obstaclesGroup.isTouching(batman)){
    obstaclesGroup.destroyEach();

   lives=lives-1   
   }
  }

  if(batman.isTouching(starGroup)){
    starGroup.destroyEach();
    lives=lives-1; 
   
   if(starGroup.isTouching(batman)){
    starGroup.destroyEach();

   lives=lives-1   
   }
  }

  back.velocityX=0;
  batman.changeAnimation("standing", bat);
  batman.scale = 0.5;
  batman.velocityX=0

  //Batman jumps & changes animation
  if(keyDown("up") &&  batman.isTouching(ground)){
    batman.velocityY=-23;
    batman.changeAnimation("jumping", bat_jump);
    batman.scale=1.1;
  }
  if(keyDown("right")){
    back.velocityX=-15;
    batman.changeAnimation("running",bat_running);
    batman.scale=1.1;
  }

  if(keyDown("left")){
    back.velocityX=15;
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
  if(batman.y<412){
    batman.changeAnimation("jumping", bat_jump);
    batman.scale=1.1;
  }

  spawnStar();
  spawnCoin();
  spawnBat();
  spawnObstacles();
  spawnCar();

  batman.velocityY=batman.velocityY+0.8;
  batman.collide(ground);
  drawSprites();

  fill(255);
  textSize(35);
  text("Score: "+score,100,100);

  fill(255)
  textSize(35)
  text("Lives: "+lives,100,150)
}


