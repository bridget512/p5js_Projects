function drawHud(){

    if(!gameIsOver){
        fill(style.colourRed);
        textAlign(LEFT);
        textSize(style.fontSmall);
        text("Time",30,height * 0.93);
        textSize(style.fontMedium);
        text(gameTimer, 30,height * 0.97);

        fill(style.colourRed);
        textAlign(RIGHT);
        textSize(style.fontSmall);
        text("Score",width - 30,height * 0.93);
        textSize(style.fontMedium);
        text(round(playerScore), width - 30,height *0.97);
    }

}// drawHud()