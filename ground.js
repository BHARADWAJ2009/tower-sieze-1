class ground {
    constructor(x,y,width,height){
        var options={
        isStatic:true
        }
     this.width = width;
     this.height=height;
     this.y=y
     this.x = x
     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
     World .add(world,this.body)
    } 
    display(){
      var groundpos = this.body.position;
      push()
       translate(groundpos.x,groundpos.y)
       rectMode(CENTER)
       rotate (this.body.angle)
       fill("YELLOW")
       rect(0,0,this.width,this.height);
       pop()

    



    }
} 