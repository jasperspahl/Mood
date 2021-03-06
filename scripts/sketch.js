const scl = 50;
const age = 'Wie alt bist du';
const mood = 'Wie fühlst du dich gerade';
const wakeUpTime = 'Wann stehst du durchschnittlich auf';
const fallAsleepTime = 'Wann gehst du durchschnittlich ins Bett';

let data;

let x = 0;
let y = 0;



function setup() {
  createCanvas(350, 250);
  background(0);
  createDiv('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSExifFqvI6bCtTpxPNa55yEDBNDoH8sKLy-XWxqIb6ZWeBQ/viewform?embedded=true" width="350" height="275" frameborder="0" marginheight="0" marginwidth="0">Wird geladen...</iframe>');
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
  for (var i = data.length -1; i >= 0; i--) {
    if (data[i][mood] == 'Super') {
      fill(color('#bd0059'));
      //console.log("Super");
    } else if (data[i][mood] == 'Gut') {
      fill(color('#e54e20'));
      //console.log("Gut");
    } else if (data[i][mood] == 'Ok') {
      fill(color('#ffa201'));
      //console.log("Ok");
    } else if (data[i][mood] == 'Nicht so gut') {
      fill(color('#00766d'));
      //console.log("Nicht so gut");
    } else if (data[i][mood] == 'Schlecht'){
      fill(color('#222222'));
      //console.log("Schlecht");
    }
    rect(x,y,scl,scl);
    y += scl;
    if (y >= height - scl) {
      y = 0;
      x += scl;
    }
  }
}
