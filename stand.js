class Stand{
constructor(x,y,width,height){
var options={
 isStatic:true
}
this.width=width
this.height=height
this.x=x
this.y=y
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
World.add(world,this.body)
}
display(){
  var standpos = this.body.position
push()
translate(standpos.x,standpos.y)
 rectMode(CENTER)
 fill("ORANGE")
 rotate(this.body.angle)
 rect(0,0,this.width,this.height)
 push()

}
}