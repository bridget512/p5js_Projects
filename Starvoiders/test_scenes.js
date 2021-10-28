


// Scenes
const LOADING = 0;
const MENU = 1;
const PLAY = 2;
let currentScreen = MENU;
let loadingMillis = 0
let counter = 0;

function setup() {
    createCanvas(900, 900);
    fill(255)
    textSize(40);
    textAlign(CENTER, CENTER);


} // setup()
  

function draw() {
    background(50,50,50);

    text(loadingMillis, 400,200)

    if(currentScreen == MENU){
        // IF ENTER pressed, THEN goto PLAY
        if(keyDown(13)){
            currentScreen = LOADING
        }
    }

    if(currentScreen == PLAY){

        // IF ESCAPE pressed, THEN goto MENU
        if(keyDown(27)){
            currentScreen = MENU
        }
    }

    print("millis: "+ millis())


    scene_menu();
    scene_play();
    scene_loading();
    drawSprites();
} // draw()


function scene_menu(){
    if(currentScreen == MENU){
        text("Menu", width/2, height/2);
    }
    
}

function scene_loading(){
    if(currentScreen == LOADING){
        text("Loading", width/2, height/2);

        
        counter++

        if(counter >= 50){
            currentScreen = PLAY;
            counter = 0
        }
        
    }
    
}


function scene_play(){
    if(currentScreen == PLAY){
        text("Playing", width/2, height/2);

    }

    
    

}