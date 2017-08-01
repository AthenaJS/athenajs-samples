import { Sprite, Game, Scene } from 'athenajs';

const myGame = new Game({
    name: 'sample-sprite',
    showFps: true,
    width: 80,
    height: 80
});

const myScene = new Scene(),
    mySprite = new Sprite();

mySprite.addAnimation('runningMan', 'img/axeBandit.png', {
    numFrames: 8,
    frameWidth: 80,
    frameHeight: 80,
    frameDuration: 4
});
myScene.addObject(mySprite);

myGame.setScene(myScene);