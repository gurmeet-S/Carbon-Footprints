window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '79'){
        console.log("Lights Off");
        block_image_height = block_image_height + 10;
        score = score + 1;
        document.getElementById("score").innerHTML = score;
    }
}