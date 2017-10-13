import { Circle, Sprite, BitmapText } from 'athenajs';

/**
 * Very simple circle example with a bounce behavior
 *
 * @class MyCircle
 * @extends {Circle}
 */
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

/**
 *
 * Very simple sprite with a single 'run' animation
 *
 * @class MySprite
 * @extends {Sprite}
 */
class MySprite extends Sprite {
    constructor(options) {
        super('mySprite', options);

        // this.addAnimation('run', 'img/sprites.png', {
        //     numFrames: 10,
        //     frameWidth: 60,
        //     frameHeight: 72,
        //     frameDuration: 2
        // });
        this.addAnimation('run', 'sballer', {
            numFrames: 9,
            frameWidth: 82,
            frameHeight: 69,
            frameDuration: 4
        });
    }
}

class MyFont extends BitmapText {
    constructor(options) {
        super('myFont', Object.assign({
            w: 320,
            h: 64,
            charWidth: 32,
            charHeight: 32,
            imageSrc: 'img/bitmapFont.png',
            offsetX: 34,
            startY: 2
        }, options));
    }
}

export { MyCircle, MySprite, MyFont };