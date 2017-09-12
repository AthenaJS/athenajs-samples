import { Circle, Sprite } from 'athenajs';

class MyCircle extends Circle {
    constructor(options) {
        super(options);
        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.1;
        this.height = 200;
    }
    update() {
        this.y += this.vy;
        this.vy += this.gravity;

        if (this.y >= this.height) {
            this.y = this.height;
            this.vy *= -0.95;
        }
    }
}

class MySprite extends Sprite {
    constructor() {
        super('mySprite');

        this.addAnimation('jump', 'img/sprites.png', {
            numFrames: 10,
            frameWidth: 60,
            frameHeight: 72,
            frameDuration: 2,
            offsetY: 72
        });

        this.addAnimation('run', 'img/sprites.png', {
            numFrames: 10,
            frameWidth: 60,
            frameHeight: 72,
            frameDuration: 2
        });

        this.setAnimation('run');
    }
}

export { MyCircle, MySprite };