
let hello = (x:number,y:number,z:number) => 
{
    console.log(x+y+z);
}

hello (4,5,6);

// here if we wanna add another paramter it is hard to change the function right so here we are using point \

let hello1 = (point) => {
    console.log(point.x1+point.y1+point.z1)
}

hello1({x1:'a',y1:5,z1:6})

//see if we give as string also it is taking to prevent this we need to mention which type it is goig to take 

interface Points{
    x1:number
    y1:number
    z1:number 
}

let hello2 = (point:{x1:number,y1:number,z1:number}) => {
    console.log(point.x1+point.y1+point.z1)
}
// but everytime doing like this gives error so now we gonna make it as interface 
//hello2({x1:'a',y1:5,z1:6})

hello2({x1:4,y1:5,z1:6})

// see now the problem is arising 

let hello3 = (point:Points) => {
    console.log(point.x1+point.y1+point.z1)
}

hello3({x1:4,y1:5,z1:6})