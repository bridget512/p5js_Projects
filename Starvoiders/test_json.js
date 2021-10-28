
let scoreFile = {};

function preload(){


}// preload()


function setup() {
    createCanvas(900, 900);

    scoreFile = loadJSON("leaderboard.json");


} // setup()
  

function draw() {
    background(17,18,50);
    fill(255);
    textSize(30);
    textAlign(CENTER);

    //print(scoreFile.playerScore)

    for(let i = 0; i < scoreFile.playerScore.length; i++){
        text(scoreFile.playerScore[i].name + "             " +scoreFile.playerScore[i].points, 450,50*i+450);
    }

     
    drawSprites();
} // draw()



