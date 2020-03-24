var num=5;
console.log("imprimiento la tabla del 5");
for( var i = 0 ; i < 11 ;i++){
  resul=num*i;
  console.log(resul);
}

var num2=5;
var num3=6;
if (num2<num3){
  console.log("tabla del 5");
  for(var i = 0 ; i < 11 ; i++){
    resul2=num2*i;
    console.log(resul2);
  }
  console.log("Tabla del 6");
    for(var i = 0 ; i < 11 ; i++){
      resul3=num3*i;
      console.log(resul3);
    }
}else{
console.log("No es posible procesarlo");
}
