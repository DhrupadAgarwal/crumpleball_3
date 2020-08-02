class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.bottomBody=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.bottomBody)

        this.leftBody=Bodies.rectangle(x-width/2,y-width/2,height,width,options)
        World.add(world,this.leftBody)

        this.rightBody=Bodies.rectangle(x+width/2,y-width/2,height,width,options)
        World.add(world,this.rightBody)

        this.width=width
        this.height=height

        this.image = loadImage("images/dustbin.png");

    }
    display(){
       imageMode(CENTER)
        image(this.image,this.bottomBody.position.x,this.bottomBody.position.y, this.width, this.width);



      }
}