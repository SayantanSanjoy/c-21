var movingrect,fixedrect,ball1;









function setup() {
  createCanvas(800,400);

  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(200, 300, 80, 20);
  movingrect.shapeColor="green";
  movingrect.debug=true;

  ball1=createSprite(100, 200, 80, 20);
  ball1.shapeColor="green";
  ball1.debug=true;
}

function draw() {
  background(0);  

movingrect.x=World.mouseX;

movingrect.y=World.mouseY;

 
if(isTouching(movingrect,ball1)){

  ball1.shapeColor="red";
  movingrect.shapeColor="red";


} else{

  ball1.shapeColor="green";
    movingrect.shapeColor="green";






}






  drawSprites();
}





