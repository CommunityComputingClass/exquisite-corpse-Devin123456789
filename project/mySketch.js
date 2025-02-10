let myQuestion = "Do you have any pets?"
 
let contents = "";

let placeHolderText = "Enter your answer here..."

let button
let textBox; 

function setup() {
  createCanvas(500, 400);
  button = createButton("show");
  button.position(220,80)
  button.mousePressed(showText)
  
  textBox = createInput(placeHolderText)
  input.style = ('color', 'grey')
  textBox.size(300,40)
  textBox.position(50,200)
  textBox.input(storeText)
  
  background(50);
  fill(255);
  textSize(14);
  text(myQuestion,50,50) 
}

function draw() {
  
}

function showText(){ 
   text(contents,50,200)
   textBox.hide(); 
   
}

function storeText(){
  contents = this.value(); 
}