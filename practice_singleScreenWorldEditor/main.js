

const RES = {x: 600, y: 600}
let jump;
let previousMillis = 0;


function preload(){
    tex_grass = loadImage("img/grass.png")
} 

function setup(){
    createCanvas(RES.x, RES.y);
    angleMode(DEGREES);

    player = new Player();
    player.setup(100, 400, 30, 60, 'blue');

    tex_grass.resize(gridSize, gridSize);

    worldTiles = new Group();
    

    drawWorld();
    
} // setup()

function draw(){
    background(40);
    worldSprite.draw();

    player.sprite.collide(ground, onGround);
    player.sprite.collide(worldTiles, onGround);
   


    player.sprite.addSpeed(0.6, 90); // Gravity
    player.movement();

    //  print(worldTiles)
    // print(worldSprite)


    drawSprites();

} // draw()

