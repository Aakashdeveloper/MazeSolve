//Maze or Input array
var map = [
  [true, false, true, true, true, false],
  [true, false, true, false, true, false],
  [true, true, true, false, true, false],
  [false, false, false, true, true, false],
  [true, true, true, true, false, true],
  [true, false, false, false, false, true],
  [true, true, true, true, true, true]
];
var i = 0;
var j = 0;
var k = 0;
var n = 0;
//Final Output array
var result = [];
//Exit point X need to specified by user
var exit_X = 4;
//Exit point Y need to specified by user
var exit_Y = 5;

//Loop that goes for full length
while (i != map.length - 1 || j != map[0].length - 1) {
  //console.log("i is "+i+"j is "+j);
  //i++;
  //j++;
  //Check value which goes down(here down indicate as right)
  if (map[i][j + 1] === true && n != j + 1) {
    k = i;
    n = j;
    j = j + 1;
    //pushing value into final array
    result.push("down");
  //Check value which goes right(here right indicate as down)
  } else if (map[i + 1][j] === true && k != i + 1) {
    k = i;
    n = j;
    i = i + 1;
    //pushing value into final array
    result.push("right");
    //Check value which goes left(here left indicate as up)
  } else if (map[i - 1][j] === true && k != i - 1) {
    k = i;
    n = j;
    i = i - 1;
    //pushing value into final array
    result.push("left");
    //Check value which goes up(here up indicate as left)
  } else if (map[i][j - 1] === true && n != j - 1) {
    k = i;
    n = j;
    j = j - 1;
    //pushing value into final array
    result.push("up");
  }
  //console.log("i is " + i + " j is " + j);
}
//When you reached to the last index of array
if (i == map.length - 1 && j == map[0].length - 1) {
  //last loop to run for exit point
  while (i != exit_X || j != exit_Y) {
    if (map[i - 1][j] === true && k != i - 1) {
      k = i;
      n = j;
      i = i - 1;
      result.push("left");
    } else if (map[i][j - 1] === true && n != j - 1) {
      k = i;
      n = j;
      j = j - 1;
      result.push("up");
    }
    //console.log("i is " + i + " j is " + j);
  }

}

console.log(result);