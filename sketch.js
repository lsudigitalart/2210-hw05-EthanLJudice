//Author @Ethan Judice

function setup() {
  createCanvas(400,400);
  
}

  
function draw() {
  background('black');
  fill('black');

  if(mouseIsPressed){
    scale(1.1);
    translate(-18, -18);
  }

  //inner circle
  circle(200, 200, 360);
  stroke("white")
  //outer square
  line(20, 20, 20, 380);
  line(20, 380, 380, 380);
  line(380, 380, 380, 20);
  line(380, 20, 20, 20);
  //inner lines
  line(380, 380, 290, 20);
  line(380, 380, 200, 20);
  line(380, 20, 290, 380);
  line(290, 20, 290, 380);
  line(20, 380, 110, 20);
  line(20, 380, 200, 20);
  line(20, 20, 110, 380);
  line(110, 20, 110, 380);
  
} 
