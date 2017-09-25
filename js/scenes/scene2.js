import { Scene, Text } from 'athenajs';
import { MyCircle, MySprite, MyFont } from 'objects/sample_objects';

// create a new scene
const myScene = new class objectsScene extends Scene {
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
            y:80
        }),
            circle = new MyCircle({
                w: 20,
                h: 20
            }),
            text = new Text("nextString", {
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
            circle,
            sprite
        ]);

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
            callback: val => {
                sprite.setScale(val);
            }
        });
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