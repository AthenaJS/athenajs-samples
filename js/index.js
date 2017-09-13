import { Game, Dom } from 'athenajs';
import sceneObjects from 'scenes/objects_scene';
import sceneAnimObjects from 'scenes/anim_objects_scene';

const myGame = new Game({
    name: 'athena-samples',
    showFps: true,
    width: 320,
    height: 200,
    debug: true
}),
    scenes = [
        { label: 'Base Objects', scene: sceneObjects },
        { label: 'Object Animations', scene: sceneAnimObjects }
    ];

let currentScene = 0;

function setNextScene() {
    const current = scenes[currentScene];
    myGame.setScene(current.scene);
    Dom('#label').html(current.label);
    currentScene++;
    if (currentScene > scenes.length - 1) {
        currentScene = 0;
    }
}

window.onload = () => {
    Dom('#nextScene')[0].addEventListener('click', setNextScene);
    setNextScene();
}
