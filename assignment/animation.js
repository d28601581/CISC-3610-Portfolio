"use strict";

let bubble = new Image();
bubble.src = 'talkbubble.png';

var Scene = {
    canvas: undefined,
    canvasContext: undefined,
    sprite: undefined
};

Scene.start = function() {
    // Get the canvas and it's context.

    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");

    // Seup the parrot to be displayed.
    Scene.sprite = number;
    Scene.textAlign = 'center';
    Scene.canvasContext.font = '40px serif';

    // Attach the image to be used for the sprite.
    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;

    // Wait till the parrot image is loaded before starting the animation.
    Scene.sprite.img.onload = function() {
        Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
        Scene.mainLoop();
    }
};

document.addEventListener('DOMContentLoaded', Scene.start);

Scene.clearCanvas = function() {
    Scene.canvasContext.fillStyle = "lightblue";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();

    // Animate at 2 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 / 24);
};

Scene.update = function() {
    // Set the canvas width to be that of the display Window. Which helps if you resize the window.
    Scene.sprite.offset = Scene.canvas.width / 2 - 180;

};

Scene.draw = function() {
    Scene.canvasContext.drawImage(bubble, 400, 0);
    Scene.canvasContext.fillStyle = "black";
    Scene.canvasContext.fillText('When I friend tells', 500, 100);
    Scene.canvasContext.fillText('me that he major in ', 460, 150);
    Scene.canvasContext.fillText('Physics but he believe', 430, 200);
    Scene.canvasContext.fillText('Earth is flat.', 440, 250);


    Scene.canvasContext.drawImage(Scene.sprite.img, Scene.sprite.frames[Scene.sprite.frame].frame.x, Scene.sprite.frames[Scene.sprite.frame].frame.y, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h, Scene.sprite.offset, 400, Scene.sprite.frames[Scene.sprite.frame].frame.w, Scene.sprite.frames[Scene.sprite.frame].frame.h);

    // Advance to the next frame.
    Scene.sprite.frame++;

    // At the end of the sprite sheet, start at the first frame.
    if (Scene.sprite.frame == Scene.sprite.frames.length)
        Scene.sprite.frame = 0;
};