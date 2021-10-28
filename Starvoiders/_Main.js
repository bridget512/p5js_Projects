const CANVAS_X = 900;
const CANVAS_Y = CANVAS_X;

let playerScore = 0;
let savedScore = [];

// Player Ship
let ship;
let playerShip;
let texture_ship_01;
let shipVelocityX = 0;
let shipVelocityY = 0;

// Player Weapons
let lastMillis = 0
let lastMillisBlaster = 0;
let projectileBlaster = 0;
let projectileBlasterGroup;
let lastMillisRepeater = 0;
let projectileRepeater = 0;
let projectileRepeaterGroup;

// Enemy Weapons
let enemyProjectileRepeater = 0;
let enemyProjectileRepeaterGroup;

// Sound Effects
let soundEffect_laser_01;
let soundEffect_laser_02; 
let music_background;
let backgroundMusicVolume = 0.4;

// Scenes
const LOADING = 0;
const MENU_MAIN = 1;
const PLAY = 2;
const SCORE = 3;
let currentScreen = MENU_MAIN;
let loadingCounter = 0;

// Game State
let gameIsOver = false;
let gameTimerSetting = 15;
let gameTimer = 15;
let resetCounter = 1; 
let resetCounterLast = 0;
// Toggles
let showFramerate = true;
let showAllColliders = false;

function preload(){

    texture_ship_01 = loadImage("assets/ship_A02.png");
    texture_ship_B01 = loadImage("assets/ship_B01.png");
    background_stars_gradOverlay = loadImage("assets/overlay_gradient.png");
    music_background = loadSound('/assets/sounds/Sci_Fi_Industries_-_01_-_Mount_Rey.mp3');
    soundEffect_tink = loadSound('/assets/sounds/tink.mp3');
    soundEffect_point_01 = loadSound('/assets/sounds/point.mp3');
    soundEffect_wilhelm = loadSound('/assets/sounds/wilhelm.mp3');
    
} // preload()

function setup() {
    createCanvas(CANVAS_X, CANVAS_Y);
    angleMode(DEGREES);
    styling();
    frameRate(60);
    //useQuadTree(true); // Helps with performance??
    
    music_background.setVolume(backgroundMusicVolume);
    //music_background.play();

    drawBackground();

    enemiesGroup = new Group();
    projectileBlasterGroup = new Group();
    projectileRepeaterGroup = new Group();
    enemyProjectileRepeaterGroup = new Group();
    starSpawn();
    enemiesSpawn();
    playerShipDraw();
    gameIsOver = false;
    drawSprites();

} // setup()

function draw() {
    background(37,38,70,255);  
    scene_menu();
    scene_playing();
    scene_loading();
    scene_score();
} // draw()

function currentGameTimer(){
    gameTimer;
    
    if(frameCount % 60 == 0 && gameTimer > 0) { 
        gameTimer --;
    }
    if(gameTimer == 0){
        gameIsOver = true;
        currentScreen = SCORE;
    }
}

function sceneReset(){
    savedScore.push(playerScore);
    gameIsOver = false;
    gameTimer = gameTimerSetting;
    playerScore = 0;
    enemiesKilled = 0;
}


function scene_playing(){
    if(currentScreen == PLAY){
        music_background.setVolume(backgroundMusicVolume - 0.3);

        // R = Reset
        if(keyDown(82)){
            sceneReset();
        }

        // Esc = Main Menu
        if(keyDown(27)){
            sceneReset();
            currentScreen = MENU_MAIN;
        }

        starAnimate();
        playerWeapons();
        playerControl();
        enemiesDraw();
        drawSprites(); 
        
        currentGameTimer()
        drawHud();

        if(showFramerate){frameRateDisplay();}
    }
}


function scene_menu(){
    if(currentScreen == MENU_MAIN ){   
        starAnimate();
        drawMenuMain();
        
        // Space Down
        if(keyDown(32)){
            currentScreen = LOADING;
        }
        
        if(showFramerate){frameRateDisplay();}    
    } 
}


function scene_loading(){
    if(currentScreen == LOADING){ 
        
        starAnimate();
        drawLoading();

        loadingCounter++;

        if(loadingCounter >= 50){
            currentScreen = PLAY;
            loadingCounter = 0;
        }
        
        if(showFramerate){frameRateDisplay();}
    }
}

function scene_score(){
    if(currentScreen == SCORE){
        if(gameIsOver == true){
            endgame();
            // R = Reset
            if(keyDown(82)){
                sceneReset();
                currentScreen = LOADING;
            }

            // Esc = Main Menu
            if(keyDown(27)){
                sceneReset();
                currentScreen = MENU_MAIN;
            }

       
        }
    }
}


/*
    Requirements:
        Arrays: stars[], enemies[], savedScore[]
        Interactivity: 4 buttons plus navigation
        Images: Background Gradient
        Sprites: Enemy, Player, Player+Enemy projectiles, Stars
        Video: none :/
        Sound: 2, Sound on enemy Killed, Background Music, 
        GUI Input: none :/
        Data: none :/
        Stability: 

    Creativity:
        Multiple enemies-ish: enemies spawn with a random speed rate
        Dynamic Background: scrolling stars randomly spawned
        Modes of Fire: Blaster(single shot), Repeater(Fast auto-fire)
        UI and fonts: custom font DS-Digital
        Score and Sound: sound played on enemy death
        Enemy Health: Yes, death respawns the enemy.
        Difficulty: Enemy ships increase speed if points go over a set number

        Other: Debug, FPS and Sprites on Screen indicator
        Other: Count down timer
*/



/*

Features
    Game type: 2D Spam Fest Space Shooter
    Aim: Player is points driven, not life dependant

    Dynamic star background. Stars spawn with random fill values at random x positions
    Debug: FPS display, On Screen Sprites counter

    All projectiles are removed on impact

    Enemies
        Enemies have health
        Enemy speed changes when player score is high (difficulty increase)
        Enemies fire at the player when the player is within enemy range (player strategy)
        

    Player
        Repeater Weapon is a high speed auto-fire weapon
        Blaster Weapon requires a delay before refire, but gives high points

    Score
        Player gains points for shooting enemies
        Weapon types do difference damage and give different points amounts
        Player loses points if enemies get past the player
        Player loses points if enemies shoot the player

    Sound
        Background music
        Ship weapon sounds
    
    Scoring
        Previous scores are stored in an array





Sprites
    Ships (Max Parata)
    https://maxparata.itch.io/voxel-spaceships

    3D sprites were imported to blender and rendered with an alpha channel.

    Sound
        ZapSplat
        https://www.zapsplat.com/sound-effect-category/game-sounds/page/2/

        FreeFX.co.uk
        https://freesfx.co.uk/Category/Lasers-Weapons/340



*/