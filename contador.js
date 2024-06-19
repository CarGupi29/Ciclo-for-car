function imprimirPatron(){
    var limite = 10;
       for (var i = 1; i<= 3; i++){
        console.log('*'.repeat(i));
       }
       for (var i = 5, contador = 3; contador < limite; i += 2){
        console.log('*'.repeat(i));
        contador++;
       }
    }
    imprimirPatron();
