class Player {
    constructor() {
        track1 = createSprite(300, 300);
        track2 = createSprite(300, -300);
        track1.addImage(trackImg);
        track2.addImage(trackImg);
        trackSelector = track1;
        this.car = createSprite(random(playerX), 300);
        this.vel = this.car.velocityY;
        this.car.scale = 0.5;
        this.car.addImage(carImg);
        distCheck = this.car.y * (-1) + 500;
    }
    controls() {
        if (frameCount % 50 === 0) {
            var obs1 = new Obstacle1(this.car.y-600);
        }
        distance = (this.car.y * -1);
        if (distCheck < distance) {
            trackSelector.y = this.car.y - 600;
            distCheck = this.car.y * (-1) + 500;
            switchTrack();
        }
        camera.position.y = this.car.y - 150;
        if (keyIsDown(UP_ARROW) && this.vel > -400) {
            this.vel -= 0.2;
        } else if (keyIsDown(DOWN_ARROW) && this.vel <= 0) {
            this.vel += 0.3;
        } else {
            if (this.car.velocityY < 0) {
                this.vel += 0.2;
            }
        }
        if (this.car.velocityY > 0) {
            this.car.velocityY -= 0.1;
        }
        this.car.velocityY = this.vel;
    }
}