function playerShipDraw(){
  shipX = CANVAS_X / 2;
  shipY = CANVAS_Y * 0.75;
  ship = createSprite(shipX, shipY);
  ship.addImage(texture_ship_01);
  ship.scale = 0.25;
  ship.setCollider("rectangle",0,0,150,200);
  if(showAllColliders == true){ship.debug = true}

  playerShip = {
      topSpeed: 9
  };

}// playerShipDraw()


function playerControl(){
    shipXpos = shipX += shipVelocityX;
  
    // ============================================= Left Arrow
  if(keyDown(LEFT_ARROW)){

    shipVelocityX -= playerShip.topSpeed

    // Stop ship velocity at topSpeed
    if(shipVelocityX < +playerShip.topSpeed){
         shipVelocityX = -playerShip.topSpeed
    }

    // Stop ship at edge of screen
    if(shipXpos <= 30){
        shipVelocityX = 0
    }
    
  }
  // Stop ship movement if no key pressed
  else{
        shipVelocityX = 0
  }


// ============================================= Right Arrow
  if(keyDown(RIGHT_ARROW)){

    shipVelocityX += playerShip.topSpeed

    // Stop ship velocity at topSpeed
    if(shipVelocityX > -playerShip.topSpeed){
        shipVelocityX = +playerShip.topSpeed
    }

    // Stop ship at edge of screen
    if(shipXpos >= width - 30){
        shipVelocityX = 0
    }
  }
 
// ============================================= Apply Velocity
    ship.setVelocity(shipVelocityX, shipVelocityY);
}// playerControl()