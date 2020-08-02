const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var office
var shooter

function preload() {
    office = loadImage("office1.jpg")
}

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,390,1600,20)
    paper = new Paper(200,200)
    dustbin = new Dustbin(1000,290,200,20)

    shooter = new Shooter(paper.body,{x:200, y:100})

}

function keyPressed (){
    if (keyCode === UP_ARROW){
        
        Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1100});

    }
}

function draw(){
    background("red");
    image(office,800,200,1600,500)
    Engine.update(engine);  
    ground.display();
    dustbin.display();
    paper.display();
    shooter.display();
    //text("x: "+mouseX+" ,y: "+mouseY,mouseX,mouseY)
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    shooter.fly();
}
