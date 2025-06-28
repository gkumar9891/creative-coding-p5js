
let size = 50;
let cols;
let rows;

let b;
let boxes = [];
let font;
let msg = "G"; 
let points = []
let fontX = -130;
let fontY = 130;
let fontSize = 400;

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isLetter = false
    this.angle = 0;
    this.depth = 0;
  }
  
  display() {
    // let x = map(mouseX, 0, width, 0, 360);
    stroke(255, 100);
    noFill();
    if(this.isLetter) {
      stroke(255);
      this.angle++;
      this.depth += 2*sin(this.angle) 
    } else {
      this.angle--;
    }
      
      let z = map(mouseX, 0, width, 0, 100);
    
      push();
      translate(this.x, this.y, this.depth);
      rotateX(this.angle)
      rotateY(this.angle)
      box(size-1/3*size);
      pop();
  }
}

function preload() {
  font = loadFont("https://p5js.org/assets/inconsolata.otf")
}

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES)
  cols = width/size;
  rows = height/size;
  
  points = font.textToPoints(msg, fontX, fontY, fontSize)
  
  for(let i = 0; i < cols; i++) {
    boxes[i] = [];
    for(let j = 0; j < rows; j++) {
      boxes[i][j] = new Box(size/2 + i*size - size*cols/2, size/2 + j*size-size*rows/2)
    }
  }
}

function draw() {
  background(0, 0, 139);
  let distance  
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      
      for(let k = 0; k < points.length; k++) {
        distance = dist(points[k].x, points[k].y, boxes[i][j].x, boxes[i][j].y);

      if(distance < 30) {
        boxes[i][j].isLetter = true;
      }
      }
      
      boxes[i][j].display();
    }
  }
}


