module.exports = function toReadable (number) {
 /* 
let numbers= [
    ["one", "eleven"],
    ["two", "twelve"],
    ["three", "thirteen"],
    ["four","fourteen"],
    
  ];
  */

  let numbers=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];

let digit;
let digit_hundreds;
  
digits=number%100;
if(digits==0){
answer=numbers[0];
}else if(digits<=20){
answer=numbers[digits];
}else if(digits>20){
  units=numbers[digits%10];
  dozens=numbers[digits-units]; 
  
answer=numbers[dozens]+' '+numbers[units];
}else{
  answer= 'Error';
}

if(number>99){
  hundreds=numbers[Math.floor(number/100)];
  //answer_hundreds=hundreds+' hundred ';
  answer=hundreds+' hundred '+answer;
}


return answer;

}
