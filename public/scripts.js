function ranColour() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}



function setup() {
  let text = createP("Laid on at random");
  let canvas = createCanvas(800, 500);
  backgroundColor = color(100, 50, 150);
  noLoop();

  text.position(50, 490);
  text.style("font-family", "monospace");
  text.style("background-color", "#FF4480");
  text.style("color", "#FFFFFF");
  text.style("font-size", "18pt");
  text.style("padding", "10px");
  canvas.position(200, 550);
  canvas.parent("circles");
}

// This is not final
function draw() {
  backgroundColor.setRed(128 + 128 * sin(millis() / 1000));
  background(ranColour());


  var circleX = random(width);
  var circleY = random(height);
  var circleSize = random(10, 100);

  ellipse(circleX, circleY, circleSize);


  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();

  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
  beginShape();
  fill(ranColour());
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  curveVertex(random(width), random(height));
  endShape();
}

const s = ( p ) => {

  let x = 100; 
  let y = 100;

  p.setup = function() {
    let text = createP("Chalk outline of a portrait");

    
    text.position(1500, 490);
    text.style("font-family", "monospace");
    text.style("background-color", "#FF4480");
    text.style("color", "#FFFFFF");
    text.style("font-size", "18pt");
    text.style("padding", "10px");
  };

  p.draw = function() {
    p.background(53, 52, 51);
    p.translate(240, -100, 0);
    p.normalMaterial();
    p.push();
    p.rotateZ(frameCount * 0.01);
    p.rotateX(frameCount * 0.01);
    p.rotateY(frameCount * 0.01);
    p.plane(70, 100, 70);
    p.pop();
  
  };
};

let myp5 = new p5(s, 'threeD');


console.log(length);



//Draw Button
$(".button").click(function() {
  $('.portrait-svg').addClass("visable");
  console.log("hello!!");
 });
