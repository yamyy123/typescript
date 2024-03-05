interface Point{
     x:number,
    y:number,
    z:number,
    draw:() => void  // in this way we will be able to declare a function in ts for an interface
}

// in interfaces we are able to only give how the variable or functio would be but not how the functionality works 



let drawfunction = (point:Point) => {
    console.log(point.x,point.y,point.z);
    point.draw();// in this the content inside the sample function will run
}

let samplefunction = () =>
{
    console.log("welcome")
}


drawfunction({x:1,y:2,z:3,draw:samplefunction});