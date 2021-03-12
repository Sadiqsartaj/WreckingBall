const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(width/2,height-30,width,20);
    box1=new Box(900, 335);
    box2=new Box(1000, 335);
    box3=new Box(1100,335);
    box4=new Box(900, 335-100);
    box5=new Box(900+100,335-100);
    box6=new Box(900+200, 335-100);
    box7=new Box(900, 335-200);
    box8=new Box(900+100, 335-200);
    box9=new Box(900+200, 335-200);
    box10=new Box(900, 335-300);
    box11=new Box(900+100, 335-300);
    box12=new Box(900+200, 335-300);
    box13=new Box(900, 335-400);
    box14=new Box(900+100, 335-400);
    box15=new Box(900+200, 335-400);

    ball=new Ball(100,100,50)
    rope=new Rope(ball.body,{x:700,y:0})
    
}



function draw(){
  background(0); 
  
    Engine.update(engine);
    ball.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    rope.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

