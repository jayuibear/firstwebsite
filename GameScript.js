/*global createCanvas, background, rect, fill, line, noStroke, width, stroke, strokeWeight, height, ellipse, mouseX, mouseY, random, t, text, textSize */
var t, y;

function setup() {
  t = 35;
  y = 165;
}

function draw() {
  createCanvas(210, 210);
  background(0);
  stroke(255);
  strokeWeight(5);
  line(30, 165, 170, 165);
    line(160, 155, 170, 165);
    line(160, 175, 170, 165);
  line(185, 165, 185, 35);
    line(175, 45, 185, 35);
    line(195, 45, 185, 35);
  line(30, 35, 170, 35);
    line(40, 25, 30, 35);
    line(40, 45, 30, 35);
  line(15, 165, 15, 35);
    line(5, 155, 15, 165);
    line(25, 155, 15, 165);
  noStroke();
  fill(255, 0, 0);
  textSize(30);
  text("curl",80,105)
  ellipse(t, y, 20, 20);
if(t>34&&t<186&&y>160)
{
 t++
}
if(t>185&&y>36){
  y--;
}
if(y==37&&t>29)
{
  t--;
}
if(t<30)
  {
    y++;
  }
if(t<35&&y>160)
  t++;
}
