const numCircles = 10;

function setup() {
  // put setup code here
  createCanvas(500, 500);
  phase0();
  phase1();
}

function draw() {
  // put drawing code here
}

function phase0 () {
  var y = int(random(height));
  var diameter = width / numCircles;
  var radius = diameter / 2;
  var xcor = radius;
  var circleColorInterval = (255 / (numCircles - 1));
  var circleColorIntervalAlpha = circleColorInterval;
  var n = 0;
  while (n <= numCircles) {
    if (n == 0){
      fill(0);
      circle(xcor, y, diameter);
      n = n + 1;
    }
    else{
      fill(n * circleColorInterval);
      xcor = xcor + diameter;
      circle(xcor, y, diameter);
      n = n + 1;
    }
  }
}

function phase1 () {
  var diameter = width / numCircles;
  var radius = diameter / 2;
  var xcor = radius;
  var ycor = -radius;
  var n = 0;
  var numCirclesGrid = numCircles * numCircles;
  var circleColorInterval = (255 / (numCirclesGrid - 1));
  var circleColorIntervalAlpha = circleColorInterval;
  while (n <= numCirclesGrid) {
    while ((n % 10) != 0){
      if (n == 0){
        fill(0);
        circle(xcor, ycor, diameter);
        n = n + 1;
      }
      else{
        fill(n * circleColorInterval);
        xcor = xcor + diameter;
        circle(xcor, ycor, diameter);
        n = n + 1;
      }
    }
    if ((n % 10) == 0){
      fill(n * circleColorInterval);
      xcor = radius;
      ycor = ycor + diameter;
      circle(xcor, ycor, diameter);
      n = n + 1;
    }
  }
}
