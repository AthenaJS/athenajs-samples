import { Canvas, Behavior } from 'athenajs';
//     this.y += this.vy;
    //     this.vy += this.gravity;

    //     if (this.y >= 200 - this.height) {
    //         this.y = 200 - this.height;
    //         this.vy *= -0.95;
    //     }

/**
* Very simple circle example with a bounce behavior
*
* @class MyCircle
* @extends {Circle}
*/
class Smiley extends Canvas {
    constructor(options) {
        super(Canvas.name, options);
        // this.vx = 0;
        // this.vy = 0;
        // this.gravity = 0.1;
    }

    render() {
        // face
        this.circle(0, 0, this.width / 2, 'yellow', 2, 'black');
        // eyes
        this.circle(this.width / 5, this.height / 3, this.width / 12, 'black');
        this.circle(this.width - this.width / 3, this.height / 3, this.width / 12, 'black');
        // mouth
        this.arc(this.width / 2, this.height - this.height / 2.5, this.width / 4, 0, Math.PI, 'black', 2);
    }
}

export default Smiley;