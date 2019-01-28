var a, b, c, d, a1, b1, c1, d1, r, r1, r2, r3, r4, ra, rb, rc, rd, rmin, rmax;
var x, y, z, rotation, colour;
var ns1, ns2, ns3, ns4, ns5, ns6, ns7, ns8, ns9, ns10, ns11, ns12, ns13;
var bg, p;

function setup() {
  colorMode(HSB, 360, 100, 100);
  rmin = 55;
  rmax = 100;

  createCanvas(559.5, 768);
  background(255);
  r = 120;
  r1 = 60;
  r2 = 60;
  r3 = 0;

  a = random(20, 100);
  b = random(140, 220);
  c = random(260, 340);
  r1 = random(rmin, rmax);
  r2 = random(rmin, rmax);
  r3 = random(rmin, rmax);
  ns1 = random(20, 100);
  ns3 = random(140, 220);
  ns5 = random(260, 340);
  ns2 = random(a, b);
  ns4 = random(b, c);
  ns6 = random(c, a + 360);
  ns7 = random(50);

  ns8 = random(300);
  ns9 = random(300);
  ns10 = random(300);
  ns11 = random(300);
  ns12 = random(300);
  ns13 = random(300);
  p = false;
  bg = loadImage("bg.png");

}

function draw() {


  ns1 = ns1 + .010;
  ns2 = ns2 + .01;
  ns3 = ns3 + .01;
  ns4 = ns4 + .01;
  ns5 = ns5 + .01;
  ns6 = ns6 + .01;
  ns7 = ns7 + .001;
  ns8 = ns8 + .005;
  ns9 = ns9 + .005;
  ns10 = ns10 + .005;
  ns11 = ns10 + .005;
  ns12 = ns10 + .01;

  a = noise(ns1) * 70 + 10;
  r1 = noise(ns2) * (rmax - rmin + 5) + rmin;
  b = noise(ns3) * 70 + 100;
  r2 = noise(ns4) * (rmax - rmin + 5) + rmin;
  c = noise(ns5) * 70 + 190;
  r3 = noise(ns6) * (rmax - rmin + 5) + rmin;
  d = noise(ns12) * 70 + 280;
  r4 = noise(ns13) * (rmax - rmin + 5) + rmin;
  rotation = noise(ns7) * 360;

  a1 = (a + b) / 2;
  b1 = (b + c) / 2;
  c1 = (a + c + 360) / 2;
  ra = map(noise(ns8), 0, 1, 90, 120);
  rb = map(noise(ns9), 0, 1, 90, 120);
  rc = map(noise(ns10), 0, 1, 90, 120);
  rd = map(noise(ns11), 0, 1, 90, 120);



  translate(280, 384);

  noStroke();
  
  colorMode(HSB, 360, 100, 100);

  background(206, 0, 90);
  //pop();
  //scale(1);

  image(bg, -280, -384,364.559.5, 768);
  push();
  scale(2.3);

  //shapeMode(CENTER);
  rotate(radians(rotation));
 // rotate(radians(45));




  fill(map(noise(ns3), 0, 0.8, 0,360), 25, 55);



  beginShape();
  curveVertex(sin(radians((d + a + 360) / 2)) * r4, -cos(radians((d + a + 360) / 2)) * r4);

  curveVertex(sin(radians(a - 10)) * ra, -cos(radians(a - 10)) * ra);
  curveVertex(sin(radians(a + 10)) * ra, -cos(radians(a + 10)) * ra);

  curveVertex(sin(radians((a + b) / 2)) * r1, -cos(radians((a + b) / 2)) * r1);

  curveVertex(sin(radians(b - 10)) * rb, -cos(radians(b - 10)) * rb);
  curveVertex(sin(radians(b + 10)) * rb, -cos(radians(b + 10)) * rb);


  curveVertex(sin(radians((b + c) / 2)) * r2, -cos(radians((b + c) / 2)) * r2);

  curveVertex(sin(radians(c - 10)) * rc, -cos(radians(c - 10)) * rc);
  curveVertex(sin(radians(c + 10)) * rc, -cos(radians(c + 10)) * rc);



  curveVertex(sin(radians((d + c) / 2)) * r3, -cos(radians((d + c) / 2)) * r3);

  curveVertex(sin(radians(d - 10)) * rd, -cos(radians(d - 10)) * rd);
  curveVertex(sin(radians(d + 10)) * rd, -cos(radians(d + 10)) * rd);



  curveVertex(sin(radians((d + a + 360) / 2)) * r4, -cos(radians((d + a + 360) / 2)) * r4);

  curveVertex(sin(radians(a - 10)) * ra, -cos(radians(a - 10)) * ra);
  curveVertex(sin(radians(a + 10)) * ra, -cos(radians(a + 10)) * ra);
  endShape();

  



}
