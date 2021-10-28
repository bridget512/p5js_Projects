function playerWeapons(){ 

    // Blaster = X
    if(keyDown(88)){

        if(millis() - lastMillisBlaster > 20 ){
            projectileBlaster = createSprite(shipXpos,shipY-30,5,15);
            projectileBlaster.setVelocity(0, -8);     
            projectileBlaster.shapeColor = color(255,150,0);
            projectileBlaster.addToGroup(projectileBlasterGroup);
        } 
        lastMillisBlaster = millis(); 
    }

    //remove out of bounds group objects
    for(let i = 0; i < projectileBlasterGroup.length; i++){

        if(projectileBlasterGroup[i].position.y < 0){
            projectileBlasterGroup[i].remove();
         }
         
    }

    // Repeater = Z
    if(keyDown(90)){
        if(millis() - lastMillisRepeater > 10 ){
            projectileRepeater = createSprite(shipXpos,shipY-30,3,5,0.1);
            projectileRepeater.setVelocity(0, -20);
            projectileRepeater.shapeColor = color(255,0,0);
            projectileRepeater.addToGroup(projectileRepeaterGroup);
        }
        lastMillisRepeater = millis(); 
    }

    //remove out of bounds group objects
    for(let i = 0; i < projectileRepeaterGroup.length; i++){

        if(projectileRepeaterGroup[i].position.y < 0){
            projectileRepeaterGroup[i].remove();
         }
    }

  }// playerWeapons()