import { Game, Dom } from 'athenajs';
import sceneObjects from './scenes/scene1';
import sceneAnimObjects from './scenes/scene2';
import sceneBehavior from './scenes/scene3';
import sceneEffects from './scenes/scene4';
import sceneSound from './scenes/scene5';
import sceneMap from './scenes/scene6';

const myGame = new Game({
    name: 'athena-samples',
    showFps: true,
    width: 320,
    height: 200,
    debug: true
}),
    scenes = [
        { label: 'Base Objects', scene: sceneObjects },
        { label: 'Object Animations', scene: sceneAnimObjects },
        { label: 'Behavior Example: press ⟸ / ⟹', scene: sceneBehavior },
        { label: 'Scene Effects', scene: sceneEffects },
        { label: 'Sound Example: press ⟸ / ⟹', scene: sceneSound },
        { label: 'Map Example: press ⟸ / ⟹', scene: sceneMap },
    ];

let currentScene = 0;

function setNextScene() {
    const current = scenes[currentScene];
    myGame.setScene(current.scene);
    Dom('#label').html(`${currentScene + 1}: ${current.label}`);
    currentScene++;
    if (currentScene > scenes.length - 1) {
        currentScene = 0;
    }
}

window.onload = () => {
    Dom('#nextScene')[0].addEventListener('click', setNextScene);
    setNextScene();
}
