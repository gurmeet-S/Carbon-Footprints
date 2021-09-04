var canvas = new fabric.Canvas('MyCanvas');

block_image_width = 100;
block_image_height = 100;
score = 0;

player_x =10;
player_y =10;

p_image_x =50;
p_image_y =500;

var player_object = "";
var plastic_image = "";

function player_update () {
    fabric.Image.fromURL("plastic.png", function(_Img){
        plastic_image = _Img;
        plastic_image.scaleToWidth(100);
        plastic_image.scaleToHeight(70);
        plastic_image.set({
        top:p_image_y,
        left:p_image_x,
        });
        canvas.add(plastic_image);
    });
    fabric.Image.fromURL("side-pose.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x,
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object = Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x,
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '84'){
        new_image('tree.png');
        console.log("Tree Planted");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        score = score + 1;
        document.getElementById("score").innerHTML = score;
    }
    if(e.shiftKey == true && keyPressed == '83'){
        console.log("s and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '13'){
        enter();
        console.log("Enter Room");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Up arrow key is pressed , X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 500){
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When Down arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Left arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When Right arrow key is pressed , X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function enter(){
    window.location = "room.html";
}