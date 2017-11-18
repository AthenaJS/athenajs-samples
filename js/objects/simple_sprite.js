import { Sprite } from 'athenajs';

/**
 *
 * Very simple sprite with a single 'run' animation
 *
 * @class MySprite
 * @extends {Sprite}
 */
class MySprite extends Sprite {
    constructor(options) {
        super('mySprite', options);

        // this.addAnimation('run', 'img/sprites.png', {
        //     numFrames: 10,
        //     frameWidth: 60,
        //     frameHeight: 72,
        //     frameDuration: 2
        // });
        this.addAnimation('run', 'sballer', {
            numFrames: 9,
            frameWidth: 82,
            frameHeight: 69,
            frameDuration: 4
        });
    }
}

export default MySprite;