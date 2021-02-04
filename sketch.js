var ship;
var asteroids = [];
var lasers = [];
var hits = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i = 0; i < 10; i++)
        asteroids.push(new Asteroid);
}

function draw() {


    background(0);

    for (var i = 0; i < asteroids.length; i++) {
        if(ship.hits(asteroids[i])){
            textSize(50);
            fill(255);
            text('*Hit*', windowWidth / 2, windowHeight / 2);
            fill(0);
            rect(0, 0, 1000, 100);
            hits += 1;
            console.log(hits);
        }
       
            asteroids[i].render();
            asteroids[i].update();
            asteroids[i].edges();
        
        
    }

    for (var i = lasers.length-1; i >= 0; i--) {
        lasers[i].render();
        lasers[i].update();
        if (lasers[i].offscreen()){
            lasers.splice(i, 1);
        } else {
        for (var j = asteroids.length-1; j >= 0 ; j--){
            if (lasers[i].hits(asteroids[j])){
                if (asteroids[j].r > 20){
                    var newAsteroids = asteroids[j].breakup();
                    console.log(newAsteroids);
                    asteroids = asteroids.concat(newAsteroids);
                }
                asteroids.splice(j, 1);
                lasers.splice(i, 1);
                break;
        }
        }
    }
    }

    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

    
        textSize(50);
        fill(255);
        text('Asteroids Remaining:', 20, 50);
        text(asteroids.length, 500, 50);
    
    
    if(asteroids.length == 0){
        textSize(50);
        fill(255);
        text('You Won.', windowWidth / 2, windowHeight / 2);
        fill(0);
        rect(0, 0, 1000, 100);

    
    }
    
}


function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}

function keyPressed() {
    if (key == ' '){
       lasers.push(new Laser(ship.pos, ship.heading)); 

    } else if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}

