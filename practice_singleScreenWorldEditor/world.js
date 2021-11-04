

let gridSize = 50;
let gridOffset = gridSize / 2;
// let worldSpritePositions[] = 


function drawWorld(){

    ground = createSprite(width / 2, height - 50, width, 100);
    ground.shapeColor = color(50,150,50);

    worldSprite = new worldPlatform();
    
    
} // drawWorld()


class worldPlatform {
    constructor() {
        this.worldSprite;
    }

    setup(x, y, w, h) {
        this.worldSprite = createSprite(x, y, w, h);
        this.worldSprite.addImage(tex_grass);
        // 
    }

    draw(){

        if (mouseIsPressed) {
          let x = snap(mouseX);
          let y = snap(mouseY);
    

            if (mouseButton === LEFT) {
                this.setup(x, y, 50, 50);
                worldTiles.add(this.worldSprite);

                addGridPosition(x, y);
                // console.log(x, y);
                
            }

            if (mouseButton === RIGHT) {
                console.log(gridItem);

                getGridPosition(x, y);
                console.log([x, y])

            }
                
    
        }
    }


} // class worldPlatform

function snap(op) {
    // subtract offset (to center lines)
    // divide by gridSize to get row/column
    // round to snap to the closest one
    let cell = Math.round((op - gridOffset) / gridSize);
    // multiply back to gridSize scale
    // add offset to center
    return cell * gridSize + gridOffset;
} // snap()



let gridItem = []; // 2D Array (Matrix) of items placed on gridTiles
let maxAmountOfItems = 100;
let iteration = 0;


function addGridPosition(x, y) { // Gets mouse snap position and adds xy to 2D Array

    gridItem[iteration++] = [x, y];

}

function getGridPosition(x, y){

    
    // gridItem[ [x], [y] ]
    // e.g. gridItem[[32, 44], [56, 123]]

    // let gridItem = [];

    let json = {};
    json.id = "Autumn";
    json.item = gridItem
    // saveJSON(json, "things.json") 

    console.log(gridItem);
    
    // for(i = 0; i < maxAmountOfItems; i++) {
    //     return gridItem[i] = [x, y];
        
    // }


}
function keyPressed() {
    if(key == 'w') {
        loadJSON("things.json")
        console.log("loadMap Key Pressed");
        
    }
}

function loadMap() {


    
}

