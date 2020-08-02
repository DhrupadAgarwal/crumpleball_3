class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 10
        }
        this.shelf = loadImage("images/shelf.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.shelf,200,20,20,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke("black");
            strokeWeight(4);
                line(pointA.x , pointA.y, pointB.x , pointB.y)
                
            
        }
    }

}