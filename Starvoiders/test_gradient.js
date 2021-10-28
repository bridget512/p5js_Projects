


function preload(){


}// preload()


function setup() {
    createCanvas(900, 900);

    // Background stars overlay gradient
    for (let i = 0; i < height; i++) {
      let strokeMap = map(i, 0, height, 0, 1);
      let strokeColor = lerpColor(color(0,0), color(0,100), strokeMap);
      stroke(strokeColor);
      line(0, i, width, i);
    }

} // setup()
  

function draw() {
    
    background(255,0);

     
    drawSprites();
} // draw()



