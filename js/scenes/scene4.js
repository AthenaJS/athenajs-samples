import { Scene, FX, Effect, SimpleText, InputManager as Input } from 'athenajs';
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
            y: 100
        }));

        this.addObject(new SimpleText("nextString", {
            text: "Press keys:\n1 ⟶ fade\n2 ⟶ skew\n3 ⟶ mosaic",
            x: 100,
            y: 0,
            color: 'black'
        }));

        Input.installKeyCallback('1 2 3', 'up', (key, event) => {
            this.applyEffect(parseInt(key, 10));
        });

        this.effectInProcess = false;
    }

    applyEffect(effect) {

        let promise;

        if (this.effectInProcess) {
            return;
        } else {
            this.effectInProcess = true;
        }

        switch (effect) {
            case 1:
                promise = this.fadeIn(2000);
                break;

            case 2:
                promise = this.animate('Skew', {
                    when: 'post',
                    startValue: Math.PI / 3,
                    endValue: 0,
                    duration: 2000,
                    easing: 'easeOutBounce'
                });
                break;

            case 3:
                promise = this.animate('Mosaic', {
                    when: 'post',
                    duration: 1000,
                    startValue: 0.00005,
                    endValue: 0.2,
                    easing: 'linear'
                });
                break;
        }

        promise.then(() => {
            this.effectInProcess = false;
        });
    }
}();

export default myScene;