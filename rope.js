class Rope{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
         pointB: pointB,
         stiffness: 0.04,
         length: 200
    }
    this.rope=Constraint.create(options)
    this.pointB=pointB
    World.add(world,this.rope);



}
attach(body){
    this.rope.bodyA = body;
}

fly(){
    this.rope.bodyA = null;
}
display(){
if(this.rope.bodyA){
push()
stroke("pink")
strokeWeight(4)
line(this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
pop()
}

}





}