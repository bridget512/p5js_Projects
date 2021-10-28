let stars = [];
let star;
let starsOnScreen = 250 ;

// =================================================================== 
function drawBackground(){
    background_grad = createSprite(450, 450);
    background_grad.addImage(background_stars_gradOverlay);
}

// =================================================================== Stars
class Star{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.starSpeed = random(0.2, 0.7);
        this.star = createSprite(this.x,this.y);
        this.star.scale = random(0.0005, 0.04);
        this.star.shapeColor = color(random(20, 150));
    }

    move(){   
        this.star.position.y += this.starSpeed;

        if(this.star.position.y > height){
            this.star.position.y = 0;
        }

    }

    update(){
        this.move();
    }

    show(){
        noStroke();
        fill(255, random(95, 180));

    }

}// class Star()

function starSpawn(){
    for(let i = 0; i < starsOnScreen; i++){

        let x = random(i + width);
        let y = random(i + height);
        stars[i] = new Star(x,y);
    }
}

function starAnimate(){
    for(let i = 0; i < stars.length; i++){
        //stars[i].show();
        stars[i].update();
     }
}