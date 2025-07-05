let w = 5
let h = w*2;
let cols;
let rows;
let c;
let grid = []

let startingCol;
let endingCol;
let startingRow;
let endingRow;

let colRange;
let rowRange;

let blocks = []; let num;
let colors;


function setup() {
  createCanvas(400, 400);
  cols = width/w;
  rows = height/h;
  
  num = floor(random(3, 6));
  
  colors = [color(255, 240, 1), color(255, 1, 1), color(1, 1, 253), color(249)]
  
  for(let i = 0; i < num; i++) {
    blocks[i] = new Block(colors[i % colors.length]);
  }
  
  for(let i = 0; i < cols; i++) {
    grid[i] = [];
    for(let j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i*w, j*h, w, h, j);
    }
  }
  
  
}

function draw() {
  background(220);
  
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
        stroke(255);
        strokeWeight(0.5);
        grid[i][j].displayCell();
    }
  }
  
  for(let i = 0; i < blocks.length; i++) {
    blocks[i].display();
  }
  
}