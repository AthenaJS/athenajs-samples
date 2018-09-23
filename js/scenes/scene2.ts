import { Scene, SimpleText } from 'athenajs';
import { Smiley, MySprite, MyFont } from '../objects/sample_objects';

// create a new scene
const myScene = new class objectsFxScene extends Scene {
    /**
     * Load anny need resources here
     *
     */
    setup() {
        this.loadImage('img/bitmapFont.png', 'myFont');
        this.loadImage('img/sprites.png', 'mySheet');
        this.loadImage('img/sballer_sprites.png', 'sballer');
    }
    start() {
        const font = new MyFont({
            text: 'AthenaJS\nRulez',
            x: 0,
            y: 80
        }),
            smiley = new Smiley({
                width: 40,
                height: 40,
                y: 100,
                x: 10
            }),
            text = new SimpleText("nextString", {
                text: "Canvas text",
                x: 150,
                y: 120,
                color: 'black'
            }),
            sprite = new MySprite({
                x: 0,
                y: 0
            });

        this.addObject([
            font,
            text,
            smiley,
            sprite
        ]);

        smiley.animate('Fade', {
            startValue: 0,
            endValue: 1,
            loop: Infinity,
            duration: 1000
        });

        font.animate('Rotate', {
            startValue: 0,
            endValue: 2 * Math.PI,
            loop: Infinity,
            duration: 4000
        });

        sprite.animate('Custom', {
            startValue: 0,
            endValue: 2,
            duration: 1000,
            loop: Infinity,
            callback: (val:number) => {
                sprite.setScale(val);
            }
        });

        text.animate('Rotate', {
            startValue: 0,
            endValue: 2 * Math.PI,
            loop: Infinity,
            duration: 8000
        });

        // text.animate('Rotate', {
        //     startValue: 0,
        //     endValue: 2 * Math.PI,
        //     loop: Infinity,
        //     duration: 4000
        // });
        // add a new circle object
        // this.addObject();

        // this.addObject(new MySprite({
        //     x: 50,
        //     y: 100
        // }));

        // this.addObject();
    }
}();

export default myScene;