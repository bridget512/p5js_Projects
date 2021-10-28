
class Enemy {
    constructor(xval,yval) {
        this.dir = 2;
        this.hp = 5;
        this.spr = createSprite(xval, yval);
        this.spr.addImage(frog);
        this.spr.scale=0.5
    }
    draw() {
        text(this.hp,this.spr.position.x+5, this.spr.position.y+5);
    }
    update() {
        this.move(this.dir,0);
        if(this.spr.position.x > 1000) {
            this.dir = -random(5);
        } else if (this.spr.position.x < 100) {
            this.dir = random(5);
        }
    }

    move(xmov,ymov) {
        this.spr.position.x += xmov;
        this.spr.position.y += ymov;
    }
    
    checkCol(x,y) {
        if(this.spr.overlapPoint(x,y)) {
            this.hp--;
            if(this.hp == 0) {
                this.spr.remove();
                return true;
            }
        }
    }
}
let frog;
let enemies = [];

function preload() {
    frog = loadImage("/assets/ship_A02.png");
}
function setup() {
    createCanvas(1200,800);

    for(let i = 0 ; i < 15; i++) {
        enemies.push(new Enemy(i*50 + 50, i* 50 + 50));
    }

}

function draw() {
    background(100);
    textSize(24);
    drawSprites();
    for(let i = 0; i < enemies.length; i++) {
        enemies[i].update();
        enemies[i].draw();
    }
}
// function mousePressed() {
//     for(let i = 0; i < enemies.length; i++) {
//         if(enemies[i].checkCol(mouseX,mouseY)) {
//             enemies.splice(i,1);
//             i--;
//         }
//     }
// }

new p5();