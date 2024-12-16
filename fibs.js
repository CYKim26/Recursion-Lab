let fibs = [0,1,1,2]
let n = 1
let callCount = 0

// nth fibonacci number 
// fib(n) = previous + previous previous 
// fib(n) = fib(n-1) + fib(n-2)

// // recursion
// function fib(n) {
//   // base case
//   if( n === 1 || n === 2 ) {
//     return 1
//   }
//   return fib(n-1) + fib(n-2)
// }

// fib(3) = fib(2) -> 1 + fib(1) -> 1 = 1 + 1 = 2
// fib(2) = fib(1) + fib(0)
// fib(1) = fib(0) + fib(-1)


function setup() {
  createCanvas(400, 400)
  noLoop()
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220)
  // text(`${n}th fibonacci number: ${fibs[n]}` ,width/2,height/2)
  text(`${n}th fibonacci number: ${fib(n)}. Took ${callCount} calls to fib()`,width/2,height/2)
  
}

function keyPressed() {
  if( key === " " ) {
    n += 1    
    redraw()
  }
}

function fib(n, memoization = {}) {
  callCount += 1
  if( n < 1 ) { // error/base case
    return 0
  } 
//   I added a memoization object to store the previous values.
  
  if( n === 1 || n === 2 ) { // base case
    return 1
  }
  if (memoization [n]) {
      return memoization [n]
      }
//   Added this conditional to check if the result is already in memoization.
  
  memoization[n] = fib(n-1, memoization) + fib(n-2, memoization)
  // return fib(n-1) + fib(n-2)
  return memoization[n]
}
// This part stores the result in memoization before returning.

/*
fib(44) = fib(43) + fib(42)
fib(43) = fib(42) + fib(41)
fib(42) = fib(41) + fib(40)
*/
