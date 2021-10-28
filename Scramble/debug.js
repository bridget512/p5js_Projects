// Frame Rate Display
let lastMillis_frameRate = 0;
let frameRateCurrent = 0;
let frameRateUpdateInterval = 200;

function debug_framerate(){
    if(millis() - lastMillis_frameRate > frameRateUpdateInterval ){
        frameRateCurrent = frameRate();
        lastMillis_frameRate = millis();
    }
    stroke(0);
    fill(255);
    textSize(16);
    textAlign(RIGHT);
    text(round(frameRateCurrent),camera.position.x + width / 2 - 50, 40);

    textAlign(LEFT); 
    textSize(16);
    text("Sprites: " + allSprites.length, camera.position.x - width / 2 + 50,40)
}

function debug_collisionCursor(){
    stroke(255)
    mx = mouseX + player.position.x / 2
    my =  mouseY + player.position.y
    text(round(dist(player.position.x, player.position.y, mouseX, mouseY)), mouseX, mouseY+35)

    //line(player.position.x, player.position.y, (camera.position.x - W/2) + mouseX /2, camera.position.y - H/2)
    //Check if mouse can collide ground poly

    mhit = collidePointPoly(mx, my, poly);
    if(mhit){
        fill(255,0,0)
        circle(mx, my, 20)
    }
    else{
        fill(255)
        circle(mx, my, 20)
    }
}

function debug_cameraPan(){
        //Debug - < > / = pan camera
        for(let i = 0; i < poly.length; i++){
       

            if(keyDown(191)){
                worldScrollRate -= worldScrollRate
            }
    
            if(keyDown(190)){
                worldScrollRate = 6
            }
            if(keyDown(188)){
                worldScrollRate = -6
            }
    
             
        }
}