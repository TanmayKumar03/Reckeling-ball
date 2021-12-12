class Ground {
    constructor(x,y,w,h){
        var ab = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,ab);
        World.add(world,this.body);
        this.width= w;
        this.height=h;
    }
    display()
    {
        var a= this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(a.x,a.y,this.width,this.height)
        
    }
}