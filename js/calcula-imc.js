
let titulo = document.querySelector('.titulo');
//muda a propiedade da tag h1
titulo.textContent = 'Aparecida Nutricionista'
let pacientes = document.querySelectorAll(".paciente")//querryselctorAll selciona todas as classes .paciente
console.log(pacientes)

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdpeso = paciente.querySelector(".info-peso")//retorna o peso do paciente
    let peso = tdpeso.textContent;

    let tdaltura = paciente.querySelector(".info-altura")//retorna o altura do paciente
    let altura = tdaltura.textContent;

    let tdimc = paciente.querySelector(".info-imc");


    let alturaVerdadeira = validaltura(altura);
    let pesoVerdadeira = validaPeso(peso);//true ou false

    if (!pesoVerdadeira || !alturaVerdadeira) {

        tdimc.innerHTML = 'Peso ou altura invalida'
        alturaVerdadeira = false;
        pesoVerdadeira = false;
        window.alert("dado de entrada invalido!")

        paciente.classList.add('paciente-invalido');//adiciona uma nova class em paciente no html
    }

    else if (alturaVerdadeira && pesoVerdadeira) {
        let imc = calcularImc(peso, altura);
        tdimc.textContent = imc
        if (imc >= 30 || imc<=20) {
            tdimc.style.color = 'red';
        } else {
            tdimc.style.color = 'green';
        }
    }
}


//passar o calculo do imc para o form através de uma função

function validaPeso(peso){
    if (peso>=0 && peso<800){
        return true;
    }else{
        return false;
    }
}
function validaltura(altura){
    if (altura>=0 && altura<=3.0){
        return true;
    }else{
        return false;
    }
}

function calcularImc(peso, altura) {
    let imc = peso / (altura * altura);

    return imc.toFixed(2);

}