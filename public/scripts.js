function ranColour() {
  return "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

function start() {
  setInterval(draw, 100);
}

function draw() {
  // get the canvas element using the DOM
  var canvas = document.getElementById('circles');

  // Make sure we don't execute when canvas isn't supported

      //Red Square

      function dSqu() {
          context.strokeStyle = "rgb(255,215,0)"; //Yellow Outline
          context.fillStyle = "rgb(200,0,0)";
          context.lineWidth = 4; //Stroke Thickness
          context.fillRect(75, 75, 137, 137);
          context.strokeRect(75, 75, 137, 137); //Outline
      }

      function dCir() {
          //Purple Circle
          context.beginPath();
          context.arc(380, 137, 100, 0, Math.PI * 2, true);
          context.fillStyle = "rgb(200,80,200)";
          context.fill();
          context.lineWidth = 4; //Stroke Thickness
          context.strokeStyle = "rgb(255,215,0)";
          context.stroke();
      }

      function dTri() {
          //Green Triangle
          context.beginPath();
          context.fillStyle = "rgb(0,200,0)";
          context.moveTo(100, 100);
          context.lineTo(300, 100);
          context.lineTo(200, 200);
          context.lineTo(100, 100);
          context.fill();
          context.strokeStyle = "rgb(255,215,0)";
          context.stroke();
          ctx.closePath();
      }

      dSqu();
      dCir();
      dTri();

    }

//This is not final
// function draw() {
//   backgroundColor.setRed(128 + 128 * sin(millis() / 1000));
//   background(ranColour());


//   var circleX = random(width);
//   var circleY = random(height);
//   var circleSize = random(10, 100);

//   ellipse(circleX, circleY, circleSize);


//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();

//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
  
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
//   beginShape();
//   fill(ranColour());
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   curveVertex(random(width), random(height));
//   endShape();
// }

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

 //Header
 var csstricks = {
  
  init: function() {
    csstricks.randomizeBackgrounds();
  },

  generateRandomPoints: function(minSpread, maxSpread) {
    let points = {};
    points.a = `${getRandomInt(800, 1000)},${getRandomInt(minSpread, maxSpread)}`;
    points.b = `${getRandomInt(600, 800)},${getRandomInt(minSpread, maxSpread)}`;
    points.c = `${getRandomInt(400, 600)},${getRandomInt(minSpread, maxSpread)}`;
    points.d = `${getRandomInt(200, 400)},${getRandomInt(minSpread, maxSpread)}`;
    points.e = `${getRandomInt(0, 200)},${getRandomInt(minSpread, maxSpread)}`;
    return points;
  },

  randomizeHeader: function() {
    let newPoints = csstricks.generateRandomPoints(120, 190);
    let downFacingPoints = `M-4,-4 L1004,-4 L1004,100 L${newPoints.a} L${newPoints.b} L${newPoints.c} L${newPoints.d} L${newPoints.e} L-4,100 L-4,-4 Z`;
    $("#jagged-top").attr("d", downFacingPoints);
  },

  randomizeBackgrounds: function() {
    csstricks.randomizeHeader();
    requestInterval(function() {
      csstricks.randomizeHeader();
    }, 2000);
  },

};

csstricks.init();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function requestInterval(fn, delay) {
  var requestAnimFrame = (function () {
    return window.requestAnimationFrame || function (callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
  })(),
  start = new Date().getTime(),
  handle = {};
  function loop() {
    handle.value = requestAnimFrame(loop);
    var current = new Date().getTime(),
    delta = current - start
    if (delta >= delay) {
      fn.call();
      start = new Date().getTime();
    }
  }
  handle.value = requestAnimFrame(loop);
  return handle;
};