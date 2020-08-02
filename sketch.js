const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var office

function preload() {
    office = loadImage("images/office1.jpg")
}

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,390,1600,20)
    paper = new Paper(200,100)
    dustbin = new Dustbin(1000,290,200,20)

    shooter = new Shooter(paper.body,{x:200, y:50})

}

function keyPressed (){
    if (keyCode === UP_ARROW){
        
        Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1100});

    }
}

function draw(){
    background(0);
    image(office,800,200,1600,500)
    Engine.update(engine);  
    ground.display();
    dustbin.display();
    paper.display();
    shooter.display();
    //text("x: "+mouseX+" ,y: "+mouseY,mouseX,mouseY)
}

function mouseDragged(){
    matter.body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    shooter.fly();
}