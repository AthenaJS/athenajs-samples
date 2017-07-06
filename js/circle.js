import { Circle, Game, Scene } from 'athenajs';

let myGame = new Game({
    name: 'sample-circle',
    showFps: true,
    width: 320,
    height: 200
});

let myScene = new Scene();

myGame.onReady(function () {
    this.setScene(myScene);
});

myScene.onStart(function () {
    let myCircle = new Circle({
        w: 20,
        h: 20
    });
    this.addObject(myCircle);
});