var Origen = [];

function generar() {
  var a = (Math.random(0,1))*15;
  return Math.floor(a);
}

for (var i = 0; i < 10; i++){
  Origen[i] = generar();
}

console.log(" ORIGEN: "+Origen);
var Destino = [];
//destino
Destino = Origen;
function ordenar(a, x){
  return a-x;
}

Destino.sort(ordenar)
console.log(" DESTINO: "+Destino);
