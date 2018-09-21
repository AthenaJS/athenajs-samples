// Type definitions for athenajs 0.1.1
// Project: athenajs
// Definitions by: Nicolas Ramz https://github.warpdesign.fr

declare module 'athenajs' {
    export function Dom(sel?: string | HTMLElement): _Dom;
    export class Scene{
        constructor(options?: SceneOptions);
        addObject(object: Drawable): Scene;
        addObject(array: Array<Drawable>): Scene;
        loadImage(src: string, id:string):void;
    }
    export class Game {
        constructor(options: GameOptions);
        setScene(scene: Scene): void;
    }
    export class Drawable{
        constructor(type: string, options: DrawableOptions);
        animate(name: string, options: object): void;
        width: number;
        height: number;
    }
    export class SimpleText extends Drawable{
        constructor(type:string, simpleTextOptions: SimpleTextOptions);
    }
    export class Paint extends Drawable{
        constructor(type: string, paintOptions: PaintOptions);
        circle(cx: number, cy: number, r: number, fillStyle: string): void;
        circle(cx: number, cy: number, r: number, fillStyle: string, borderWidth?: number, borderStyle?: string): void;
        arc(cx: number, cy: number, r: number, starteAngle: number, endAngle: number, fillStyle: string, borderSize: number): void;
        name: string;
    }

    export class BitmapText extends Drawable{
        constructor(type: string, textOptions: BitmapTextOptions);
    }

    export class Sprite extends Drawable {
        constructor(type: string, spriteOptions: SpriteOptions);
        addAnimation(name: string, imgPath: string, options: AnimOptions):void
    }
}

/* Dom support */
interface _Dom<TElement = HTMLElement> extends Iterable<TElement>{
    [key: number]: HTMLElement;
    length: number;
    css(prop: object): _Dom;
    css(prop: string): _Dom;
    css(prop: string, val: string): _Dom;
    find(selector: string): _Dom;
    appendTo(selector: string | _Dom): _Dom;
    attr(att: string | object, val?: string): _Dom;
    addClass(classes: string): _Dom;
    removeClass(classes: string): _Dom;
    html(str: string): _Dom;
    show(): _Dom;
    hide(): _Dom;
}

/* Game Support */
interface GameOptions{
    name: string,
    showFps: boolean,
    width: number,
    height: number,
    debug: boolean
}

interface SceneOptions{

}

interface DrawableOptions{
    objectId: number;
    layer: number;
}

interface SimpleTextOptions{

}

interface PaintOptions {

}

interface BitmapTextOptions{

}

interface SpriteOptions {

}

interface AnimOptions{
    numFrames: number,
    frameWidth: number,
    frameHeight: number,
    frameDuration: number
}