import { Game } from 'athenajs';
import sceneCircle from 'circle';
import sceneSprite from 'sprite';

const myGame = new Game({
    name: 'athena-samples',
    showFps: true,
    width: 80,
    height: 80
});

myGame.setScene(sceneCircle);

window.onload = () => {
    document.getElementById('nextScene').addEventListener('click', () => {
        myGame.setScene(myGame.scene === sceneSprite ? sceneCircle : sceneSprite);
    });
}
