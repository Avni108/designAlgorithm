var fixedRectangle;
var movingRectangle;

function setup() {
  createCanvas(800,400);

fixedRectangle = createSprite(400,200,70,70);
fixedRectangle.shapeColor = "green";
fixedRectangle.debug = true;

movingRectangle = createSprite(300,200,50,50);
movingRectangle.shapeColor = "blue";
movingRectangle.debug = true;

}

function draw() {
  background(255,0,157); 
  
movingRectangle.x = World.mouseX;
movingRectangle.y = World.mouseY;

if(fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
&& movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2
&& fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2
&& movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 )
{
fixedRectangle.shapeColor = "red";
movingRectangle.shapeColor = "red";   
}
else{
movingRectangle.shapeColor = "blue";
fixedRectangle.shapeColor = "green";  
}


  drawSprites();
}