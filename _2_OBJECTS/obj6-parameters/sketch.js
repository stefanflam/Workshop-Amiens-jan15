///////////////////////////////////
// Jeff Guess                    //
// pratiques-algorithmiques.net  //
// github.com/jguess             //
///////////////////////////////////

var blob, blob2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(125);
  stroke(255);

  blob = new Blob(width/2, height/2, 100, -10, 10);
  blob2 = new Blob(100, 100, 20, -1, 1); 
}

function draw() {
  background(50);
  
  blob.move();
  blob.display();

  blob2.move();
  blob2.display();
}