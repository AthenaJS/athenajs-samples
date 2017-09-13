import { Scene } from 'athenajs';
import { MyCircle, MySprite, MyFont } from 'objects/my_objects';

// create a new scene
const myScene = new class objectsScene extends Scene {
    /**
     * Load anny need resources here
     * 
     */
    setup() {
        debugger;
        this.loadImage('img/bitmapFont.png', 'myFont');
        this.loadImage('img/sprites.png', 'mySheet');
    }
    start() {
        // add a new circle object
        this.addObject(new MyCircle({
            w: 20,
            h: 20
        }));

        this.addObject(new MySprite({
            x: 50,
            y: 50
        }));

        this.addObject(new MyFont({
            text: 'AthenaJS\nRulez'
        }));
    }
}();

// set myScene as the current active scene
// myGame.setScene(myScene);
export default myScene;