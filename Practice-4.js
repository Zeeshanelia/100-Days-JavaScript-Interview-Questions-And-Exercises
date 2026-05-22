// Q: write neested loop to print a 3*3 grids of number

for (let row = 1; row <= 3; row++) {

  let output = "";

  for (let col = 1; col <= 3; col++) {
    output += col + " ";
  }

  console.log(output);
}
// 1 2 3
//1 2 3
//1 2 3





for (let row = 1; row <= 3; row++) {

  for (let col = 1; col <= 3; col++) {
    console.log("Row:", row, "Col:", col);
  }

}

//Row: 1 Col: 1
//Row: 1 Col: 2
//Row: 1 Col: 3
//Row: 2 Col: 1




let num = 1;

for (let row = 1; row <= 3; row++) {

  let output = "";

  for (let col = 1; col <= 3; col++) {
    output += num + " ";
    num++;
  }

  console.log(output);

}

//Understanding Nested Loops
//Outer loop (row)
// controls rows
//Inner loop (col)
// controls columns