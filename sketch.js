let playerCar, carImg;
let track1, track2, trackImg;
let distCheck, trackSelector;
let distance, playerX = [50, 225, 375, 535], playerxPos;
let obsImg1, obsImg2, obsImg3, obsImg4, obsImg5, obsImg6, obsImg7, obsImg8, obstacleImg = [];

function preload() {
    carImg = loadImage("img/player.png");
    trackImg = loadImage("img/track.png");
    obsImg1 = loadImage("img/1.png");
    obsImg2 = loadImage("img/2.png");
    obsImg3 = loadImage("img/3.png");
    obsImg4 = loadImage("img/4.png");
    obsImg5 = loadImage("img/5.png");
    obsImg6 = loadImage("img/6.png");
    obsImg7 = loadImage("img/7.png");
    obsImg8 = loadImage("img/8.png");
    obstacleImg = [obsImg1, obsImg2, obsImg3, obsImg4, obsImg5, obsImg6, obsImg7, obsImg8];
}

function setup() {
    createCanvas(600, 500);
    playerCar = new Player();
}

function draw() {
    background(150);
    playerCar.controls();
    console.log(mouseX);
    drawSprites();
    push();
    translate(camera.x - 300, camera.y + 180);
    fill(200);
    rect(0, 0, 200, 70);
    fill(0);
    text("Press C for Source Code", 5, 15);
    text("Press R to reload the game", 5, 30);
    text("Game is under construction", 5, 45);
    text("Use Arrow keys to control the car", 5, 60);
    pop();
}

function switchTrack() {
    if (trackSelector === track1) {
        trackSelector = track2;
    } else if (trackSelector === track2) {
        trackSelector = track1;
    }
}

function keyPressed() {
    if (keyCode === 67) {
        window.location.href
    }
    if (keyCode === 82) {
        window.location.reload(false);
    }
    if (keyCode === 37 && playerCar.car.x > 50) {
        playerCar.car.x -= 50;
    }
    if (keyCode === 39 && playerCar.car.x < 535) {
        playerCar.car.x += 50;
    }
}