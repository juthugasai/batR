function spawnStar() {
    if (frameCount % 200 === 0) {
      var star = createSprite(1800,800,40,10);
      star.y = Math.round(random(50,640));
      star.addAnimation("star",star_img);
      star.scale = 0.1;
      star.velocityX = -70;
      star.lifetime = 100;
      starGroup.add(star)
    }   
}



function spawnCoin1() {
  if (frameCount % 250 === 0) {
    var coin = createSprite(1800,coiny+40,40,10);
    //coin.y = Math.round(random(200,690));
    coin.addAnimation("coin",coin_img);
    coin.scale = 0.3;
    coin.velocityX = -8;
    coin.lifetime = 300;
    coinGroup1.add(coin)
  }  
}

function spawnCoin2() {
  if (frameCount % 250 === 0) {
    var coin = createSprite(1850,coiny+20,40,10);
    //coin.y = Math.round(random(200,690));
    coin.addAnimation("coin",coin_img);
    coin.scale = 0.3;
    coin.velocityX = -8;
    coin.lifetime = 300;
    coinGroup2.add(coin)
  }  
}

function spawnCoin3() {
  if (frameCount % 250 === 0) {
    var coin = createSprite(1900,coiny,40,10);
    //coin.y = Math.round(random(200,690));
    coin.addAnimation("coin",coin_img);
    coin.scale = 0.3;
    coin.velocityX = -8;
    coin.lifetime = 300;
    coinGroup3.add(coin)
  }  
}

function spawnCoin4() {
  if (frameCount % 250 === 0) {
    var coin = createSprite(1950,coiny+20,40,10);
    //coin.y = Math.round(random(200,690));
    coin.addAnimation("coin",coin_img);
    coin.scale = 0.3;
    coin.velocityX = -8;
    coin.lifetime = 300;
    coinGroup4.add(coin)
  }  
}

function spawnCoin5() {
  if (frameCount % 250 === 0) {
    var coin = createSprite(2000,coiny+40,40,10);
    //coin.y = Math.round(random(200,690));
    coin.addAnimation("coin",coin_img);
    coin.scale = 0.3;
    coin.velocityX = -8;
    coin.lifetime = 300;
    coinGroup5.add(coin)
  }  
}

function spawnBat(){
    if (frameCount % 400 === 0) {
        var batarang = createSprite(1800,700,40,10);
        //batarang.y = Math.round(random(400,500));
        batarang.addImage("batarang",batarang_img);
        batarang.scale = 0.15;
        batarang.velocityX = -8;
        batarang.lifetime = 300;
        batarangGroup.add(batarang)
      }  
}
function spawnObstacles(){
    if (frameCount % 350 === 0) {
        var obstacle = createSprite(1800,690,40,10);
        //obstacle.y = Math.round(random(400,500));
        obstacle.addImage("obstacle", Obstacle);
        obstacle.scale = 0.3;
        obstacle.velocityX = -8;
        obstacle.lifetime = 300;
        obstaclesGroup.add(obstacle)
      }  
}

function spawnCar(){
    if (frameCount % 250 === 0) {
        var car = createSprite(1800,708,40,10);
        //car.y = Math.round(random(400,500));
        car.addImage("car", car_img);
        car.scale = 0.3;
        car.velocityX = -8;
        car.lifetime = 300;
        carsGroup.add(car)
      }  
}

function spawnPower(){
    if (frameCount % 450=== 0) {
        var power = createSprite(1800,700,40,10);
        //power.y = Math.round(random(400,500));
        power.addAnimation("power", power_img);
        power.scale = 0.3;
        power.velocityX = -8;
        power.lifetime = 300;
        powersGroup.add(power)
      }  
}