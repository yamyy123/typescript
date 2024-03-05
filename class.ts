class Pointer{
    x:number;
    y:number;
    z:number;
    draw = ()=>{
        console.log(this.x+this.y)
    }
    drawrectangle = ()=>{
        this.draw();
    }
    c: any;
}

let clas = new Pointer();
clas.x=1;
clas.y=2;
clas.drawrectangle();

let clas2:Pointer = new Pointer();
clas2.x=1;
clas2.y=4;
clas2.drawrectangle();

//we can declare by two also there's no problem