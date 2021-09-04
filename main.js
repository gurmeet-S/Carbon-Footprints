player_x =10;
player_y =10;

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        player_x = player_x - 1;
    }
    if(keyPressed == '40'){
        player_x = player_x + 1;
    }
    if(keyPressed == '37'){
        player_y = player_y - 1;
    }
    if(keyPressed == '39'){
        player_y = player_y + 1;
    }
    image(img, player_x, player_y, 40, 70);
}