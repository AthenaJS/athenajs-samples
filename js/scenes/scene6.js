import { Scene, AudioManager, SimpleText, InputManager as Input, Map } from 'athenajs';
import MapData from '../map/map.js';
import { Tree, Bush } from '../map/sprites';

// create a new scene
const myScene = new class objectsScene extends Scene {
    setup() {
        this.loadImage('img/tileset.png', 'tiles');
    }

    createMap() {
        // 928 x 256 px map
        const map = new Map({
            src: "tiles",
            tileWidth: 32,
            tileHeight: 32,
            width: 29 * 32,
            height: 8 * 32
        }),
            tiles = [];

        // 29 8
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 29; col++) {
                tiles.push({
                    offsetX: col * 32,
                    offsetY: row * 32,
                    width: 32,
                    height: 32
                });
            }
        }

        map.addTileSet(tiles);

        map.setData(MapData.map, MapData.behaviors);

        this.setMap(map);
    }

    start() {
        // add a new circle object
        // this.addObject(new SimpleText("nextString", {
        //     text: "Press keys:\n ⟶ throw left\n ⟶ throw right\ncenter",
        //     x: 100,
        //     y: 0,
        //     color: 'black'
        // }));

        // Input.installKeyCallback('LEFT', 'up', (key, event) => {
        //     console.log('left');
        //     AudioManager.play('throw', false, 1, -10);
        // });
        this.createMap();
        // put layer 0 in the background
        this.setLayerPriority(0, true);
        this.map.addObject(new Tree({
            x: 200,
            y: 100
        }))
    }
}();

export default myScene;