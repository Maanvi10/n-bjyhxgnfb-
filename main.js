var canvas = new fabric.Canvas('game');

blockwidth = 30;
blockheight = 30;

personx = 10;
persony = 10;

var persono = "";
var blocks = "";

function person_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        persono = Img;
        persono.scaleToWidth(150);
        persono.scaleToHeight(140);
        persono.set({
            top: persony,
            left: personx
        });
        canvas.add(persono);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blocks = Img;
        blocks.scaleToWidth(blockwidth);
        blocks.scaleToHeight(blockheight);
        blocks.set({
            top: persony,
            left: personx
        });
        canvas.add(blocks);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80'); {
        console.log("p and shift pressed together");
        blockwidth = blockwidth + 10;
        blockheight = blockheight + 10;
        document.getElementById("width").innerHTML = blockwidth;
        document.getElementById("height").innerHTML = blockheight;
    }

    if (e.shiftKey == true && keyPressed == '77'); {
        console.log("m and shift pressed together");
        blockwidth = blockwidth - 10;
        blockheight = blockheight - 10;
        document.getElementById("width").innerHTML = blockwidth;
        document.getElementById("height").innerHTML = blockheight;
    }
    if (keyPressed == '38') {
         
      up();
        console.log("up");
    }

    if (keyPressed == '40') {

        down();
        console.log("down");
    }

    if (keyPressed == '37') {

        left();
        console.log("left ");
    }

    if (keyPressed == '39') {

        right();
        console.log("right");
    }

    if (keyPressed == '87') {

        new_image('wall.jpg');
        console.log("w");
    }

    if (keyPressed == '71') {

        new_image('ground.jpg');
        console.log("g");
    }

    if (keyPressed == '76') {

        new_image('light_green.jpg');
        console.log("l");
    }

    if (keyPressed == '84') {

        new_image('trunk.jpg');
        console.log("t");
    }
    if (keyPressed == '82') {

        new_image('roof.jpg');
        console.log("r");
    }
    if (keyPressed == '89') {

        new_image('yellow_wall.jpg');
        console.log("y");
    }
    if (keyPressed == '68') {

        new_image('dark_green.jpg');
        console.log("d");
    }
    if (keyPressed == '67') {

        new_image('cloud.jpg');
        console.log("c");
    }
    if (keyPressed == '85') {

        new_image('different.jpg');
        console.log("u");
    }

}

function left() {
    if (personx > 0) {
        personx = personx - blockwidth;
        console.log("blockwidth = " + blockwidth);
        console.log("When left arrow is pressed, X = " + personx + ", X =" + persony);
        canvas.remove(persono);
        person_update();
    }
}

function right() {
    if (personx <= 850) {
        personx = personx + blockwidth;
        console.log("blockwidth = " + blockwidth);
        console.log("When right arrow is pressed, X = " + personx + ", X =" + persony);
        canvas.remove(persono);
        person_update();
    }
}

function up() {
    if (persony >= 0) {
        persony = persony - blockheight;
        console.log("blockheight = " + blockheight);
        console.log("When up arrow is pressed, X = " + personx + ", X =" + persony);
        canvas.remove(persono);
        person_update();
    }
}

function down() {
    if (persony <= 360) {
        persony = persony + blockheight;
        console.log("blockheight = " + blockheight);
        console.log("When down arrow is pressed, X = " + personx + ", X =" + persony);
        canvas.remove(persono);
        person_update();
    }
}