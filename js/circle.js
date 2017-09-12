import { Scene } from 'athenajs';
import { MyCircle, MySprite } from 'objects/my_objects';

// const myGame = new Game({
//     name: 'sample-circle',
//     showFps: true,
//     width: 320,
//     height: 200
// });

// create a new scene
const myScene = new class objectsScene extends Scene {
    start() {
        // add a new circle object
        this.addObject(new MyCircle({
            w: 20,
            h: 20
        }));

        const sprite = new MySprite();
        sprite.x = 50;
        sprite.y = 50;

        this.addObject(sprite);
    }
}();

// set myScene as the current active scene
// myGame.setScene(myScene);
export default myScene;