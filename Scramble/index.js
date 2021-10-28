let playerWeapon01
let playerWeapon01Group
let enemy
let lastFC

// World Arrays
let worldWidths = []
let worldHeights = []
let poly = []

let worldLength = 500
let worldScrollRate = 1

let bouncyBall

let bullets = []

function setup(){
    createCanvas(windowWidth,windowHeight*0.92)
    angleMode(DEGREES)
    W = width
    H = height

    let playerX = W / 2
    let playerY = H * 0.25

    
    player = createSprite(playerX, playerY, 25, 10)
    player.shapeColor = color(180, 250, 255)
    //enemy = createSprite(W, H - 100, 25, 25)
    playerWeapon01Group = new Group()

    worldGenerate()



    // anEmitter = new DistRays();

}// setup()

function draw(){
    background(40)

    worldDraw()

    enemyMove()
    enemies()
    
    playerControls()


    debug_framerate()
    debug_collisionCursor()
    debug_cameraPan();
    //  vector Dist
    strokeWeight(1)    
    v1 = createVector(player.position.x, player.position.y)
  
 
    fill(0,0)
    camera.zoom = 1
    rect(camera.position.x - W/2 - 10, camera.position.y - H/2 -10, 10 + W, 10 + H);
    drawSprites()
}// draw()

let mover = 0;
function enemyMove(){
    fill(0,150,255)
    noStroke();
    cometV = createVector(camera.position.x,camera.position.y)
    comet = rect(cometV.x + camera.position.x + mover , cometV.y + camera.position.y, 45,10)
    mover += 3
    

    if(cometV.x > 1000){
        cometV.x = player.position.x
    }
    
    
}

let r = 0
function enemies(){

    for(let i = 0; i < worldWidths.length; i++){

        if(worldHeights[i] == worldHeights[i-1] &&
            worldHeights[i] >= worldHeights[i-2]){
            fill(255,2,0)

            //rotate(90)
                        
            let eShipX = [-20,0,20,0,-20,-18.5,-50,0,50,18.5,-18.5]
            let eShipY = [0,-100,0,-10,0,-8,-20,-40,-20,-8,-8]
        

            vPosX = worldWidths[i] -25
            vPosY = worldHeights[i] - 3
            vScale = 0.4
            
            // translate(vPosX, vPosY)
            fill(0,0)
            stroke(220,240,255)
            strokeWeight(2)
            if(keyDown(17)){
                r -=0.02
                vPosY += r
            }


            beginShape()
            for(let i = 0; i < eShipX.length; i++){
                vertex(vPosX + eShipX[i] * vScale, vPosY + eShipY[i] * vScale)
 
            }    
            endShape(CLOSE)


        }
    }
}


//class Bouncy{
    //     constructor(){
    //         this.size = 30
    //         this.vector = createVector(W/2, 50)
    //         this.velocity = createVector(0,0)
    //         this.weight = 0.450
    //         this.grav = 9.807
    
    //         this.curVel = this.velocity
    //         if(this.curVel > this.velocity){
    //             this.direction = 1
    //         }
    //         else{
    //             this.direction = 0
    //         }
            
    //         print(this.direction);
            
    //     }
    
    //     display(){
    //         circle(this.vector.x, this.vector.y, this.size)
    //         this.vector.y += this.weight * this.grav
    
    //         // if(hit){
    //         //     this.vector.y -= this.weight * this.grav 
    //         // }
    //      }
    
    // }


// class DistRays{
//     constructor(){
//         this.emitterX = width / 2
//         this.emitterY = height /2
//         createSprite(this.emitterX, this.emitterY,10,10)
//         this.rays = []
//         for(let a = 0; a < 360; a++){
//             this.rays.push()
//         }
//     }   
//     getDist(){
//     }
// }


