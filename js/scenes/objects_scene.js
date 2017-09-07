import { BitmapText, Scene, ResourceManager as RM } from 'athenajs';

let scene = new Scene(),
    bitmapText = new BitmapText('bitmaptext', {
        w: 320,
        h: 200,
        charWidth: 18,
        charHeight: 18,
        imageSrc: 'img/bitmapFont.png',
        text: 'AthenaJS\nRulez',
        offsetX: 34,
        startY: 36
    });

scene.addObject(bitmapText);

export default scene;