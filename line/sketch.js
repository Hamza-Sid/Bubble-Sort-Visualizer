let values = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); //windowWidth
  values = new Array(width);
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
    line(i, height, i, height - values[i]);
  }
  noStroke();
  text("Bubble Sort!", 170, 300);
  // text(values.toString(), 10, 70);
  textSize(20);
  textFont('Courier New');
  
  text("\n(click anywhere for more)", 170, 300);
  // text(values.toString(), 10, 70);
  textSize(80);
  textFont('Courier New');
}
function mousePressed(){
    window.open("https://editor.p5js.org/Hamza_sid/present/sdFJIS2CE", '_blank');
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}