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
        this.addObject(new MyFont({
            text: 'AthenaJS\nRulez'
        }));

        // add a new circle object
        this.addObject(new MyCircle({
            w: 20,
            h: 20
        }));

        this.addObject(new MySprite({
            x: 50,
            y: 100
        }));

        this.addObject(new Text("nextString", {
            text: "Canvas text",
            x: 150,
            y: 120,
            color: 'black'
        }));
    }
}();

// set myScene as the current active scene
// myGame.setScene(myScene);
export default myScene;