class Box 
{
  //constructor() is the function which is called automatically when we create object of the class
  constructor(x, y, width, height) 
  {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        // 'density':1.0
    }

    //this is a keyword
    //keyword is the predefined term in programming language
    //this is replaced by the object we create
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

  display()
  {
    var pos = this.body.position;
    var angle = this.body.angle;

    //by default object in matter.js rotates around top left corner of output area 
    //translate() is used to shift the origin
    //origin is the point around wich the object rotates
    push();
    translate(pos.x, pos.y);
    rotate(angle);

    rectMode(CENTER);
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
