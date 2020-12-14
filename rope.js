class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX= offsetX;
        this.offsetY= offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness: 0.04,
            length: 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position; 
        stroke("black");
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x+ this.offfsetX, pointB.y + this.offsetY); 
    }
    
}