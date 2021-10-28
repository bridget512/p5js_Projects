function drawMenuMain(){

    textAlign(CENTER,CENTER);

    noStroke();
    fill(style.darkBackdrop);
    rect(0,80,width, 150);

    fill(style.colourRed);
    textSize(style.fontLarge + 20);
    text("STARVOIDERS", width /2, 155)


    fill(style.darkBackdrop);
    rect(0,310,width, 280);

    let storyText = "As the alien threat continues to ravage \r\n    our off-world resources, elite void-fighter units\r\n    are sent into the void to eliminate the intruders that serve\r\n     to harvest our planet.\r\n    \r\n    Good Luck, voider"
    fill(style.colourRed);
    textSize(style.fontSmall);
    text(storyText, width /2, 450)


    fill(style.darkBackdrop);
    rect(0,720,width, 60);

    fill(style.colourRed);
    textSize(style.fontMedium);

    text("Space", width /2, 750)

    fill(style.colourGreen);
    textSize(style.fontSmall);
    text("Press", width /2, 700)
    text("To Begin", width /2, 800)

    textSize(style.fontSmall-10);
    textAlign(LEFT)
    

    fill(style.colourRed);
    text("X = Blaster (Single Shot)", 20, height - 75) 
    text("Z = Repeater (Auto-Fire)", 20, height-50)
    text("L/R Arrows = Move L/R", 20, height - 25)
}