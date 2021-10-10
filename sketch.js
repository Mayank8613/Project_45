var canvas;
var Jack, Hydrant, backgroundImage;

function preload(){
  JackImage = loadImage("Jack Project 44.webp");
  HydrantImage = loadImage("Fire Hydrant Project 44.jpg")
  backgroundImage = loadImage("Screen Shot 2021-10-10 at 11.51.33 AM.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  Jack = createSprite(100,600);
  Jack.addImage(JackImage);
  Jack.scale = 0.15;
  Hydrant = createSprite(500,650);
  Hydrant.addImage(HydrantImage);
  Hydrant.scale = 0.1;
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}