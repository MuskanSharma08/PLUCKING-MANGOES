class Mango {
    constructor(x, y, r){
        var options = {
           isStatic:true,
           restitution:0,
           friction:1
        }
        this.body = Bodies.circle(x,y,50,50,10, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage ("mango.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}