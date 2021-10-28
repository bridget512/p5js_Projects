// Player Car
let car;
let texture_car_01;
let carStartX = 260; 
let carStartY = 125;
let carFlyingStartX = 120;
let carVelocityX = 0;
let carVelocityY = 0;

// Track
let t = "";
let fileImport_track_01;
let fileImport_track_01_a;
let trackTileSize;
let tileSizeScale;
let grassGroup;

// LapTimer()
let lap = 0;
let lapLast = 0;
let lapTime = 0;
let time = 0;
let lapStart = 0;
let bestLap = [];

// =================================================================== Preload()
function preload(){
  fileImport_track_01 = loadStrings('track.txt');
  fileImport_track_01_a = loadStrings('track_detail_01.txt');
  fileImport_track_01_b = loadStrings('track_detail_02.txt');

  texture_car_01 = loadImage("assets/car.png");
  texture_track_01 = loadImage("assets/r1.png");
  texture_grass_01 = loadImage("assets/g1.png");
  texture_track_startFinish = loadImage("assets/sf1.png");

  texture_strip_01 = loadImage("assets/strip1.png");
  texture_strip_02 = loadImage("assets/strip2.png");
  texture_strip_03 = loadImage("assets/strip3.png");
  texture_strip_04 = loadImage("assets/strip4.png");

  texture_tree_01 = loadImage("assets/tree1.png");
  texture_tree_02 = loadImage("assets/tree2.png");
  
  font = loadFont('assets/OpenDyslexic-Regular.otf');
} // preload()


// =================================================================== setup()
function setup() {
  createCanvas(900, 620);
  angleMode(DEGREES);
  textFont("opendyslexic");

  // Track
  t = fileImport_track_01.toString().split("");
  td = fileImport_track_01_a.toString().split("");
  td2 = fileImport_track_01_b.toString().split("");

  trackTileSize =  width / 9.6; // SCALE THE TILES
  tileSizeScale = trackTileSize * 0.0079;
  grassGroup = new Group();
  startFinishGroup = new Group();

  testTrack();
  trackDetail_strips();
  trackDetail_trees();

  //Car
  car = createSprite(carStartX, carStartY);
  car.addImage(texture_car_01);
  car.scale = tileSizeScale * 0.65;
  car.setCollider("rectangle",0,0,10,10); // Set so you cant cut corners, but front of car can touch grass
  //car.debug = true // show's collider box

  playerCar = {
    speed: 0,               // Current car speed (could use getSpeed() but meh)
    topSpeed: 5.2,          // Top speed of the car
    accelRate: 0.1,         // Speed increase rate on full throttle
    brakeRate: 0.22,        // Speed decrease rate on brake
    rollRate: 0.05,         // Speed decrease when no throttle input
    turnRate: 4,            // Rate that the car turns
    turnEfficiency: 3,      // Lowest car speed while turning
    turnSpeedScrub: 0.14    // Speed decrease rate to turnEfficiency
  };


} // setup()


// =================================================================== draw()
function draw() {
  background(50);  
  playerControl();
  drawSprites();
  car.collide(grassGroup, carReset);
  hud();
} // draw()


function hud(){

// =================================================================== Lap Timer
  let fontSize = 22;

  time = millis();

  if(car.overlap(startFinishGroup)){

    if (lapTime > 0){
      lapLast = lapTime;
    }

    lapTime = 0;
    lapStart = millis();
  }

  else{
    lapTime = (time - lapStart) / 1000;    
  }

  noStroke();
  fill(200,200,200,180);
  rect(0,0, width, 55);

  textSize(fontSize);
  textAlign(LEFT, CENTER);

  fill(50,50,50);
  text("Lap: " + lapTime, 20,30);
  text("Last: " + lapLast, 200,30);
  //text("Best: " + lapLast, 390,30);


// =================================================================== Speedometer
  text("Speed:", width - 220, 30);
  // Speed Value Container
  fill(50,50,50);
  rect(width - 110, 14, 84, 24);

  // Change bar colour with speed
  fill(200,playerCar.speed * 40, playerCar.speed * 10);

  // Speed Value
  speedPercent = playerCar.speed / playerCar.topSpeed * 80
  rect(width - 108, 16, speedPercent , 20);

}


 // =================================================================== Car Reset
function carReset(){

    playerCar.speed = 0;
    car.rotation = 0; // add a short time out to prevent insta-crash?

    car.position.x = carFlyingStartX
    car.position.y = carStartY

}


// =================================================================== Player Control
function playerControl(){

// ============================================= Up Arrow
  if(keyDown(UP_ARROW)){
    
    playerCar.speed += playerCar.accelRate;
    if(playerCar.speed >= playerCar.topSpeed){
        playerCar.speed = playerCar.topSpeed;
    }

  }
  else{
    // IF key released, roll to zero speed over time
    playerCar.speed -= playerCar.rollRate;

  // Prevents speed from dipping under 0 due to rollRate
    if(playerCar.speed <= 0){
      playerCar.speed = 0;
    }

  }


// ============================================= Down Arrow
  if(keyDown(DOWN_ARROW)){

    playerCar.speed -= playerCar.brakeRate;

    // Prevents speed from dipping under 0 due to brakeRate
    if(playerCar.speed <= 0){
      playerCar.speed = 0;
    }
  }

// ============================================= Left Arrow
  if(keyDown(LEFT_ARROW)){
    let lastRotation = car.rotation;

    car.rotation  -= playerCar.turnRate;
        // So the car can still tight turn from a stop 
        if(playerCar.speed >= playerCar.turnEfficiency){
          playerCar.speed -= playerCar.turnSpeedScrub
        }

    // Prevents car from rotating when stopped
    if(playerCar.speed == 0){
      car.rotation = lastRotation;
    }

  }

// ============================================= Right Arrow
  if(keyDown(RIGHT_ARROW)){
    let lastRotation = car.rotation;

     car.rotation += playerCar.turnRate;

    // So the car can still tight turn from a stop 
    if(playerCar.speed >= playerCar.turnEfficiency){
      playerCar.speed -= playerCar.turnSpeedScrub
    }
    

    // Prevents car from rotating when stopped
    if(playerCar.speed == 0){
      car.rotation = lastRotation;
    }

  }

// ============================================= Apply Velocity

  carVelocityX = playerCar.speed * cos(car.rotation);
  carVelocityY = playerCar.speed * sin(car.rotation);

  car.setVelocity(carVelocityX, carVelocityY);

}// playerControl()


// =================================================================== Track
function testTrack(){

  let lineY = 30;
  let lineX = 30;
  let commaPos = t.indexOf(",") // gets the position of the first comma in the array
  let tilesWide = commaPos + 1; // + 1 to account for the comma itself

  for(let i = 0; i < t.length; i++){

    // offset rows every comma in array
    if(t[i] == ","){
      lineY += trackTileSize;
      lineX -= trackTileSize * tilesWide;
    }

    //draw grass
    if(t[i] == "0"){
      
      grass = createSprite(
                          lineX + i * trackTileSize ,
                          lineY,
                          trackTileSize,trackTileSize
                          );

      grass.addImage(texture_grass_01);
      grass.scale = tileSizeScale;
      grass.addToGroup(grassGroup);
      
    }

    // draw road
    if(t[i] == "1"){
      
      track = createSprite(
                          lineX + i * trackTileSize ,
                          lineY,
                          trackTileSize,trackTileSize
                          );

      track.addImage(texture_track_01);
      track.scale = tileSizeScale;
    }

    // draw Start Finish Line Tile

    if(t[i] == "2"){

      startFinish = createSprite(
                                lineX + i * trackTileSize ,
                                lineY ,
                                trackTileSize,trackTileSize
                                );

       startFinish.addImage(texture_track_startFinish);
       startFinish.scale = tileSizeScale;
       startFinish.addToGroup(startFinishGroup);
       
    }


  }// for i


}// testTrack()

// =================================================================== Detail Passes
function trackDetail_strips(){

  let lineY = 30;
  let lineX = 30;
  let commaPos = td.indexOf(",") // gets the position of the first comma in the array
  let tilesWide = commaPos + 1; // + 1 to account for the comma itself


  for(let i = 0; i < td.length; i++){

    // offset rows every comma in array
    if(td[i] == ","){
      lineY += trackTileSize;
      lineX -= trackTileSize * tilesWide;
    }

    if(td[i] == "1"){
      
      strip = createSprite(
                          lineX + i * trackTileSize ,
                          lineY,
                          trackTileSize,trackTileSize
                          );

      strip.addImage(texture_strip_02);
      strip.scale = tileSizeScale;
    }

    if(td[i] == "2"){

      startFinish = createSprite(
                                lineX + i * trackTileSize ,
                                lineY ,
                                trackTileSize,trackTileSize
                                );

       startFinish.addImage(texture_strip_01);
       startFinish.scale = tileSizeScale;
       
    }

    if(td[i] == "3"){
      
      strip = createSprite(
                          lineX + i * trackTileSize ,
                          lineY,
                          trackTileSize,trackTileSize
                          );

      strip.addImage(texture_strip_04);
      strip.scale = tileSizeScale;
    }

    if(td[i] == "4"){
      
      strip = createSprite(
                          lineX + i * trackTileSize ,
                          lineY,
                          trackTileSize,trackTileSize
                          );

      strip.addImage(texture_strip_03);
      strip.scale = tileSizeScale;
    }


  }// for i


}// testTrack()


function trackDetail_trees(){

  let lineY = 30;
  let lineX = 30;
  let commaPos = td.indexOf(",") // gets the position of the first comma in the array
  let tilesWide = commaPos + 1; // + 1 to account for the comma itself


  for(let i = 0; i < td.length; i++){

    // offset rows every comma in array
    if(td[i] == ","){
      lineY += trackTileSize;
      lineX -= trackTileSize * tilesWide;
    }

    if(td2[i] == "1"){
      
      thing = createSprite(
                          lineX + i * trackTileSize ,
                          lineY,
                          trackTileSize,trackTileSize
                          );

      thing.addImage(texture_tree_01);
      thing.scale = tileSizeScale;
    }

    if(td2[i] == "2"){

      thing = createSprite(
                                lineX + i * trackTileSize ,
                                lineY ,
                                trackTileSize,trackTileSize
                                );

       thing.addImage(texture_tree_02);
       thing.scale = tileSizeScale;
       
    }


  }// for i


}// testTrack()