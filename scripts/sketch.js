const scl = 40;
const age = 'Wie alt bist du';
const mood = 'Wie fühlst du dich gerade';
const wakeUpTime = 'Wann stehst du durchschnittlich auf';
const fallAsleepTime = 'Wann gehst du durchschnittlich ins Bett';

let data;

let x = 0;
let y = 0;



function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  Tabletop.init( { key: '1a3MGwN8YOrxZl2jkxgJRxJri29OYMW7G-MrG9_HEvLE',
                 callback: gotData,
                 simpleSheet: true } )
}

function gotData(stuff, tabletop) {
  data = stuff;
  console.log(data);
  drawStuff();
}

function drawStuff() {
  noStroke();
  for (var i = 0; i < data.length; i++) {
    if (data[i][mood] == 'Super') {
      fill(191, 37, 39);
      console.log("Super");
    } else if (data[i][mood] == 'Gut') {
      fill(240, 92, 39);
      console.log("Gut");
    } else if (data[i][mood] == 'Ok') {
      fill(242, 174,35);
      console.log("Ok");
    } else if (data[i][mood] == 'Nicht so gut') {
      fill(44, 61, 61);
      console.log("Nicht so gut");
    } else{
      fill(28, 32, 35);
      console.log("something else");
    }
    rect(x,y,scl,scl);
    y += scl;
    if (y >=height) {
      y = 0;
      x += scl;
    }
  }
}
