function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke(255);
  }
  else {
    noStroke();
  }
  textSize(12 + (mouseX / width)*72);
  text("Connect, Connect, Connect", 50, 200);
}