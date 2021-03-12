class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction: 0.4,
            density:0.04
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.width=radius
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        stroke("red")
        strokeWeight(4);
        fill("yellow");
        ellipse(0, 0, this.width)    
        pop();
    }



}

