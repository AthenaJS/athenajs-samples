import { Scene, FX, Effect } from 'athenajs';
import { MyFont } from '../objects/sample_objects';

class Skew extends Effect {
    constructor(options, display) {
        super(Object.assign({
            startValue: Math.PI / 3,
            endValue: 0,
            when: 'post'
        }, options), display);

        this.buffer = display.getBuffer(this.width, this.height);
    }

    process(ctx, fxCtx) {
        super.process();

        var val = this.startValue - this.animProgress * this.startValue;

        this.buffer.drawImage(ctx.canvas, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.setTransform(1, Math.tan(val), 0, 1, 0, 0);

        ctx.drawImage(this.buffer.canvas, 0, 0);

        return this.ended;
    }
}

FX.addFX('Skew', Skew);

// create a new scene
const myScene = new class objectsScene extends Scene {
    setup() {
        this.loadImage('img/bitmapFont.png', 'myFont');
    }

    start() {
        // add a new circle object
        this.addObject(new MyFont({
            text: 'AthenaJS\nRulez',
            x: 0,
            y: 80
        }));

        this.effect = 0;
        this.randomEffect();
    }

    randomEffect() {
        console.log('random effect', this.effect);

        this.opacity = 1;
        switch (this.effect) {
            case 0:
                this.fadeIn(1000).then(() => {
                    setTimeout(() => this.randomEffect(), 800);
                });
                break;

            case 1:
                this.animate('Skew', {
                    when: 'post',
                    startValue: Math.PI / 3,
                    endValue: 0,
                    duration: 2000,
                    easing: 'easeOutBounce'
                }).then(() => {
                    setTimeout(() => this.randomEffect(), 800);
                });
                break;

            case 2:
                this.animate('Mosaic', {
                    when: 'post',
                    duration: 1000,
                    startValue: 0.00005,
                    endValue: 0.2,
                    easing: 'linear'
                }).then(() => {
                    this.opacity = 1;
                    setTimeout(() => this.randomEffect(), 800);
                });
                break;


            case 3:
                this.fadeOut(1000).then(() => {
                    setTimeout(() => this.randomEffect(), 800);
                });
                break;
        }

        this.effect++;

        if (this.effect > 3) {
            this.effect = 0;
        }
    }
}();

export default myScene;