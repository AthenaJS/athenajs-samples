import {Sprite, Game, Scene} from 'athenajs';

let myGame = new Game({
        name: 'sample-sprite',
        showFps: true,
        width: 80,
        height: 80
});

myGame.onReady(function() {
    let myScene = new Scene();
    myScene.onStart(function () {
        debugger;
        let mySprite = new Sprite();
        mySprite.addAnimation('runningMan', 'img/axeBandit.png', {frameWidth: 80, frameDuration: 4}).then(() => {
            debugger;
            this.addObject(mySprite);
        });
    });
    this.setScene(myScene);
});