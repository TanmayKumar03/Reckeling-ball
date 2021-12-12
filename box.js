class Box {
    constructor(x,y,w,h){
        var ab = {
            restitution:0.8,
            friction:1.0,
            density:0.04
        }
        this.body = Bodies.rectangle(x,y,w,h,ab);
        World.add(world,this.body);
        this.width= w;
        this.height=h;
    }
    display()
    {
        var a= this.body.position;
        var b = this.body.angle;
        push();
        translate(a.x,a.y);
        rotate(b);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black")
        fill("brown");
        rect(0,0,this.width,this.height)
        pop();
    }
}