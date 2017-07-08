import { Sprite, Game, Scene } from 'athenajs';

const myGame = new Game({
    name: 'sample-sprite',
    showFps: true,
    width: 80,
    height: 80
});

const myScene = new Scene(),
    mySprite = new Sprite();

mySprite.addAnimation('runningMan', 'img/axeBandit.png', { frameWidth: 80, frameDuration: 4 });
myScene.addObject(mySprite);

myGame.setScene(myScene);