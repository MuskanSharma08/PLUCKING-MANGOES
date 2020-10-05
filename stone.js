class Stone{
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,40, 40, 10,options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage ("stone.png");
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
