function setup() {
    createCanvas(400, 400);
    background(255);
  }
  function fleur(x,y){ 
    if (isKeyPressed && key == "R") {
      fill(random(255), 0, 0)
    }
    else if (isKeyPressed && key == "J") {
      fill(255, random(255), 0)
    }
    else if (isKeyPressed && key == "B") {
      fill(0, 0, random(255))
    }
    else {
      fill(random(255), random(255), random(255))
    }
    let size = random (10,50)
    noStroke()
   ellipse(x+15,y+15,size,size)
   ellipse(x+45,y+15,size,size)
   ellipse(x+45,y+45,size,size)
   ellipse(x+15,y+45,size,size)
   fill(255,255,255)
   ellipse(x+30,y+30,size,size)
   }
  function draw() {
    fleur(mouseX, mouseY);
    if (mouseIsPressed) {
      clear();
    }
}

//Next step :  POO : transformer le code de façon à utiliser une classe "Fleur".
