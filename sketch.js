var bg,ground,bat,batman,bat_running,canvas,power_img,power,bat_jump;

function preload(){

 bg = loadImage("images/bg.png");
 bat_running = loadAnimation("images/b1.png","images/b2.png","images/b3.png","images/b4.png","images/b5.png","images/b6.png","images/b7.png","images/b8.png");
 
 //
 power_img=loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png","images/p5.png","images/p6.png","images/p7.png","images/p8.png","images/p9.png","images/p10.png","images/p11.png","images/p12.png","images/p13.png","images/p14.png","images/p15.png","images/p16.png","images/p17.png","images/p18.png","images/p19.png","images/p20.png","images/p21.png","images/p22.png","images/p23.png","images/p24.png","images/p25.png","images/p26.png","images/p27.png","images/p28.png","images/p29.png","images/p30.png","images/p31.png","images/p32.png","images/p33.png","images/p34.png","images/p35.png","images/p36.png","images/p37.png","images/p38.png","images/p39.png","images/p40.png","images/p41.png","images/p42.png","images/p43.png","images/p44.png","images/p45.png","images/p46.png","images/p47.png","images/p48.png","images/p49.png","images/p50.png","images/p51.png","images/p52.png","images/p53.png","images/p54.png","images/p55.png","images/p56.png","images/p57.png","images/p58.png","images/p59.png","images/p60.png","images/p61.png","images/p62.png","images/p63.png");
 
 bat_jump=loadImage("images/b4.png");
 //Standing Batman
 bat= loadImage("images/Batman.png");
}



function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  ground=createSprite(500,570,4400,20);
  ground.x = ground.width /2;
  //ground.velocityX = -2;
  ground.visible=true;

  
  batman= createSprite(110,415,20,50);
  batman.addImage("standing", bat);
  batman.addAnimation("running",bat_running);
  batman.addImage("jumping", bat_jump);
  batman.scale = 0.59;
  
}

function draw() {
  background(bg);  

  batman.changeAnimation("standing", bat);
  batman.scale = 0.5;

  //Batman jumps & changes animation
  if(keyDown("Space") &&  batman.isTouching(ground)){
    batman.velocityY=-15;
    batman.changeAnimation("jumping", bat_jump);
    batman.scale=1.1;
  }


  //console.log(batman.y);

  //When batman is in air, looks like jumping
  if(batman.y<412){
    batman.changeAnimation("jumping", bat_jump);
    batman.scale=1.1;
  }

  batman.velocityY=batman.velocityY+0.8;
  batman.collide(ground);
  drawSprites();
}