class Hammer {
    constructor(x,y){
    var options = {
     'restitution':0.8,
     'friction':0.3,
     'density':1.0
    }
    this.body = Bodies.rectangle(x,y,100,50,options);
    this.width = 100;
    this.height = 50;

    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        fill(0);
        rect(0,0,this.width,this.height);
        pop();

    }
}