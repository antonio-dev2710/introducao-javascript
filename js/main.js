

//necessário:
// criar uma td.
//e jogar um appenChild com cada tr para ir incluindo cada modelo.
//olhar  linha 35-47.
//olhar  linha 105-103.


function TirarCarro(buscar) {
    //array dos carros
    let carros = ['uno', 'renegade', 'camaro', 'kwid'];
    //buscar carro escolhido
    //let buscar = "camaro";
    let indice = carros.indexOf(buscar);

    //retirar carro escolhido do array
    indice = carros.indexOf(buscar);
    //1 representa a quantida, nesse caso agnt só quer retirar um carro.
    carros.splice(indice,1);

    //adicionado os carros
    carros.forEach(function (add) {

        console.log(`tabela \n ${add}`)
        

    }); 

        



    
}

TirarCarro('uno')


