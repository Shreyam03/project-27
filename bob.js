class Bob{
    constructor(x)
    {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:.5,
        density:1.2,
    }
    this.body=Bodies.circle(x,600,40,options);
    this.radius=40;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}