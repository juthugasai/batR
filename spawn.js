function spawnStar() {
    if (frameCount % 80 === 0) {
      var star = createSprite(1800,800,40,10);
      star.y = Math.round(random(1800,50));
      star.addAnimation("star",star_img);
      star.scale = 0.1;
      star.velocityX = -50;
      star.lifetime = 100;
      starGroup.add(star)
    }   
}

function spawnCoin() {
    if (frameCount % 50 === 0) {
      var coin = createSprite(1800,400,40,10);
      coin.y = Math.round(random(100,500));
      coin.addAnimation("coin",coin_img);
      coin.scale = 0.3;
      coin.velocityX = -8;
      coin.lifetime = 300;
      coinGroup.add(coin)
    }  
}

function spawnBat(){
    if (frameCount % 300 === 0) {
        var batarang = createSprite(1800,400,40,10);
        batarang.y = Math.round(random(400,500));
        batarang.addImage("batarang",batarang_img);
        batarang.scale = 0.15;
        batarang.velocityX = -8;
        batarang.lifetime = 300;
        batarangGroup.add(batarang)
      }  
}
function spawnObstacles(){
    if (frameCount % 120 === 0) {
        var obstacle = createSprite(1800,510,40,10);
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
        var car = createSprite(1800,525,40,10);
        //car.y = Math.round(random(400,500));
        car.addImage("car", car_img);
        car.scale = 0.3;
        car.velocityX = -8;
        car.lifetime = 300;
        carsGroup.add(car)
      }  
}