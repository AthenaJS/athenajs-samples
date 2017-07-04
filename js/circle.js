import {Circle, Game, Scene} from 'athenajs';

let myGame = new Game({
        name: 'sample-circle',
        showFps: true,
        width: 320,
        height: 200
});

myGame.onReady(function() {
    let myScene = new Scene();
    myScene.onStart(function () {
        let myCircle = new Circle({
            w: 20,
            h: 20
        });        
        this.addObject(myCircle);
    });
    this.setScene(myScene);
});