class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction: 0.4,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        this.width=100
        this.height=100
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        stroke("blue")
        strokeWeight(4);
        fill("light brown");
        rect(0, 0,this.width,this.height);     
        pop();
    }



}

