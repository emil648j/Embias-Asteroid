function Asteroid() {
    this.pos = createVector(random(width), random(height))
    this.vel = p5.Vector.random2D();
    this.r = random(25, 50);
    this.total = floor(random(10, 20));
    this.offset = [];
    for (var i = 0; i < this.total; i++) {
        this.offset[i] = random(-10, 10);
    }

    this.update = function () {
        this.pos.add(this.vel);
    }

    this.render = function () {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);

        beginShape();
        for (var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);
            var r = this.r + this.offset[i];
            var x = r * cos(angle);
            var y = r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
}