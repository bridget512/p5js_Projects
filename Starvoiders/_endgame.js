function endgame(){
    
        fill(style.darkBackdrop);
        noStroke()
        rect(0,80,width,150);
        rect(0,270,width,350);
        rect(0,665,width,120);

        fill(style.colourRed);
        textSize(style.fontMedium);
        textAlign(CENTER,CENTER)

        fill(style.colourRed);
        textSize(style.fontSmall);
        text("Intruders Killed", width/2, height/2-140);
        fill(style.colourGreen);
        textSize(style.fontMedium);
        text(enemiesKilled, width/2, height/2-100);

        fill(style.colourRed);
        textSize(style.fontSmall);
        text("Game Score", width/2, height/2-25);
        fill(style.colourGreen);
        textSize(style.fontMedium);
        text(round(playerScore), width/2, height/2+15);

        if(max(savedScore) <= 0){
            fill(style.colourRed);
            textSize(style.fontSmall);
            text("Previous Best Score", width/2, height/2+90);
            fill(style.colourGreen);
            textSize(style.fontMedium);
            text("0", width/2, height/2+130);
        }
        else{
            fill(style.colourRed);
            textSize(style.fontSmall);
            text("Previous Best Score", width/2, height/2+90);
            fill(style.colourGreen);
            textSize(style.fontMedium);
            text(round(max(savedScore)), width/2, height/2+130);
        }
        
        fill(style.colourRed);
        textSize(style.fontLarge);
        if(playerScore > max(savedScore)){
            text("New Best Score!!!", width/2, 155);
        }
        else{
            text("Try Harder, Voider!", width/2, 155);
        }


        fill(style.colourGreen);
        textSize(style.fontSmall);
        text("R = restart",  width/2, height/2+250);
        text("Esc = main menu", width/2, height/2+300);
}