class Connection{
    constructor(bodyA,bodyB){       //setup()
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10,
        }

       this. connection = Constraint.create(options);
       World.add(world,this.connection)
    
    }

    display()  {            //function draw
        var pointA = this.connection.bodyA.position
        var pointB = this.connection.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }     
}