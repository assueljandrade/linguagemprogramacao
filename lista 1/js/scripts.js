function seguir(){
    alert('Você agora está seguindo Samuel P. Souza')
}
function exe1(){
    //vamos usar DOM para recuperar os dados do HTML
    //DOM - Document Object Model 
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 =  Number(document.getElementById("nro2").value);
    //vamos fazer a subtração 
    let sub = nro1 - nro2
   // alert("A subtração é " + sub)
   document.getElementById("sub").innerText = "O resultado é: " + sub 
}
function exe2(){
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    let nro3 = Number(document.getElementById("nro3").value);
    //multiplicar 3 números
    let sub = nro1 * nro2 * nro3
    document.getElementById("sub").innerText = "O resultado é: " + sub 
}
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);

    let sub =  nro1 / nro2
    document.getElementById("sub").innerText = "O resultado é: " + sub 
}
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);

    let sub = (nro1 * 2 + nro2 * 3 ) / 5;
    document.getElementById("sub").innerText  = "O resultado é: " + sub 
}
function exe5(){
    let nro1 = Number(document.getElementById("nro1").value);

    let sub = nro1 - (nro1 * 10 / 100);
    document.getElementById("sub").innerText = "O preço do produto com 10% de desconto: " + sub
}
function exe6() {
    let salario = Number(document.getElementById("salario").value); // Salário fixo
    let vendas = Number(document.getElementById("vendas").value); // Valor das vendas

    // Calcula a comissão de 4% sobre as vendas
    let comissao = (vendas * 4 )/ 100;

    // Calcula o salário final com a comissão
    let final = salario + comissao;

    // Exibe o resultado formatado com duas casas decimais
    document.getElementById("resultado").innerText = "Comissão: " + comissao + " salário final: " + final; 
}
function exe7() {
    let nro1 = Number(document.getElementById("nro1").value);

    // Calcula o novo peso se engordar 15%
    let pesoEngordar = nro1 + (nro1 * 15 / 100);

    // Calcula o novo peso se emagrecer 20%
    let pesoEmagrecer = nro1 - (nro1 * 20 / 100);
    // Exibe os resultados corretamente no HTML
    document.getElementById("sub").innerHTML = 
        "Se engordar 15%: " + pesoEngordar.toFixed(2) + " kg<br>" +
        "Se emagrecer 20%: " + pesoEmagrecer.toFixed(2) + " kg";
}
function exe8() {
    let nro1 = Number(document.getElementById("nro1").value); // Captura o valor inserido no campo de entrada

    // Verifica se o valor é um número válido e maior que 0
    if (isNaN(nro1) || nro1 <= 0) {
        document.getElementById("sub").innerText = "Por favor, insira um peso válido em kg."; // Exibe uma mensagem de erro
    } else {
        let sub = nro1 * 1000; // Converte de kg para gramas
        document.getElementById("sub").innerText = "O peso em gramas é: " + sub; // Exibe o resultado
    }
}
function exe9() {
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    let altura = Number(document.getElementById("altura").value);

    if (nro1 <= 0 || nro2 <= 0 || altura <= 0 || isNaN(nro1) || isNaN(nro2) || isNaN(altura)) {
        document.getElementById("sub").innerText = "Insira valores válidos!";
    } else {
        let area = ((nro1 + nro2) * altura) / 2;//calcula a área do trapézio  
        document.getElementById("sub").innerText = "A área do trapézio é: " + area.toFixed(2) + " ²";
    }
}
function exe10() {
    let lado = Number(document.getElementById("nro1").value);
    
    if (isNaN(lado) || lado <= 0) {
        document.getElementById("sub").textContent = "Digite um valor válido para o lado!";
        return;
    }

    let area = lado * lado;
    document.getElementById("sub").textContent = `O resultado é: ${area}`;
}
function exe11(){
    let D = Number(document.getElementById("nro1").value);
    let d = Number(document.getElementById("nro2").value);

    let area =(D * d)/2
    document.getElementById("sub").textContent="A área do losango é: " + area;
}
function exe12() {
    let salarioMinimo = Number(document.getElementById("nro1").value);
    let salarioFuncionario = Number(document.getElementById("nro2").value);

    if (salarioMinimo > 0) {
        let quantidade = salarioFuncionario / salarioMinimo;
        document.getElementById("resultado").innerText = 
            "O funcionário recebe: " + quantidade.toFixed(2) + " salários mínimos.";
        } else {
        document.getElementById("resultado").innerText =  
            "Erro: O salário mínimo deve ser maior que zero.";
    }
}
function exe13() {
    // Obtém o valor digitado pelo usuário
    let numero = Number(document.getElementById("nro1").value);
    let resultado = '';

    // Verifica se o número é válido
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Digite um número válido!";
        return;
    }

    // Calcula a tabuada
    for (let i = 0; i <= 10; i++) {
        resultado += `${numero} × ${i} = ${numero * i}<br>`;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = resultado;

    // Efeito de explosão
    const explosao = document.getElementById('explosao');
    explosao.innerHTML = ''; // Limpa a explosão anterior

    const sinais = ['+', '-', '×', '÷'];
    const numeroSinais = 20; // Quantidade de sinais na explosão

    for (let i = 0; i < numeroSinais; i++) {
        const sinal = document.createElement('span');
        sinal.classList.add('sinal');
        sinal.textContent = sinais[Math.floor(Math.random() * sinais.length)];

        const angulo = Math.random() * 2 * Math.PI;
        const distancia = Math.random() * 100 + 50;
        sinal.style.setProperty('--x', `${Math.cos(angulo) * distancia}px`);
        sinal.style.setProperty('--y', `${Math.sin(angulo) * distancia}px`);

        explosao.appendChild(sinal);
    }

    setTimeout(() => {
        explosao.innerHTML = '';
    }, 1000);
    document.getElementById("calcular").addEventListener("click", exe13);
}
function exe14() {
    // Obtém o valor do ano de nascimento e converte para número
    let nascimento = Number(document.getElementById("nro1").value);
    
    // Obtém o valor do ano atual e converte para número
    let anoAtual = Number(document.getElementById("nro2").value);

    // Calcula a idade em anos
    let idadeAnos = nascimento - anoAtual;

    // Calcula a idade em meses (considerando 12 meses por ano)
    let idadeMeses = idadeAnos * 12;

    // Calcula a idade em dias (considerando 365 dias por ano)
    let idadeDias = idadeAnos * 365;

    // Calcula a idade em semanas (considerando 52 semanas por ano)
    let idadeSemanas = idadeAnos * 52;

    // Exibe os resultados
    document.getElementById("resultadoAnos").textContent = "Idade em anos: " + idadeAnos;
    document.getElementById("resultadoMeses").textContent = "Idade em meses: " + idadeMeses;
    document.getElementById("resultadoDias").textContent = "Idade em dias: " + idadeDias;
    document.getElementById("resultadoSemanas").textContent = "Idade em semanas: " + idadeSemanas;
}
function exe15() {
    // Captura os valores dos inputs
    let salario = Number(document.getElementById("nro1").value);
    let conta1 = Number(document.getElementById("conta1").value);
    let conta2 = Number(document.getElementById("conta2").value);

    // Calcula as multas de 2% sobre cada conta
    let multa1 = conta1 * 0.02;
    let multa2 = conta2 * 0.02;

    // Calcula o total a ser pago
    let totalPago = (conta1 + multa1) + (conta2 + multa2);

    // Calcula o salário restante
    let saldoRestante = salario - totalPago;

    // Exibe o resultado
    document.getElementById("resultado").innerText = `O salário restante é: R$${saldoRestante.toFixed(2)}`;
}
    


