import { Scene } from 'athenajs';
import { Smiley } from '../objects/sample_objects';
import BounceBehavior from '../objects/bounce_behavior';

// create a new scene
const myScene = new class objectsScene extends Scene {
    start() {
        // add a new circle object
        this.addObject(new Smiley({
            width: 40,
            height: 40,
            y: 100,
            x: 10,
            behavior: BounceBehavior
        }));
    }
}();

export default myScene;