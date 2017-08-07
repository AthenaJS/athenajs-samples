import { Circle, Game, Scene } from 'athenajs';

// const myGame = new Game({
//     name: 'sample-circle',
//     showFps: true,
//     width: 320,
//     height: 200
// });

// create a new scene
const myScene = new Scene();

// add a new circle object
myScene.addObject(new Circle({
    w: 20,
    h: 20
}));

// set myScene as the current active scene
// myGame.setScene(myScene);
export default myScene;