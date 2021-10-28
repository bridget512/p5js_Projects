function playerControls(){

    let playerMovementRate = 4;

    if(keyDown(UP_ARROW)){
        player.position.y -= playerMovementRate
    }

    if(keyDown(DOWN_ARROW)){
        player.position.y += playerMovementRate
    }

    if(keyDown(RIGHT_ARROW)){
        player.position.x += worldScrollRate + playerMovementRate


    }
    if(keyDown(LEFT_ARROW)){
        player.position.x -= playerMovementRate

    }

    player.position.x += worldScrollRate
    camera.position.x += worldScrollRate

    if(keyDown(32)){
        if(millis() - lastFC > 15){
            playerWeapon01 = createSprite(player.position.x, player.position.y, 5,5)
            playerWeapon01.shapeColor  = color(255,180,250)
            playerWeapon01.setVelocity(0.5,4)
            playerWeapon01.addToGroup(playerWeapon01Group)
        }
        lastFC = millis()
    }

    for(let i = 0; i < playerWeapon01Group.length; i++){

        projectileHitGround = collidePointPoly(playerWeapon01Group[i].position.x, playerWeapon01Group[i].position.y, poly)
        if(projectileHitGround){
            print("projectile struck ground")
            playerWeapon01Group[i].remove()
        }

    

    }

    // Screen bounds - Stop player from flying off screen
    
    if(player.position.x <= camera.position.x - (W/2 + 50)){
        player.position.x = camera.position.x - (W/2 + 50)
    }
   
    if(player.position.x >= camera.position.x + (W/2 + 50)){
        player.position.x = camera.position.x + (W/2 + 50)
    }


    //Kill Script
    if(keyDown(27)){
        noLoop()
    }

}