function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)
  noFill()
  noLoop()
}

function draw() {
  background(220)
  rSquare(width/4)
  rSquare(width/4, 3*width/4, width/4)
}

function rSquare(s) {
  if( s > 0 ) { // base case
    rect(width/2, height/2, s, s)
    rSquare(s/2)
  }
}

function rSquare(x1,x2,s) {
  const d = abs(x1-x2)
  if( d > 4 ) { // base case
    const halfSize = s/2
    rect(x1,height/2,s,s)
    
    rect(x2,height/2,s,s)
    rSquare(x1-halfSize,x1+halfSize, s/2)
    rSquare(x2-halfSize,x2+halfSize, s/2)
  }
}
