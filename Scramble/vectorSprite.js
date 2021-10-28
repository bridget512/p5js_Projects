


function setup() { 
    createCanvas(400, 400);
    angleMode(DEGREES)

} 

function draw() { 
    background(35);
    
    enemies();
}

function enemies(){

    // let pShipX = [-20,0,20,0,-20,-18.5,-40,-40,0,40,40,18.5,-18.5]
    // let pShipY = [0,-100,0,-10,0,-8,-10,-25,-35,-25,-10,-8,-8]

    let eShipX = [-20,0,20,0,-20,-18.5,,-50,0,50,18.5,-18.5]
    let eShipY = [0,-100,0,-10,0,-8,,-15,-35,-15,-8,-8]

    vPosX = width/2
    vPosY = height - 100
    vScale = 0.4

    translate(vPosX, vPosY)
    fill(0,0)
    stroke(220,240,255)
    strokeWeight(2)

    beginShape()
    for(let i = 0; i < eShipX.length; i++){
        vertex(eShipX[i] * vScale, eShipY[i] * vScale) 
  





        // Fuel
        // vertex(-6,30)
        // vertex(0,20)
        // vertex(-10,20)
        // vertex(-10,0)
        // vertex(10,0)
        // vertex(10,20)
        // vertex(0,20)
        // vertex(6,30)
        
        // Crate - points
        // vertex(0,20)
        // vertex(-10,20)
        // vertex(-10,0)
        // vertex(10,0)
        // vertex(10,20)
        // vertex(0,20)
        // vertex(-10, 20)
        // vertex(10,0)
        // vertex(-10,0)
        // vertex(10,20)




        

    }    
    endShape()

}


class Enemy_Fighter{

    constructor(){

    }

    display(){


    }


}









    // vertex(vPosX + -20 * vScale, vPosY + 0 * vScale)
    // vertex(vPosX + 0 * vScale, vPosY + -100 * vScale)
    // vertex(vPosX + 20 * vScale, vPosY + 0 * vScale)
    // vertex(vPosX + 0 * vScale, vPosY + -10 * vScale)
    // vertex(vPosX + -20 * vScale, vPosY + 0 * vScale)
    // vertex(vPosX + -18.5 * vScale,vPosY + -8 * vScale)

    // vertex(vPosX + -40 * vScale, vPosY + -10 * vScale)
    // vertex(vPosX + -40 * vScale, vPosY + -25 * vScale)
    // vertex(vPosX + 0 * vScale, vPosY + -35 * vScale)

    // vertex(vPosX + 40 * vScale, vPosY + -25 * vScale)
    // vertex(vPosX + 40 * vScale, vPosY + -10 * vScale)
    // vertex(vPosX + 18.5 * vScale, vPosY + -8 * vScale)
    // vertex(vPosX + -18.5 * vScale, vPosY + -8 * vScale)