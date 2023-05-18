function setup() {
    createCanvas(512, 512);
    background(220)
    frameRate(100)   
    
   }
     
  
   function draw() {
  
      if (keyIsPressed){
      background(0)
  
    }
     
     noFill()
     stroke(5)
     strokeWeight(1)
    circle(mouseX, mouseY, pmouseX, pmouseY);
      noFill()
      stroke(0)
      strokeWeight(2)
      rect(mouseX, mouseY, pmouseX, pmouseY);
     noFill()
     stroke(1)
     strokeWeight(0.5)
     ellipse(pmouseX, pmouseY, mouseX, mouseY);
     
    
  }
  
     
  function mouseMoved() {
    // Cambia el color de fondo cuando el mouse se mueve
    background(random(255), random(255), random(255));
  
   }