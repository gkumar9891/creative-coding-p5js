let distMouse = 15;
let b;
let rows;
let cols;
let size = 10;
let blocks = [];
let offset = 4;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  angleMode(DEGREES)
  
  rows = height/size;
  cols = width/size;
  
  for(let i = 0; i < cols; i++) {
    blocks[i] = []
    for(let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size);
    }
  }
}

function draw() {
  background(0);
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}