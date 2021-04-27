// In this page i will create several types of classes.

// ball class
class Ball{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 30, {
            isStatic : false,
            density : 5,
            restitution : 1,
        });
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        fill('#81b214')
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 50);
        pop();
    }
}

// creating the required point 
class point{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 10, {
            isStatic : true,
        });
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        fill('#ffcc29')
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 10);
        pop();
    }
}

// creating the ground for the obstacles
class ground{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 500, 15, {
            isStatic : true,
        });
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        fill('#f58634')
        rectMode(CENTER);
        rect(pos.x, pos.y, 500, 15);
        pop();
    }
}

// creating the obstacles
class obs{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height, {
            isStatic : false,
            restitution : 0.3,
            density : 3,
            friction : 2
        });
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        fill('#ce1212')
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}

// class for the Slingshot
class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.01,
            length : 100
        };
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    };

    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){

        if(this.sling.bodyA){
            var bodyApos = this.sling.bodyA.position;
            var bodyBpos = this.sling.bodyB.position;
    
            push();
            strokeWeight(3);
            line(bodyApos.x, bodyApos.y, bodyBpos.x, bodyBpos.y,)
            pop();
        }

    }
}

// creating a class of platform
class plfrm{
    constructor(x, y){
        this.body = Bodies.rectangle(x, y, 1300, 30, {
            isStatic : true,
        });
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        fill('#f58634')
        rectMode(CENTER);
        rect(pos.x, pos.y, 1300, 30);
        pop();
    }
}