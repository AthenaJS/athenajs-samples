import { Game } from 'athenajs';
import sceneCircle from 'circle';
import sceneSprite from 'sprite';
import sceneObjects from 'scenes/objects_scene';

const myGame = new Game({
    name: 'athena-samples',
    showFps: true,
    width: 320,
    height: 200,
    debug: true
}),
    scenes = [
        sceneCircle,
        sceneSprite,
        sceneObjects
    ];

let currentScene = 0;

myGame.setScene(scenes[currentScene]);

window.onload = () => {
    document.getElementById('nextScene').addEventListener('click', () => {
        currentScene++;
        if (currentScene > scenes.length - 1) {
            currentScene = 0;
        }
        myGame.setScene(scenes[currentScene]);
    });
}
