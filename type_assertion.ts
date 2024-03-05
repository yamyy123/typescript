let colour1= 'red';
let colour2;
colour2= 'blue';
let colour3 = (<string>colour2).endsWith('e');
let colour4 = (colour2 as string).endsWith('e');
console.log(colour4);
