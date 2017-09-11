import { Circle, Game, Scene } from 'athenajs';

// const myGame = new Game({
//     name: 'sample-circle',
//     showFps: true,
//     width: 320,
//     height: 200
// });

// create a new scene
const myScene = new class objectsScene extends Scene {
    start() {
        // add a new circle object
        this.addObject(new Circle2({
            w: 20,
            h: 20
        }));
    }
}();

class Circle2 extends Circle {
    constructor(options) {
        super(options);
        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.1;
        this.height = 200;
    }
    update() {
        this.y += this.vy;
        this.vy += this.gravity;

        if (this.y >= this.height) {
            this.y = this.height;
            this.vy *= -0.95;
        }
    }
}

// set myScene as the current active scene
// myGame.setScene(myScene);
export default myScene;