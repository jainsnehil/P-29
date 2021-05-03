class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        //this.bodyA=bodyA
        this.pointB=pointB

        this.con=Constraint.create(options)
        World.add(world,this.con)
    }
    fly(){
        this.con.bodyA= null
    }
    display(){
        if(this.con.bodyA){
        
        push ()
        stroke ("red")
        strokeWeight(3)
        line (this.con.bodyA.position.x+20,this.con.bodyA.position.y+24,this.pointB.x+20,this.pointB.y+20)
        pop ()
    }
      
  }
}