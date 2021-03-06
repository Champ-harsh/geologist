class Pebbles{
    constructor(x,y){
       var options = {
         'restitution': 1.0,
         'friction': 3.0,
         'density': 0.5  
        }
     this.body = Bodies.rectangle(x,y,20,20,options);

     this.width = 20;
     this.height = 20;

     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
         rect(0,0,this.width,this.height);
        pop();
    }
}