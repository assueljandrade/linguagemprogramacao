function exe1() {
    let A = Number(document.getElementById("valorA").value);
    let B = Number(document.getElementById("valorB").value);
    let C = Number(document.getElementById("valorC").value);
    let D = Number(document.getElementById("valorD").value);

    let i = 1; // variável que conta quantas vezes o laço vai se repetir
    let aux; // será utilizado nas trocas das variáveis A, B, C e D

    while (i <= 3) {
        if (A > B) {
            aux = A; A = B; B = aux;
        }
        if (B > C) {
            aux = B; B = C; C = aux;
        }
        if (C > D) {
            aux = C; C = D; D = aux;
        }
        i++; // incrementa i
    }

    document.getElementById("troca").innerHTML = 
        `Ordem crescente: ${A}, ${B}, ${C}, ${D} <br> Ordem decrescente: ${D}, ${C}, ${B}, ${A}`;
}
function exe2() {
    let preco = 5.0
    let qtde = 120
    const despesa = 200 
    let lucro // guarda o luccro do preço do teatro
    let saida = ""
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        saida = saida + `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td>${despesa} </td> <td>${lucro}</td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26 
    }
    document.getElementById("tabela").innerHTML = `<br> ${saida}`;
}
function exe3() {
    let faixa1 = 0, faixa2 = 0, faixa3 = 0, faixa4 = 0, faixa5 = 0 
    let idade
    //estrutura de repetição "for"
    //let i  = 1 será executado uma única vez, logo no início
    //i <= 8 será executado toda vez, antes de entrar no loop
    //i++ será executado toda vez, antes de ir para a próxima interação
    for (let i = 1; i <=8; i++){
        idade = Number(prompt(`Informe a idade ${i}`))
        if (idade >= 0 && idade <= 15){
            faixa1++
        }
        else if (idade > 15 && idade <= 30){
            faixa2++
        }
        else if( idade > 30 && idade <= 45){
            faixa3++
        }
        else if ( idade > 45 && idade <=60){
            faixa4++
        }
        else if (idade > 60){
            faixa5++
        }
        else {
            alert(`Idade negativa`)
        }
    }
    document.getElementById("resultado").innerHTML =
    `Faixa 1 (0-15): ${faixa1}<br/>
     Faixa 2 (16-30): ${faixa2}<br/>
     Faixa 3 (31-45): ${faixa3}<br/>
     Faixa 4 (46-60): ${faixa4}<br/>
     Faixa 5 (60+): ${faixa5}<br/>
     <br/>
     % Faixa 1: ${(faixa1/8*100).toFixed(2)}%<br/>
     % Faixa 5: ${(faixa5/8*100).toFixed(2)}%`
}
function exe4() {
    //recupera o número forcenido pelo usuário
    let numero = Number(document.getElementById("numero").value)
    let resultado = ""
    //estrutura de repetição para calcular a tabuada do número  
    for(let i = 0; i<=10; i++){
        resultado += `${numero} * ${i} = ${numero * i} <br/>`
    }
    document.getElementById("resultado").innerHTML = resultado
    
} 
function exe5() {
    let saida = "";
    
    // Cabeçalho da tabela
    saida += `<tr>
                <th>Operação</th>
                <th>Resultado</th>
              </tr>`;
    
    // Gerar tabuadas de 1 a 10
    for (let numero = 1; numero <= 10; numero++) {
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            const resultado = numero * multiplicador;
            saida += `<tr>
                        <td>${numero} × ${multiplicador}</td>
                        <td>${resultado}</td>
                      </tr>`;
        }
        // Adiciona uma linha vazia entre tabuadas
        saida += `<tr><td colspan="3" style="height: 10px;"></td></tr>`;
    }
    
    document.getElementById("tabuada").innerHTML = saida;
}
function exe6() {
    let codigo, valor, totalVista = 0, totalPrazo = 0
    for(let i=1; i <=5; i++){
        do{
            codigo = prompt(`Digite V (à vista) ou P (a prazo)`).toUpperCase()
        }
        while ( codigo != 'V' && codigo !='P')
        valor = Number(prompt(`Digite o valor da trasação`))
        if (codigo == 'V'){
            totalVista += valor
        }
        else{
            totalPrazo += valor
        }
    }
    document.getElementById("resultado").innerHTML = `Total à vista ${totalVista} Total a prazo ${totalPrazo} e total geral ${totalPrazo + totalVista}`

}
function exe7() {
    let idade, altura, peso, idade50=0, idade10e20=0, somaAltura=0, peso40=0
    for(let i=1; i<=5; i++){
        do{
            idade = Number(prompt(`Informe a idade`))
        }
        while (idade < 0)
        altura = Number(prompt(`Informe a altura`))
        peso = Number(prompt(`Informe o peso`))
        if (idade > 50){//item 1
            idade50++
        }
        if (idade >= 10 && idade <= 20){//item 2
            idade10e20++//conta as pessoas com idade entre 10 e 20
            somaAltura+=altura
        }
        if (peso <40){//item 3
            peso40++
        }
    }
    document.getElementById("resultado").innerHTML = `<br/> Item 1 ${idade50} <br/> Item 2 ${somaAltura/idade10e20} <br/> Item 3 ${peso40}`
}
function exe8() {
    let idade, altura, peso, olhos, cabelos;
    let idadePesoCount = 0;
    let somaIdadesAlturaBaixa = 0;
    let countAlturaBaixa = 0;
    let olhosAzuis = 0;
    let ruivosNaoAzuis = 0;
    for(let i = 1; i <= 4; i++) {
        do {
            idade = Number(prompt(`Pessoa ${i} - Informe a idade:`));
        } while (idade < 0);
        do {
            peso = Number(prompt(`Pessoa ${i} - Informe o peso (kg):`));
        } while (peso <= 0);
        do {
            altura = Number(prompt(`Pessoa ${i} - Informe a altura (m):`));
        } while (altura <= 0);
        do {
            olhos = prompt(`Pessoa ${i} - Cor dos olhos (A=azul, P=preto, V=verde, C=castanho):`).toUpperCase();
        } while (!['A','P','V','C'].includes(olhos));
        do {
            cabelos = prompt(`Pessoa ${i} - Cor dos cabelos (P=preto, C=castanho, L=louro, R=ruivo):`).toUpperCase();
        } while (!['P','C','L','R'].includes(cabelos));
        if (idade > 50 && peso < 60) {
            idadePesoCount++;
        }
        if (altura < 1.5) {
            somaIdadesAlturaBaixa += idade; //somaIdadesAlturaBaixa = somaIdadesAlturaBaixa + idade;

            countAlturaBaixa++;
        }
        if (olhos === 'A') {
            olhosAzuis++;
        }
        if (cabelos === 'R' && olhos !== 'A') {
            ruivosNaoAzuis++;
        }
    }
    let mediaIdade = countAlturaBaixa > 0 ? (somaIdadesAlturaBaixa / countAlturaBaixa).toFixed(2) : 0;
    let porcentagemAzuis = ((olhosAzuis / 4) * 100).toFixed(2);
    let resultado = `
        Quantidade com idade > 50 e peso < 60kg: ${idadePesoCount}<br>
        Média das idades com altura < 1.5m: ${mediaIdade}<br>
        Porcentagem de pessoas com olhos azuis: ${porcentagemAzuis}%<br>
        Quantidade de ruivos que não têm olhos azuis: ${ruivosNaoAzuis}
    `;
    document.getElementById("resultado").innerHTML = resultado;
}
function exe9() {
    let idade, peso, altura;
    let somaIdades = 0;
    let pesoAltura = 0;
    let totalAltos = 0;
    let idadeAltura = 0;
    for (let i = 1; i <= 4; i++) {
        do {
            idade = Number(prompt(`Pessoa ${i} - Informe a idade:`));
        } while (idade < 0);
        do {
            peso = Number(prompt(`Pessoa ${i} - Informe o peso:`));
        } while (peso < 0);
        do {
            altura = Number(prompt(`Pessoa ${i} - Informe a altura:`));
        } while (altura < 0);
        if (peso > 90 && altura < 1.5) {
            pesoAltura++;
        }
        if (altura > 1.9) {
            totalAltos++;
            if (idade >= 10 && idade <= 30) {
                idadeAltura++;
            }
        }
        somaIdades += idade;
    }
    let mediaIdades = somaIdades / 4;
    let porcentagem = totalAltos > 0 ? (idadeAltura / totalAltos) * 100 : 0;
    let resultado = `
        Média das idades das pessoas: ${mediaIdades.toFixed(2)}<br>
        Quantidade de pessoas com peso > 90kg e altura < 1.5m: ${pesoAltura}<br>
        Porcentagem de pessoas entre 10 e 30 anos com altura > 1.9m: ${porcentagem.toFixed(2)}%<br>
    `;
    document.getElementById("resultado").innerHTML = resultado;
}

