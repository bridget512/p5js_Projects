let enemies = [];
let enemiesOnScreen = 10;
let enemiesGroup;
let enemiesKilled = 0;
let lastMillisEnemyRepeater = 0;

function enemiesDraw(){
    for(let i = 0; i < enemies.length; i++){
        if(gameIsOver == true){
            print("OVER")
        }
        enemies[i].move();
        enemies[i].onCollision();
        enemies[i].attack();

    }
}// enemiesDraw()


function enemiesSpawn(){
    for(let i = 0; i < enemiesOnScreen; i++){
        let x = random(50, width-50);
        let y = 40;
        enemies[i] = new Enemy(x,y);
    }
}// enemiesSpawn()


class Enemy{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.health = 100;
        this.enemy = createSprite(this.x,this.y);
        this.enemy.addImage(texture_ship_B01);
        this.enemy.setCollider("rectangle",0,0,180,100);
        this.enemy.scale = 0.3;
        this.enemy.rotation = 180;
        this.moveSpeed = random(1, 2.5);
        this.moveSpeedCopy = random(1, 2.5);
        if(showAllColliders == true){this.enemy.debug = true}
        this.enemy.addToGroup(enemiesGroup)
        
    }// constructor()

    move(){   

        this.enemy.position.y += this.moveSpeed;

        if(this.enemy.position.y > height + 50){
            this.enemy.position.y = 0;
            this.enemy.position.x = random(50, width-50)
        }
        //print(this.moveSpeed)
        if(playerScore >= 500){
            this.moveSpeed += random(0.001, 0.005)
            if(this.moveSpeed >= 4.5){
                this.moveSpeed = 4.5;
            }
        }
        else{
            this.moveSpeed = this.moveSpeedCopy;
        }


    }// move()zxxx

    onCollision(){

        if(this.enemy.position.y >= height + 20){
            // Only remove points while game is playing
            if(gameIsOver == false){
                playerScore -= 1;
                
            }
            else{
                playerScore = playerScore
            }
        }

        // Damage taken when enemy overlaps player (more annoying than fun)
        // if(this.enemy.overlap(ship)){
        //     playerScore -= 1;
        //     this.enemy.position.x += 10;
        // }

        // Enemy damage taken by player weapon
        if(this.enemy.overlap(projectileRepeaterGroup)){
            this.health -= 5;
            if(gameIsOver == false){
                playerScore += 1;
            }
            else{
                playerScore = playerScore
            }

            fill(style.colourRed);
            textSize(style.fontLarge);

        }
        else{
            textAlign(CENTER, CENTER);

            fill(style.colourBlue);
            textSize(style.fontSmall-5);
            text(this.health, this.enemy.position.x, this.enemy.position.y-50);
        }
        // Enemy damage taken by player weapon
        if(this.enemy.overlap(projectileBlasterGroup)){
            this.health -= 30;
            if(gameIsOver == false){
                playerScore += 5;
            }
            else{
                playerScore = playerScore
            }
        }

        // Move Enemy on "death"
        if(this.health <= 0){
            //this.enemy.remove();
            this.enemy.position.y = -100;
            this.enemy.position.x = random(width);
            this.health = 100;
            this.enemy.position.y = this.moveSpeed;
            soundEffect_point_01.setVolume(0.2);
            soundEffect_point_01.play(); 

            if(enemiesKilled >= 40){
                soundEffect_wilhelm.setVolume(0.2);
                soundEffect_point_01.setVolume(0);
                soundEffect_wilhelm.play();
            }

            if(gameIsOver == false){
                enemiesKilled += 1;
            }
            else{
                enemiesKilled = enemiesKilled;
            }
        }



        //  IF PLAYER shot, remove points
        if(enemyProjectileRepeaterGroup.overlap(ship)){
           // this.health -= 15;

            if(gameIsOver == false){
                playerScore -= 0.1;
                soundEffect_tink.setVolume(0.2);
                soundEffect_tink.play();
            }
            else{
                playerScore = playerScore
            }
        }

    }// onCollision()

    attack(){
        let playerShipLoc = this.enemy.position.x - shipX 

        if(playerShipLoc >= -100 && playerShipLoc <= 100){
           
            if(millis() - lastMillisEnemyRepeater > 15 ){
               
                enemyProjectileRepeater = createSprite(this.enemy.position.x,this.enemy.position.y + 30,3,5);
                enemyProjectileRepeater.setVelocity(0, 10);
                enemyProjectileRepeater.shapeColor = color(style.colourGreen);
                enemyProjectileRepeater.addToGroup(enemyProjectileRepeaterGroup);
            }
            lastMillisEnemyRepeater = millis(); 
        }

        // Remove off screen projectile sprites
        for(let i = 0; i < enemyProjectileRepeaterGroup.length; i++){
            //remove out of bounds group objects
            if(enemyProjectileRepeaterGroup[i].position.y > height){
                enemyProjectileRepeaterGroup[i].remove();
            }
        }

        // For some reason I couldn't put both of the if statements in the same loop?!?!?!
        for(let i = 0; i < enemyProjectileRepeaterGroup.length; i++){
            // If enemy projectile hits player ship, remove that projectile
            if(enemyProjectileRepeaterGroup[i].collide(ship)){
                enemyProjectileRepeaterGroup[i].remove();
            }
    
        }

        // IF player projectile hit enemy, remove projectile
        for(let i = 0; i < projectileRepeaterGroup.length; i++){
            if(projectileRepeaterGroup[i].collide(this.enemy)){
                projectileRepeaterGroup[i].remove();
            }
        }
        // IF player projectile hit enemy, remove projectile
        for(let i = 0; i < projectileBlasterGroup.length; i++){
            if(projectileBlasterGroup[i].collide(this.enemy)){
                projectileBlasterGroup[i].remove();
            }
        }

    }// attack()

}// class Enemy()