class Paper{
    constructor(x,y){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.image=loadImage("paper.png")
      this.body=Bodies.circle(x,y,30,options);
      this.radius=30;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
    }
}