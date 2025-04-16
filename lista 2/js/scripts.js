//estrutura de seleção 
//if
let imc = Nummber(document.getElementById("imc").value);
if (imc < 22){
    alert("Peso bom")
}
//if else
if (imc < 24){
    alert("Peso bom")
}
else{
alert("Cuidado")
}
//if else alinhados 
if (imc < 18.5){
    alert("Magreza")
}
else if ((imc>= 25) && (imc < 30)){
    alert("Sobrepeso")
}
else if ((imc >= 30) && (imc < 35)){
    alert("Sobrepeso")
}
else if ((imc >= 30) && (imc < 35)){
    alert("Obesidade I")
}
else if ((imc >= 35) && (imc < 40)){
    alert("Obesidade II")
}
else{
    alert("Obesidade III")
}
function exe1(){
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    //calcular média
    let media = (nota1 + nota2 + nota3 + nota4)/4
    if (media >=7){
        document.getElementById("media").innerText = "Aprovado com média: " + media 
    }
    else{
        document.getElementById("media").innerText = "Reprovado com média: " + media
    }
}
function exe2() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);

    let media = (nota1 + nota2) / 2

    if((media >= 0) && (media < 3)) {
        document.getElementById('mediaAritmetica').textContent = `Reprovado com média: ${media}`;
    } else if((media >= 3) && (media < 7)) {
        document.getElementById('mediaAritmetica').textContent = `Aluno ficou de exame. Média: ${media}`;
    } else if((media >= 7) && (media <= 10)) {
        document.getElementById('mediaAritmetica').textContent = `Aprovado com média: ${media}`;
    } else {
        document.getElementById('mediaAritmetica').textContent = `Problema com as notas.`;
    }
}
function exe3(){
    let numero1 = Number(document.getElementById("nro1").value);
    let numero2 = Number(document.getElementById("nro2").value);

    let menor;
    if (numero1 < numero2){
        menor = numero1;
    }else {
        menor = numero2;   
    }
    document.getElementById("menor").innerHTML = "O número menor é: " + menor
}
function exe4(){
    let numero1 = Number(document.getElementById("nro1").value);
    let numero2 = Number(document.getElementById("nro2").value);
    let numero3 = Number(document.getElementById("nro3").value);

    let maior;
    if(numero1 > numero2 && numero1 > numero3){
        maior = numero1; 
    }else if (numero2 > numero1 && numero2 > numero3){
        maior = numero2;
    }else{
        maior = numero3;
    }
    document.getElementById("maior").innerText = "O maior número é: " + maior
}
function exe5(){
    let operacoes = Number(document.getElementById("selecao").value);
    let numero1 = Number(document.getElementById("nro1").value);
    let numero2 = Number(document.getElementById("nro2").value);
    //utilização do escolha
    switch (operacoes) {
        case 1: document.getElementById("resultado").innerText= (numero1 + numero2)/2;
                break
        case 2: if (numero1 >= numero2){
                    document.getElementById("resultado").innerText = numero1 - numero2;
        }
        else{
            document.getElementById("resultado").innerText = numero2 - numero2;
        } 
        break
        case 3: document.getElementById("resultado").innerText = numero1 * numero2;
        break 
        case 4: if (numero2 != 0){
                    document.getElementById("resultado").innerText = numero1 / numero2;
        }
        else{
                    document.getElementById("resultado").innerText = "Divisão por zero"

        }  
    }      
}
function exe6(){
    let operacao = Number(document.getElementById("selecao").value);
    let numero1 = Number(document.getElementById("nro1").value);
    let numero2 = Number(document.getElementById("nro2").value);
    let resultado = document.getElementById("resultado");

    switch(operacao){
        case 1: 
              resultado.innerHTML = `A potência é: ${numero1 ** numero2}.`;
                break
        case 2:                                                          // (toFixed) formata as casas decimais    
              resultado.innerHTML = `Raiz quadrada: ${Math.sqrt(numero1).toFixed(1)} <br/> e ${Math.sqrt(numero2).toFixed(1)}`;         
                break
        
        case 3:                                        //O valor calculado é inserido diretamente na string usando a sintaxe ${}.
              resultado.innerHTML = `Raiz cúbica: ${Math.cbrt(numero1).toFixed(1)} <br/> e ${Math.cbrt(numero2).toFixed(1)}`;
                break
        default:
              resultado.innerText = "Erro: Opção inválida!";
    }
}
function exe7(){
    let salario = Number(document.getElementById("salario").value);
            //recupera os dados do usuário
    if(salario < 500){
        document.getElementById("novo").innerHTML = "Novo salário: " + (salario + salario * 30 / 100);
    }
    else{
        document.getElementById("novo").innerHTML = "Salário é maior ou igual a 500, sem reajuste, ingrato!"
    }
}
function exe8(){
    let salario = Number(document.getElementById("salario").value);
    let resultado = document.getElementById("novo");

        if(salario <= 300){
            resultado.innerHTML = `O novo salário com 35% : ${salario * 1.35}`;
        }else{(salario > 300)
            resultado.innerHTML = `O novo salário com 15% : ${salario * 1.15}`;

        }
}
function exe9(){
    let saldo = Number(document.getElementById("saldo").value);
    let resultado = document.getElementById("resultado");
    let credito;
    // Primeiro verifica se o saldo é negativo
    if(saldo < 0){
        resultado.innerHTML = "O saldo não pode ser negativo";
        return;
    }
    else if (saldo > 400){
        credito = saldo * 0.30; 
    } else if (saldo === 400) { 
        credito = saldo * 0.25;
    } else if (saldo > 300 && saldo < 400) {
        credito = saldo * 0.20;
    } else if (saldo === 300) { 
        credito = saldo * 0.20;
    } else if (saldo > 200 && saldo < 300) { 
        credito = saldo * 0.20;
    } else if(saldo <= 200){ 
        credito = saldo * 0.10;
    }
    
    resultado.innerHTML = `Saldo médio: R$${saldo.toFixed(2)}<br>O crédito especial é: R$${credito.toFixed(2)}`;
}
function exe10(){
    let custo = Number(document.getElementById("custo").value);
    let distribuidor = 0
    let imposto = 0
    if (custo >= 0 && custo < 12000){
        distribuidor = custo * 5 /100
        imposto = 0
    }
    else if (custo >= 12000 && custo <= 25000){
        distribuidor = custo * 10 / 100
        imposto = custo * 15 / 100
    }
    else if(custo > 25000){ //custo negativo 
        distribuidor = custo * 15 / 100
        imposto = custo * 20 / 100
    }
    else{
    document.getElementById("consumidor").innerHTML = "Custo negativo"
    return //sai da função 
    }
    let consumidor = custo + distribuidor + imposto 
    document.getElementById("consumidor").innerHTML = `Custo da fábrica ${custo} <br/>
    Distribuiidor ${distribuidor} <br/> Imposto ${imposto} <br/> Valor ao consumidor ${consumidor}`
}