module.exports = function toReadable (number) {

let numbers=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
numbers[30]='thirty';
numbers[40]='forty';
numbers[50]='fifty';
numbers[60]="sixty";
numbers[70]="seventy";
numbers[80]="eighty";
numbers[90]="ninety";


let digits;
let answer, units, dozens;
  
digits=number%100;
if(digits==0){
answer=numbers[0];
}else if(digits<=20){
answer=numbers[digits];
}else if(digits>20){
  units=digits%10;
  dozens=digits-units; 
  if(units==0){
  answer=numbers[dozens];
  }else{
  answer=numbers[dozens]+' '+numbers[units];
  }
}else{
  answer= 'Error';
}

//console.log("digits", digits);
//console.log("units", units);
//console.log("dozens", dozens);

if(number>99){
  hundreds=numbers[Math.floor(number/100)];
  if(digits==0){
    answer=hundreds+' hundred';
  }else{
  answer=hundreds+' hundred '+answer;
  }
}

return answer;
}
