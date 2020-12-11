class Paper{
    constructor(){
   var options={
   isStatic: false,
   restitution: 0.3,
   friction: 0.5,
   density:1.2   
  
   }
   this.body=Bodies.circle(200,200,25,options)
   this.r=25;
   this.image= loadImage("Images/paper.png");
   World.add(world,this.body)
}

display(){
       imageMode (CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.r+35);  
}
}