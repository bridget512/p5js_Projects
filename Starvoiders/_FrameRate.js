// Frame Rate Display
let lastMillis_frameRate = 0;
let frameRateCurrent = 0;
let frameRateUpdateInterval = 200;

function frameRateDisplay(){
    if(millis() - lastMillis_frameRate > frameRateUpdateInterval ){
        frameRateCurrent = frameRate();
        lastMillis_frameRate = millis();
    }
    fill(style.colourGreen);
    textSize(style.fontMedium);
    textAlign(RIGHT);
    text(round(frameRateCurrent),870, 40);

    textAlign(LEFT); 
    textSize(style.fontSmall);
    text("Sprites: " + allSprites.length, 30,30)
}