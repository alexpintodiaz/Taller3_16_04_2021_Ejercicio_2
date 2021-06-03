
let  list = [] ;
let opcion;


do {

    let n;
	
	 opcion = parseInt(prompt("Quiere ingresar otro numero? \n 1. Si \n2. No"));
	
	switch(opcion){
		case 1: 
		list.push(parseInt(prompt("Por favor digite un numero")));
        break;
		case 2:
		
		function compare(x, y) {
		  return x - y;
		}

		list = list.sort(compare);
		console.log('En orden con función:', list);
		let max = parseInt(list.length-1);

        console.log(max);
		console.log(`El numero mayor ingresado es: ${list[max]}`);
		console.log(`Cantidad total de numeros ${list.length}`);
		console.log(list);
		break;
		default:
		alert(`La opcion no existe, ERROR`);
		break;
		}	

}while (opcion==1)

