class Box{
  constructor(x, y, width, height){
    var options = {
      isStatic : false
    }
    this.visibility = 255
  


 
 if(this.body<0) {
  this.visibility<0 && this.visibility>-10
 }


    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
     this.height = height;
     World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push() ;
      translate(pos.x,pos.y)
      rotate(angle);
      angleMode(RADIANS);
      strokeWeight(5)
      stroke ("black")
      fill("white");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }

}
