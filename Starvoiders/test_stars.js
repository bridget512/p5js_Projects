
let stars = [];
let starsOnScreen = 150;

function setup() {
    createCanvas(900, 900);
    starSpawn();
  } // setup()
  

  function draw() {
    background(17,18,50);
    
    starAnimate();

    drawSprites();
  } // draw()


function starSpawn(){
    for(let i = 0; i < starsOnScreen; i++){

        let x = random(i + width);
        let y = random(i + height);
        stars[i] = new Star(x,y);
    }
}

function starAnimate(){
    for(let i = 0; i < stars.length; i++){
        stars[i].show();
        stars[i].update();
     }
}

class Star{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.starSpeed = random(0.2, 0.7)
        this.star = createSprite(this.x,this.y);
        this.star.scale = random(0.01, 0.05);
        this.star.shapeColor = color(random(100,255));
    }

    move(){   
        this.star.position.y += this.starSpeed;

    }

    update(){
        this.move();
        if(this.star.position.y > height){
            this.star.position.y = 0
        }
    }

    show(){
        noStroke();
        fill(255, random(95,180));

    }

}// class Star()





