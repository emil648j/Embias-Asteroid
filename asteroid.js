function Asteroid() {
    this.pos = createVector(random(width), random(height))
    this.r = random(10, 30);
    this.total = floor(random(7, 13));
    this.offset = [];
    for (var i = 0; i < this.total; i++)
        this.offset[i] = random(-7, 7);

    this.render = function () {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        //ellipse(0, 0, this.r * 2);
        beginShape();
        for (var i = 0; i < this.total; i++) {
            var angle = map(i, 0, this.total, 0, TWO_PI);
            var r = this.r + this.offset[i];
            var x = this.r * cos(angle);
            var y = this.r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
}