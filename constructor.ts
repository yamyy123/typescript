class Pointers{
    x:number |undefined;
    y:number| undefined;
    z:number | undefined;
    // constructor(x:number,y:number,z:number){
    //    this.x= x;
    //    this.y=y;
    //    this.z=z;
    // }  // like this we can do when we definitely need a constructor 
    //but when you need as no matter how many arguments u send..the which u doesnt sended should reamin undefined we need o add ? mark before colon


     constructor(x?:number,y?:number,z? :number){
       this.x= x;
       this.y=y;
       this.z=z;
    } 


    draw = ():any=>{
        console.log(this.x+this.y)
    }
    drawrectangle = ():any=>{
        this.draw();
    }
}

let clas = new Pointers(4,8,9);

clas.draw();
let clas2 = new Pointers(111,222,5);

clas2.draw();
