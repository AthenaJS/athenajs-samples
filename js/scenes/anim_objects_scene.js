import { Scene, Text } from 'athenajs';
import { MyCircle, MySprite, MyFont } from 'objects/my_objects';

// create a new scene
const myScene = new class objectsScene extends Scene {
    /**
     * Load anny need resources here
     * 
     */
    setup() {
        this.loadImage('img/bitmapFont.png', 'myFont');
        this.loadImage('img/sprites.png', 'mySheet');
    }
    start() {
        const font = new MyFont({
            text: 'AthenaJS\nRulez'
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
            text,
            circle,
            sprite
        ]);

        sprite.animate('Custom', {
            startValue: 0,
            endValue: 2,
            loop: Infinity,
            duration: 2000,
            callback: (val) => {
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

// set myScene as the current active scene
// myGame.setScene(myScene);
export default myScene;