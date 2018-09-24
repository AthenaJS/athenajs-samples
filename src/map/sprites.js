import { Sprite } from 'athenajs';

/**
 *
 * Static bush sprite to show background elements
 *
 * @class Bush
 * @extends {Sprite}
 */
class Bush extends Sprite {
    constructor(options) {
        super('myBush', options);

        this.addAnimation('static', 'tiles', {
            numFrames: 1,
            frameWidth: 73,
            frameHeight: 32,
            frameDuration: 1,
            offsetX: 177,
            offsetY: 128
        });

        this.addAnimation('static2', 'tiles', {
            numFrames: 1,
            frameWidth: 73,
            frameHeight: 32,
            frameDuration: 1,
            offsetX: 177,
            offsetY: 160
        });
    }
}


/**
 *
 * Static tree sprite to show background elements
 *
 * @class Tree
 * @extends {Sprite}
 */
class Tree extends Sprite {
    constructor(options) {
        super('myTree', options);

        this.addAnimation('static', 'tiles', {
            numFrames: 1,
            frameWidth: 51,
            frameHeight: 116,
            frameDuration: 1,
            offsetX: 22,
            offsetY: 43
        });

        this.addAnimation('static2', 'tiles', {
            numFrames: 1,
            frameWidth: 51,
            frameHeight: 116,
            frameDuration: 1,
            offsetX: 118,
            offsetY: 43
        });
    }
}

export { Tree, Bush };