class Box2 {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3.7897){
          var angle = this.body.angle;
          var pos = this.body.position;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          fill("red");
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255, this.visibility);
          pop();
        }
      }
      score(){
        if(this.Visibility<0 && this.Visibility > -1005){
          score = score + 1;
        }
  }
}