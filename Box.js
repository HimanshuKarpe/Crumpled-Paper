class Box{
    constructor(x,y){
        var option={
            isStatic:true
      }
    
      this.image=loadImage("dustbin.png");
      this.body=Bodies.rectangle(x,y,100,100,option);
      this.width=100;
      this.height=100;

      World.add(world, this.body)
    }
    display(){
     var pos=this.body.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);
    }
}