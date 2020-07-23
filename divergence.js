var a, b,c,d,e,f,g,h;

function setup() {
a=b=c=d=e=f=g=h=105;
}

function draw() {
createCanvas(210, 210);
background(0);
stroke(255);
strokeWeight(5);
line(105,170,105,110);
    line(95,160,105,170);
    line(115,160,105,170);
  line(105,100,105,40);
    line(95,50,105,40);
    line(115,50,105,40);
  line(110,105,170,105);
    line(160,95,170,105);
    line(160,115,170,105);
  line(100,105,40,105);
    line(40,105,50,95);
    line(40,105,50,115);
  noStroke();
  fill(255, 0, 0);
  textSize(30);
  text("div",40,40);
   ellipse(a, b, 20, 20);
   ellipse(c, d, 20, 20);
   ellipse(e, f, 20, 20);
   ellipse(g, h, 20, 20);
  a++;
  c--;
  f++;
  h--;
  if(a==170||c==40||f==170||h==40){
    a=b=c=d=e=f=g=h=105;
  }
}
