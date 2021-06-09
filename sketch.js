const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var options ={
    restitution:0.3,
    friction:5,
    density:1
}

var engine, world;
var hammer;
var box1;
var box2;
var box3;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new box(500,600,65,65);
    box2 = new box(600,600,65,65);
    box3 = new box(300,600,65,65);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display();
    box2.display();
    box3.display();
}