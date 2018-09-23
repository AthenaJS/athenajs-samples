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
        setScale(scale:number):void;
        width: number;
        height: number;
        x:number;
        y:number;
        vx:number;
        vy:number;
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

    export class Map{

    }

    export const InputManager:_InputManager;

    export class MapEvent {
        /**
         * Creates a new MapEvent
         *
         * @param {Map} map
         */
        constructor(map:Map);
    
        /**
         * Resets the MapEvent switches, events and items
         */
        reset():void;
    
        /**
         * Adds a new [`Drawable`]{#item} onto the map
         *
         * @param {String} id of the item to add
         * @param {Drawable} item to add
         */
        addItem(id:string, item:Drawable):void;
    
        /**
         * Returns an item
         *
         * @param {String} id of the item to retrieve
         *
         * @returns {Drawable|undefined} The item or undefined if it wasn't handled by the map
         */
        getItem(id:string):Drawable|undefined;
    
        // TODO: ability to trigger an event once a switch has been modified
        setSwitch(id:string, bool:boolean):void;
    
        toggleSwitch(id:string):void;
    
        /**
         * Retrieves a switch from the map using its id
         *
         * @param {String} id The switch to retrieve.
         *
         * @returns {any} returns the switch or false if it could not be found
         */
        getSwitch(id:string):any;
    
        /**
         * checks of conditions of specified trigger are valid
         *
         * @param {Object} trigger The trigger to check.
         *
         * @returns {Boolean} true if the trigger is valid
         */
        checkConditions(trigger:object):boolean;
    
        handleAction(options:object):void;
    
        handleEvent(options:object):any;
    
        /**
         * Schedule adding a new object to the map
         *
         * @param {String} spriteId The id of the new sprite to add.
         * @param {Object} spriteOptions The options that will be passed to the object constructor.
         * @param {Number} [delay=0] The delay in milliseconds to wait before adding the object.
         * @returns {Drawable} the new drawable
         *
         */
        scheduleSprite(spriteId:string, spriteOptions:object, delay:number):Drawable;
    
    
        /**
         * Add a new wave of objects to the map
         * Used for example when the player triggers apparition of several enemies or bonuses
         *
         * @param {Object} options The options to pass to the wav object
         * @returns {Boolean}
         *
         * @related {Wave}
         */
        handleWave(options:object):boolean;
    
        endWave():void;

        triggerEvent(id:string):void;
    
        isEventTriggered(id:string):boolean;
    }
    

    export class Behavior {
        vx:number;
        vy:number
        gravity:number;
        sprite:Drawable;
        constructor(sprite:Drawable, options:BehaviorOptions);
        onUpdate(timestamp:number):void;
        onVXChange?(vx:number):void;
        onVYChange?(vy:number):void;        
    
        /**
         * Returns current mapEvent
         * 
         * @returns {MapEvent} the object's current map event
         */
        getMapEvent():MapEvent;
    }

    interface _InputManager {
 /**
     * A list of common keyCodes
     */
    KEYS: {
        'UP': 38,
        'DOWN': 40,
        'LEFT': 37,
        'RIGHT': 39,
        'SPACE': 32,
        'ENTER': 13,
        'ESCAPE': 27,
        'CTRL': 17
    };
    /**
     * List of common pad buttons
     */
    PAD_BUTTONS: {
        32: 1, // Face (main) buttons
        FACE_0: 1,
        FACE_3: 2,
        FACE_4: 3,
        LEFT_SHOULDER: 4, // Top shoulder buttons
        RIGHT_SHOULDER: 5,
        LEFT_SHOULDER_BOTTOM: 6, // Bottom shoulder buttons
        RIGHT_SHOULDER_BOTTOM: 7,
        SELECT: 8,
        START: 9,
        LEFT_ANALOGUE_STICK: 10, // Analogue sticks (if depressible)
        RIGHT_ANALOGUE_STICK: 11,
        38: 12, // Directional (discrete) pad
        40: 13,
        37: 14,
        39: 15
    };
    axes: object;
    newGamepadPollDelay: number;
    gamepadSupport: boolean;
    recording: boolean;
    playingEvents: boolean;
    playingPos: number;
    /*recordedEvents: Array,*/
    pad: null;
    latches: object;
    keyPressed: object;
    padPressed: object;
    keyCb: object;
    enabled: boolean;
    inputMode:string;
    // virtual joystick instance
    dPadJoystick: null;
    jPollInterval: number;
    /**
     * Initializes the InputManager with a reference to the game.
     *
     * This method prepares the InputManager by reseting keyboard states/handlers and
     * set current inputMode
     *
     * @param {Object} options List of input options, unused for now
     *
     */
    init():void
    /**
     * generates key char from key codes
     *
     * @private
     */
    // _generateKeyCodes: function ():void {
    //     for (let i = 65; i < 91; ++i) {
    //         this.KEYS[String.fromCharCode(i)] = i;
    //     }
    // },
    /**
     * Private handler that is supposed to detect touchEvent and automatically switch between keyboard & touch
     * inputs. Unfortunately it tourned out to not be so easy.
     *
     * @private
     */
    // _installInputModeSwitchHandler: function () {
    //     // we cannot have several input devices (ie: keyboard, joystick,...) running at the same time
    //     // since they will interfer with each other (pressing a key will stop touch from working correctly)
    //     // we don't want the user to have to choose input mode using a menu or shortcut
    //     // instead, we want to have an automatic detection/switch of input mode which works like this:
    //     // by default, input mode if set to keyboard
    //     // if a touch is detected, input is set to joystick and kb detection is disabled
    //     // if a keydown is detected, joystick mode is disabled and kb detection is enabled
    //     document.addEventListener('touchstart', () => {
    //         this.setInputMode('joystick');
    //     });

    //     // document.addEventListener('keydown', () => {
    //     //     this.setInputMode('keyboard');
    //     // });
    // },
    /**
     * Starts recording input events. They are stored into `InputManager.recordedEvents`
     */
    startRecordingEvents():void;
    /**
     * Stops recording events.
     */
    stopRecordingEvents():void;
    /**
     * After events have been reccorded they can be played back using this method.
     */
    playRecordedEvents():void;
    /**
     * Sets next key states using recorded events
     *
     * TODO: add an optional callback to be called at the end of the playback
     * so that demo can be looped.
     */
    nextRecordedEvents():void;
    /**
     * Saves current event state onto the recordedEvents stack
     *
     * @private
     */
    // recordEvents: function () {
    //     /*            'UP': 38,
    //                 'DOWN': 40,
    //                 'LEFT': 37,
    //                 'RIGHT': 39,
    //                 'SPACE': 32,
    //                 'ENTER': 13,
    //                 'ESCAPE': 27,
    //                 'CTRL': 17*/
    //     this.recordedEvents.push(JSON.parse(JSON.stringify(this.keyPressed)));
    // },
    /**
     * Changes input mode
     *
     * @param {String} mode Changes current input mode, can be `virtual_joystick`, `keyboard`, `gamepad`
     */
    setInputMode(mode:string):void;
    /**
     * Resets keys that have been pressed.
     *
     * @private
     */
    // _resetKeys: function () {
    //     for (let key in this.keyPressed) {
    //         this.keyPressed[key] = false;
    //         this.latches[key] = false;
    //     }
    // },
    /**
     * Checks for a new joystick to be connected onto the machine and changes the inputMode to `gamepad`
     * when a new joypad is detected.
     *
     * @private
     */
    // _pollNewGamepad: function () {
    //     let gamepads = (navigator.getGamepads && navigator.getGamepads()) || (navigator.webkitGetGamepads && navigator.webkitGetGamepads()),
    //         pad = null;

    //     // TODO: we just use the first one for now, we need to be able to use any pad
    //     if (gamepads && gamepads.length) {
    //         for (let i = 0; i < gamepads.length; ++i) {
    //             pad = gamepads[i];
    //             if (pad) {
    //                 this.pad = pad;
    //                 if (!this.gamepadSupport) {
    //                     console.log('[Event] Oh oh! Looks like we have a new challenger: ', pad.id);
    //                     this.gamepadSupport = true;
    //                     this.setInputMode('gamepad');
    //                 }
    //             }
    //         }
    //     }

    //     if (!this.gamepadSupport) {
    //         setTimeout(() => {
    //             this._pollNewGamepad();
    //         }, this.newGamepadPollDelay);
    //     }
    // },
    /**
     * @private
     */
    // _pollGamepad: function () {
    //     // normal buttons
    //     // if (key === this.KEYS.space) {
    //     //     if (this.pad.buttons[this.PAD_BUTTONS[key]].pressed === true) {
    //     //         this.padPressed[key] = true;
    //     //     } else {
    //     //         this.padPressed[key] = false;
    //     //     }
    //     // }
    //     this._pollNewGamepad();

    //     // special case for dpad on Linux, cannot test on Windows since my pad does not support XInput...
    //     // d-pad
    //     // console.log('pressed', typeof this.pad.buttons[12].pressed, "**");
    //     // console.log('poll gamepad', typeof this.pad.buttons[12].pressed, this.pad.buttons[12].pressed.toString());
    //     // for (var i = 0; i < this.pad.buttons.length; ++i) {
    //     //     console.log(i, this.pad.buttons[i].pressed.toString());
    //     // }

    //     if (this.pad.buttons[12].pressed && !this.latches[this.KEYS['UP']]) {
    //         this.keyPressed[this.KEYS['UP']] = true;
    //         this.keyPressed[this.KEYS['DOWN']] = false;
    //     } else if (this.pad.buttons[13].pressed && !this.latches[this.KEYS['DOWN']]) {
    //         this.latches[this.KEYS['UP']] = false;
    //         this.keyPressed[this.KEYS['DOWN']] = true;
    //         this.keyPressed[this.KEYS['UP']] = false;
    //     } else {
    //         this.latches[this.KEYS['UP']] = false;
    //         this.latches[this.KEYS['DOWN']] = false;
    //         this.keyPressed[this.KEYS['DOWN']] = false;
    //         this.keyPressed[this.KEYS['UP']] = false;
    //     }

    //     if (this.pad.buttons[15].pressed && !this.latches[this.KEYS['RIGHT']]) {
    //         this.keyPressed[this.KEYS['RIGHT']] = true;
    //         this.keyPressed[this.KEYS['LEFT']] = false;
    //     } else if (this.pad.buttons[14].pressed) {
    //         this.latches[this.KEYS['RIGHT']] = false;
    //         this.keyPressed[this.KEYS['LEFT']] = true;
    //         this.keyPressed[this.KEYS['RIGHT']] = false;
    //     } else {
    //         this.latches[this.KEYS['RIGHT']] = false;
    //         this.latches[this.KEYS['LEFT']] = false;
    //         this.keyPressed[this.KEYS['LEFT']] = false;
    //         this.keyPressed[this.KEYS['RIGHT']] = false;
    //     }

    //     if (this.pad.buttons[0].pressed && !this.latches[this.KEYS['SPACE']]) {
    //         this.keyPressed[this.KEYS['SPACE']] = true;
    //     } else if (!this.pad.buttons[0].pressed) {
    //         this.latches[this.KEYS['SPACE']] = false;
    //         this.keyPressed[this.KEYS['SPACE']] = false;
    //     }

    //     if (this.pad.buttons[1].pressed && !this.latches[this.KEYS['CTRL']]) {
    //         this.keyPressed[this.KEYS['CTRL']] = true;
    //     } else if (!this.pad.buttons[1].pressed) {
    //         this.latches[this.KEYS['CTRL']] = false;
    //         this.keyPressed[this.KEYS['CTRL']] = false;
    //     }
    //     // stick 1
    //     /*
    //     if (this.pad.axes[1] === -1) {
    //         this.keyPressed[this.KEYS['UP']] = true;
    //         this.keyPressed[this.KEYS['DOWN']] = false;
    //     } else if (this.pad.axes[1] === 1) {
    //         this.keyPressed[this.KEYS['DOWN']] = true;
    //         this.keyPressed[this.KEYS['UP']] = false;
    //     } else {
    //         this.keyPressed[this.KEYS['DOWN']] = false;
    //         this.keyPressed[this.KEYS['UP']] = false;
    //     }
    //     if (this.pad.axes[0] === 1) {
    //         this.keyPressed[this.KEYS['RIGHT']] = true;
    //         this.keyPressed[this.KEYS['LEFT']] = false;
    //     } else if (this.pad.axes[0] === -1) {
    //         this.keyPressed[this.KEYS['LEFT']] = true;
    //         this.keyPressed[this.KEYS['RIGHT']] = false;
    //     } else {
    //         this.keyPressed[this.KEYS['LEFT']] = false;
    //         this.keyPressed[this.KEYS['RIGHT']] = false;
    //     }
    //     */
    //     this.jPollInterval = requestAnimationFrame(this._pollGamepad.bind(this));
    // },
    // _getModifiers: function (/*event*/) {
    //     return {
    //         'ALT': true,
    //         'SHIFT': true,
    //         'CTRL': true,
    //         'META': true
    //     };
    // },
    // _initVirtualJoystick: function () {
    //     let dPadJoystick,
    //         fireJoystick;

    //     console.log('[InputManager] _initVirtualJoystick');

    //     // left joystick = view
    //     dPadJoystick = this.dPadJoystick = new VirtualJoystick({
    //         container: document.body,
    //         strokeStyle: 'cyan',
    //         limitStickTravel: true,
    //         mouseSupport: true,
    //         stickRadius: 60
    //     });

    //     dPadJoystick.addEventListener('touchStartValidation', function (event) {
    //         let touch = event.changedTouches[0];
    //         if (touch.pageX >= window.innerWidth / 2) {
    //             return false;
    //         }
    //         return true;
    //     });

    //     // right joystick = fire button
    //     fireJoystick = this.fireJoystick = new VirtualJoystick({
    //         container: document.body,
    //         strokeStyle: 'orange',
    //         limitStickTravel: true,
    //         mouseSupport: true,
    //         stickRadius: 0
    //     });

    //     fireJoystick.addEventListener('touchStartValidation', function (event) {
    //         let touch = event.changedTouches[0];
    //         if (touch.pageX < window.innerWidth / 2) {
    //             return false;
    //         }
    //         return true;
    //     });

    //     /* fire button */
    //     fireJoystick.addEventListener('touchStart', () => {
    //         if (this.inputMode === 'virtual_joystick') {
    //             this.keyPressed[this.KEYS['CTRL']] = true;
    //         }
    //     });

    //     fireJoystick.addEventListener('touchEnd', () => {
    //         if (this.inputMode === 'virtual_joystick') {
    //             this.keyPressed[this.KEYS['CTRL']] = false;
    //         }
    //     });
    // },
    // _clearJoystickPoll: function () {
    //     if (this.jPollInterval) {
    //         // clearInterval(this.jPollInterval);
    //         cancelAnimationFrame(this.jPollInterval);
    //         this.jPollInterval = 0;
    //     }
    // },
    // _pollJoystick: function () {
    //     let down = [],
    //         up = [],
    //         joystick = this.dPadJoystick;

    //     /* directions */
    //     if (Math.abs(joystick.deltaX()) >= 10) {
    //         if (joystick.left()) {
    //             down.push('LEFT');
    //             up.push('RIGHT');
    //         } else {
    //             down.push('RIGHT');
    //             up.push('LEFT');
    //         }
    //     } else {
    //         up.push('LEFT');
    //         up.push('RIGHT');
    //     }

    //     if (Math.abs(joystick.deltaY()) >= 10) {
    //         if (joystick.up()) {
    //             down.push('UP');
    //             up.push('DOWN');
    //         } else {
    //             down.push('DOWN');
    //             up.push('UP');
    //         }
    //     } else {
    //         up.push('UP');
    //         up.push('DOWN');
    //     }

    //     if (down.length) {
    //         down.forEach((key) => {
    //             this.keyPressed[this.KEYS[key]] = true;
    //         });
    //     }

    //     if (up.length) {
    //         up.forEach((key) => {
    //             this.keyPressed[this.KEYS[key]] = false;
    //         });
    //     }

    //     // TODO: what happens for up event ? should be set to up only when going from down to up and called here
    // },
    /**
     * Intalls golbal keyboard events for `keydown` / `keyup` events
     * @private
     */
    // _installKBEventHandlers: function () {
    //     // TODO: move me somewhere else!
    //     document.addEventListener('keydown', (event) => {

    //         if (this.inputMode !== 'keyboard' || this.playingEvents) {
    //             return;
    //         }

    //         switch (event.keyCode) {
    //             case 32:
    //             case 37:
    //             case 38:
    //             case 39:
    //             case 40:
    //                 event.preventDefault();
    //                 break;
    //         }

    //         if (event.keyCode && !this.latches[event.keyCode]) {
    //             this.keyPressed[event.keyCode] = true;
    //         }

    //         // console.log('keydown', event.keyCode, '<-', this.keyPressed[37], '->', this.keyPressed[39]);

    //         this.metas = this._getModifiers();

    //         if (this.enabled && this.keyCb[event.keyCode]) {
    //             this.keyCb[event.keyCode].down.forEach((callback) => { callback(String.fromCharCode(event.keyCode), event); });
    //         }
    //     });

    //     document.addEventListener('keyup', (event) => {
    //         if (this.inputMode !== 'keyboard' || this.playingEvents) {
    //             return;
    //         }

    //         if (event.keyCode) {
    //             this.keyPressed[event.keyCode] = false;
    //             this.latches[event.keyCode] = false;
    //         }c

    //         // console.log('keyup', event.keyCode, '<-', this.keyPressed[37], '->', this.keyPressed[39]);

    //         this.metas = this._getModifiers();

    //         if (this.enabled && this.keyCb[event.keyCode]) {
    //             this.keyCb[event.keyCode].up.forEach((callback) => { callback(String.fromCharCode(event.keyCode), event); });
    //         }
    //     });
    // },
    /**
     * Returns an object with the state of all keys
     */
    getAllKeysStatus():object;
    getKeyStatus(key:string,  latch:boolean):boolean;
    isKeyDown(key:string, latch?:boolean):boolean;
    /**
     * Install callback that gets called when a key is pressed/released
     *
     * @param {String} key space-separated list of keys to listen for
     * @param {String} event to listen for: can be `up` or `down`
     * @param {Function} callback the function to call
     */
    installKeyCallback(key:string, event:string, callback:() => void):void;
    removeKeyCallback(key:string, event:string, callback:() => void):void;
    clearEvents():void;
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

interface BehaviorOptions {

}

interface AnimOptions{
    numFrames: number,
    frameWidth: number,
    frameHeight: number,
    frameDuration: number
}
}