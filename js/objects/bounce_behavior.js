import { Behavior, InputManager as Input } from 'athenajs';

/* Very simple behavior for the smiley */
class BounceBehavior extends Behavior {
    constructor(drawable, options) {
        super(drawable, options);

        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.1;
    }

    onUpdate(timestamp) {
        const sprite = this.sprite;

        sprite.y += this.vy;
        this.vy += this.gravity;

        if (sprite.y >= 200 - sprite.height) {
            sprite.y = 200 - sprite.height;
            this.vy *= -0.95;
        }

        if (Input.isKeyDown('RIGHT') && sprite.x < (320 - sprite.width)) {
            sprite.x += 1
        } else if (Input.isKeyDown('LEFT') && sprite.x > 0) {
            sprite.x -= 1;
        }
    }
}

export default BounceBehavior;