    class Block{
      constructor(x,y,width,height)
      {
          var box_options={
              restitution:0.8,
              friction: 1.0,
              //isStatic: true,
          }
          this.visibility = 225;
          this.body=Bodies.rectangle(x,y,width,height,box_options);
          this.width=width;
          this.height=height;
          World.add(world,this.body)
      }
  
      display()
      { 
        console.log(this.body.speed);
        if(this.body.speed <3)
        {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
          translate(pos.x,pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("yellow");
          rect(0,0,this.width,this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          var angle = this.body.angle;
          var pos = this.body.position;
          push();
          this.visibility = 225;
          pop();
        }
       
        
      
       
      }
       
       
      
  }


