hit = false;
let posX = []
let posY = []
let poly = []


function setup() {
    createCanvas(500, 500);

    // Canvas positions of points, x / y
    posX = [10,140,220,300,180,490,490]
    posY = [400,250,350,350,200,200,400]

    for(let i = 0; i < posX.length; i++){
        poly[i] = createVector(posX[i], posY[i])
    }

} // setup()
  

function draw() {
    background(255,200,50);

    circle(mouseX, mouseY, 20)


    fill(0,50)

    // Draw a vertex shape using the created vectors
    beginShape()
    // for(let i = 0; i < poly.length; i++){
    //     vertex(poly.x, poly.y)
    // }
    for (const { x, y } of poly){
        vertex(x, y)
    }
    endShape()
 


    hit = collidePointPoly(mouseX, mouseY, poly);

    
    // rect(250,300,50,100)

   // hit = collidePointRect(mouseX, mouseY, 250,300,50,100);

    if(hit){
        fill(255,0,0)
        circle(mouseX, mouseY, 20)
    }
    else{
        fill(255)
        circle(mouseX, mouseY, 20)
    }
    print(hit)

     
    drawSprites();
} // draw()



