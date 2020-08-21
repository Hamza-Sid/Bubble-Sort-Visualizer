let values = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); //windowWidth
  values = new Array(width*2);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    // values[i] = noise(i/100.0)*height;
  }
}

function draw() {
  background(255);
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log('finished');
    noLoop();
  }
  i++;
  for (let i = 0; i < values.length; i++) {
    stroke(0);
    // rect(i, height - values[i], 10, 10);
    // line(i, height, i, height - values[i]);
  }
  noStroke();
  text("Bubble Sort!\n(Numeric Edition)", 170, 300);
  // text(values.toString(), 10, 70);
  textSize(20);
  textFont('Courier New');
  
  text("\n\n  About: \n  Bubble Sort: Bubble Sort is a simple sorting algorithm that\n  compares values that neighbor eachother in a data-set/structure.\n  Given two things to compare, once Bubble Sort sees that a comparison being tested is true, \n  it swaps those values in the set.\n  This algorithm does O(n^2) time because of its reliance on a nested loop. ", 170, 400);
  
  textSize(20);
  text(values.toString(), 10, 90);
 
  textSize(80);
  textFont('Courier New');
}
function mousePressed(){
    window.open("https://www.google.com/search?q=text+fonts&source=lmns&bih=700&biw=1243&hl=en&sa=X&ved=2ahUKEwjJi9CxmarrAhXMi-AKHcYeCoQQ_AUoAHoECAEQAA", '_blank');
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}