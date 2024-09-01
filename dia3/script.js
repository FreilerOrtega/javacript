


function superdigito(n,k){

    var  n= prompt("ingrese un numero :")
    var k= prompt("ingresa un numero :")

    var p = ""
    var suma=0

    for(let pasos=0;pasos<k;pasos++){
        p+=n
    
    }
    console.log("observamos como el numero equivalente a n se repite por la cantidad de k");
    console.log ((p));

    for (const i of p){
        suma += Number(i)
      
           
    }
    console.log("se evidencia como se divide el resultado anterior y se suma uno por uno ");
    console.log(suma); 


    var concor =suma.toString()
    var resultado=0

    for(const i of concor){
        resultado+=Number(i)

    }
    console.log("al final podemos evidenciar la suma de los dos ultimos numero");
    console.log(resultado);

    var resul=suma.toString()
    var fin=0
    
    for(const i of resul){
        fin+=Number(i)

    }
    
    console.log("si llegamos a necesitar otra suma esta ultima suma se encargara de sumar y darle fin");
    
    console.log(fin);
    
    
}

superdigito()
















