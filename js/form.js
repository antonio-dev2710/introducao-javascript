let adicionaPaciente = document.querySelector('#adicionar-paciente');
adicionaPaciente.addEventListener("click", function (event) {
    //previne o comportamento padrão da página;

    event.preventDefault()
    console.log('oi fui clicado');
    //add o form no js
    let form = document.querySelector("#form-adicionar");

    //tem todas as prop do paciente que um objeto.
    let paciente = obtemPacienteDoFormulario(form);



    //cria a tr e o td do paciente
    let pacienteTr = montarTr(paciente);

    let erros = validarPaciente(paciente);
    console.log(erros);
    //para cada item de erro vai add uma li
    if (erros.length > 0) {
        exibeMesagensDeErro(erros);
        return;//sai imediatamente da função anonima
    }
    //adicionar o pacinete na tabela na tabela
    let tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(pacienteTr);
    form.reset()

    let messagemERRO=ul.querySelector("#menssagens-erro");
    messagemERRO.innerHTML=" "

});

function exibeMesagensDeErro(erros) {
    let ul = document.querySelector("#menssagens-erro");
    ul.innerHTML=" ";
    //aplicacao do foreach(para cada item do seu array vai fzr alguma coisa)
    //erro representa o item de intracao do array pega os elemetos que estão dentro do array automáticamnete
    erros.forEach(function(erro){
        let li = document.createElement("li");
        //o conteúdo vai passar:
        li.textContent = erro;
        ul.appendChild(li)

    });
}
//passar os dados do paciente através de uma função aplicando o conceito de objeto

function obtemPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;

}
// apartir de um pacinte essa função vai criar uma Tr
function montarTr(paciente) {

    //criar um elemento do js para o html com o comando createElement("tag html");

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //isso pode ser locado no appen
    /*let nomeTd = montarTd(paciente.nome,"info-nome");
    let pesoTd = montarTd(paciente.peso,"info-peso");
    let alturaTd = montarTd(paciente.altura,"info-altura");
    let gorduraTd = montarTd(paciente.gordura,"info-gordura");
    let imcTd = montarTd(paciente.imc,"info-imc");*/

    //transferido para funcao montarTd
    /*nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;*/

    //função appendChild(adiciona os filhos presentes no seu conteúdo);
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//criar um td e uma class para cada td
function montarTd(dados, classe) {
    let td = document.createElement('td');
    td.textContent = dados;
    td.classList.add(classe);

    return td;

}
//validação de pacinete
//retornado uma lista de strings
function validarPaciente(paciente) {
    let erros = [];

    

    if (!validaPeso(paciente.peso)) {
        erros.push("peso inválido");
    }
    if (!validaltura(paciente.altura)) {
        erros.push('altura inválida');
    }
    if(paciente.nome.length==0){
        erros.push('nome não pode ser em branco')

    }
    if(paciente.peso.length==0){
        erros.push('peso não pode ser em branco')
    }
    if(paciente.altura.length==0){
        erros.push('altura não pode ser em branco')
    }
    if(paciente.gordura.length==0){
        erros.push('gordura não pode ser em branco')
    }
   
    return erros;
}