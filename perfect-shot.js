const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  const newDirection = [];
  for (let direction of moves) {
    if (direction === "north") {
      x += 0;
      y += 1;
    }
    else if (direction === "west"){
      x-= 1;
      y += 0;
    }
    else if (direction === "east"){
      x += 1;
      y += 0;
    }
    
  }
  newDirection.push (x);
  newDirection.push (y);
  return newDirection;
} 
console.log(finalPosition(moves));
