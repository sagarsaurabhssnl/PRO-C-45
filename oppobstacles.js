class Obstacle1 {
    constructor(y) {
        this.car = createSprite(random(playerX), y);
        this.car.addImage(random(obstacleImg));
        this.car.velocityY = 5;
        this.car.scale = 0.3;
        this.car.lifetime = 200;
    }
}
