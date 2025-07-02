let flowers = [];
let num = 15;


class Flower {
  constructor(r, pts, f_amp, period, speed) {
    this.x = []
    this.y = []
    this.r = r
    this.pts = pts;
    
    this.f_radius;
    this.f_amp = f_amp;
    this.period = period;
    
    this.speed = speed
    this.rotate = 0;
  }
  
  display() {
    push();
    blendMode(DIFFERENCE)
    fill(255);
    noStroke();
    beginShape();

    for(let i = 0; i < this.pts; i++) {
      let angle = i/this.pts * 360;
      this.f_radius = this.f_amp*cos(angle * this.period);
      this.x[i] = (this.r + this.f_radius)*cos(angle + this.rotate);
      this.y[i] = (this.r+ this.f_radius)*sin(angle + this.rotate);
      vertex(this.x[i], this.y[i]);
    }
    endShape(CLOSE);
    pop();
    this.rotate += this.speed;
  }
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  for(let i = 0; i < num; i++) {
    if(i%2 == 0)
      flowers[i] = new Flower(140 - i*10, 100, 15, 7, (i+1) * 0.1)
    else 
      flowers[i] = new Flower(140 - i*10, 100, 15, 7, (i+1) * -0.1)
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
   for(let i = 0; i < num; i++) {
    flowers[i].display();
  }
}