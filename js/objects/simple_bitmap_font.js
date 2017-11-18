import { BitmapText } from 'athenajs';

class MyFont extends BitmapText {
    constructor(options) {
        super('myFont', Object.assign({
            width: 320,
            height: 64,
            charWidth: 32,
            charHeight: 32,
            imageSrc: 'img/bitmapFont.png',
            offsetX: 34,
            startY: 2
        }, options));
    }
}

export default MyFont;