export class Pointeee{
    private c:number; // basic private syntax
    
 
     //  constructor( private x?:number,y?:number,z? :number){
     //    this.x= x;
     //    this.y=y;
     //    this.z=z;
     // }  // if we give like this means there will be a error it knows x is private but it didnt knows y and z are public or private
 
     constructor( private x?:number,public y?:number,public z? :number){
         this.x= x;
         this.y=y;
         this.z=z;
      } 
 
 
     private draw = ():any=>{
         console.log(this.c+this.c)
     }
     drawrectangle = ():any=>{
         this.draw();
     }
 
     get C(){
         return this.c;
     }
 
     set C(value){
         this.c = value;
     }
 }