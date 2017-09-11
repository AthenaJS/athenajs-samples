import { Sprite, Game, Scene } from 'athenajs';

// const myGame = new Game({
//     name: 'sample-sprite',
//     showFps: true,
//     width: 80,
//     height: 80
// });

const myScene = new Scene(),
    mySprite = new Sprite();

mySprite.addAnimation('jump', 'img/sprites.png', {
    numFrames: 10,
    frameWidth: 60,
    frameHeight: 72,
    frameDuration: 2,
    offsetY: 72
});

mySprite.addAnimation('run', 'img/sprites.png', {
    numFrames: 10,
    frameWidth: 60,
    frameHeight: 72,
    frameDuration: 2
});

mySprite.setAnimation('run');

myScene.addObject(mySprite);

// mySprite.animate('Rotate', {
//     startValue: 0,
//     endValue: Math.PI * 2,
//     duration: 1000,
//     loop: 2
// });

window.mySprite = mySprite;

// myGame.setScene(myScene);

export default myScene;