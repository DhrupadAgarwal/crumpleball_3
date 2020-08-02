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
        this.sling = constraint.create(options);
        world.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.shelf,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            Push();

            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeweight(7);
                line(point.x - 20, point.y, pointB.x -10, pointB.y)
                line(pointA.x - 20, pointA.y, pointB.x + 30, point.y - 3);
                
            }
        }
    }

}