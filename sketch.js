const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2;

var a = 0;

function setup()
{
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20);

    console.log(box1);

    // box1 = Bodies.rectangle(50, 50, 50, 100, {isStatic: true});
    // World.add(world, box1);

    // angleMode(DEGREES);

   
}

function draw()
{
    background(0);

    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();

    // translate(100,100);
    // rotate(a);

    // fill("green");
    // rect(0,0,100,50);

    // a = a + 1;

   
}