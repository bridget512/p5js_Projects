
let enemies = [];
let enemiesOnScreen = 5;


function preload(){
    texture_ship_B01 = loadImage("assets/ship_B01.png");
    texture_ship_01 = loadImage("assets/ship_A02.png");
}// preload()


function setup() {
    createCanvas(900, 900);
    enemiesSpawn();
    playerShipDraw();
    styling();
} // setup()


function draw() {
    background(17,18,50);

    for(let i = 0; i < enemies.length; i++){
        enemies[i].show();
        enemies[i].move();
    }

    if(keyDown(UP_ARROW)){
        noLoop();
    }
    playerControl();
    hud();
    playerWeapons();
    print(enemies);
    drawSprites();
} // draw()


function enemiesSpawn(){
    for(let i = 0; i < enemiesOnScreen; i++){
       
        let x = random(i + width);
        let y = 40;
        enemies[i] = new Enemy(x,y);
    }
}


class Enemy{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.health = 10

        this.enemy = createSprite(this.x,this.y);
        this.enemy.addImage(texture_ship_B01);
        this.enemy.scale = 0.3;
        this.enemy.rotation = 180;
        this.rate = random(1, 3);
        this.fireRate = random(1,255)
    }

    move(){   
        this.enemy.position.y += this.rate;
    }

    update(){
        this.move()
    }

    show(){
        

        


        //circle(this.x,this.y, this.s); 
    }

}// class Enemy()




/*

Game Mechanic - enemyAggressiveness
- Based on kills over time
- Based on player accuracy (helps noobies, punishes spammers)

- Increases player attraction following behaviour by enemies
- Increases points modifier

- More agressive == 
    -   Faster to get close to player, 
    -   Shooting likelyhood increases
    -   More likely to stop to attack player
    -   Less likely to flee



*/