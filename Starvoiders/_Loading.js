let lastMillis_loading = 0;

function drawLoading(){

    for(let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].move();
    }

    noStroke();
    fill(style.darkBackdrop);
    rect(0,400,width, 100);

    fill(style.colourRed);
    textSize(style.fontLarge);
    textAlign(CENTER,CENTER)
    text("LOADING", width /2, height /2)

}
