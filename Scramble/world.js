function worldGenerate(){

    
    for(let i = 0; i <worldLength; i++){
        worldWidths.push(i * 50)
    }

    for(let i = 0; i <worldLength/2; i++){
        
        let low = random(50,100)
        let high = random(0,280)

        //Flatten some hill tops
        if(low <= high){
            low = high
            print('this many')
        }
        
        worldHeights.push(H - low, H - high)
        
    }

    for(let i = 0; i < worldWidths.length; i++){
            poly[i] = createVector(worldWidths[i], worldHeights[i])        
    }

    //First and Last vectors must be at world base level else clipping will occur
    //Plus padding
    poly[0].x = -100
    poly[0].y = H
    poly[1].x = poly[0].x

    poly[poly.length-2].x = poly[poly.length-2].x + 100
    poly[poly.length-1].x = poly[poly.length-2].x 
    poly[poly.length-1].y = H 

}

function worldDraw(){
    stroke(220,240,255)
    strokeWeight(3)
    fill(0,30)

    beginShape()
    for(const {x,y} of poly){
        vertex(x, y)
    }
    endShape()



    //Check if PlayerShip has collided with ground poly
    boom = collidePointPoly(player.position.x, player.position.y, poly);

    //IF player hits ground, push player up
    if(boom){
        player.position.y -= worldScrollRate * 2
    }


    

    // // Draw circles on begining/end of every line segment
    // for(let i = 0; i < worldLength; i++){
    //     //line(poly[i].x, poly[i].y, poly[i].x,poly[i].y +100)
    //     circle(poly[i].x, poly[i].y,8)
    // }
}

let vPosX = 0
let vPosY = 0