import { Scene, AudioManager, SimpleText, InputManager as Input } from 'athenajs';
import { Smiley } from '../objects/sample_objects';

// create a new scene
const myScene = new class objectsScene extends Scene {
    setup() {
        this.loadAudio('sound/throw_knife.mp3', 'throw');
    }

    start() {
        // add a new circle object
        this.addObject(new SimpleText("nextString", {
            text: "Press keys:\n ⟶ throw left\n ⟶ throw right\ncenter",
            x: 100,
            y: 0,
            color: 'black'
        }));

        Input.installKeyCallback('LEFT', 'up', (key, event) => {
            console.log('left');
            AudioManager.play('throw', false, 1, -10);
        });
    }
}();

export default myScene;