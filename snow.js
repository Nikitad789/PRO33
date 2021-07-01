class Snow{
    constructor(x,y){
        // options={
        //     // friction=0.2,
        //     // density=0.3

        // }
        // this.body=Bodies.circle(this.x,this.y,50,50)
        
this.image=loadImage("snow4.webp")

this.x=x
this.y=y
this.width=100
this.height=100

    }
    display(){

        
        push();
        imageMode(CENTER);
        image(this.image,this.x, this.y, this.width, this.height);
        pop();
    }
}