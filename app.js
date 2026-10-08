console.log("===== BLOCO 1 - FUNDAMENTOS E VARIÁVEIS =====");

// 1. Variável let
let pontos = 50;
pontos += 10;

console.log("Pontos:", pontos);

// 2. Constante
const MAX_PONTOS = 100;

console.log("Máximo de pontos:", MAX_PONTOS);

try {
MAX_PONTOS = 200;
} catch (erro) {
console.log("Erro ao tentar alterar MAX_PONTOS:", erro.message);
console.log("Isso acontece porque uma constante não pode receber um novo valor.");
}

// 3. Tipos primitivos
let texto = "Olá";
let numero = 10;
let ativo = true;
let indefinido;
let vazio = null;

console.log("string:", typeof texto);
console.log("number:", typeof numero);
console.log("boolean:", typeof ativo);
console.log("undefined:", typeof indefinido);
console.log("null:", typeof vazio);

// 4. Template Literals
let nome = "Pedro";
let idade = 18;

let fraseTemplate = `Meu nome é ${nome} e tenho ${idade} anos.`;
let fraseConcatenada = "Meu nome é " + nome + " e tenho " + idade + " anos.";

console.log(fraseTemplate);
console.log(fraseConcatenada);

console.log("===== BLOCO 2 - FUNÇÕES =====");

// 5. Função declarada e hoisting
console.log("Maior de idade:", ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
return idade >= 18;
}

// 6. Função de expressão
try {
console.log(ehMaiorDeIdadeExpressao(18));
} catch (erro) {
console.log("Erro na função de expressão:", erro.message);
}

const ehMaiorDeIdadeExpressao = function(idade) {
return idade >= 18;
};

console.log(
"Função de expressão:",
ehMaiorDeIdadeExpressao(18)
);

// 7. Função dobro - declarada
function dobroDeclarada(numero) {
return numero * 2;
}

console.log("Dobro declarada:", dobroDeclarada(5));

// 8. Função dobro - expressão
const dobroExpressao = function(numero) {
return numero * 2;
};

console.log("Dobro expressão:", dobroExpressao(5));

// 9. Função dobro - arrow function
const dobroArrow = numero => numero * 2;

console.log("Dobro arrow:", dobroArrow(5));

// 10. Parâmetro com valor padrão
function dobroPadrao(numero = 1) {
return numero * 2;
}

console.log("Dobro sem argumento:", dobroPadrao());

console.log("===== BLOCO 3 - CONTROLE DE FLUXO =====");

// 11. Classificação da nota
function classificarNota(nota) {
if (nota >= 6) {
return "Aprovado";
} else {
return "Reprovado";
}
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 5:", classificarNota(5));

// 12. Switch do semáforo
let corSemaforo = "verde";

switch (corSemaforo) {
case "vermelho":
console.log("Pare");
break;

```
case "amarelo":
    console.log("Atenção");
    break;

case "verde":
    console.log("Siga");
    break;

default:
    console.log("Cor inválida");
```

}

// 13. Tabuada do 5
console.log("Tabuada do 5:");

for (let i = 1; i <= 10; i++) {
console.log(`5 x ${i} = ${5 * i}`);
}

// 14. Contagem regressiva
console.log("Contagem regressiva:");

let contador = 5;

while (contador >= 1) {
console.log(contador);
contador--;
}

// 15. Números pares e ímpares com for
console.log("Pares e ímpares - FOR:");

for (let i = 1; i <= 20; i++) {
if (i % 2 === 0) {
console.log(i, "é par");
} else {
console.log(i, "é ímpar");
}
}

// 16. Números pares e ímpares com while
console.log("Pares e ímpares - WHILE:");

let numeroAtual = 1;

while (numeroAtual <= 20) {
if (numeroAtual % 2 === 0) {
console.log(numeroAtual, "é par");
} else {
console.log(numeroAtual, "é ímpar");
}

```
numeroAtual++;
```

}

// 17. Dia da semana
function diaDaSemana(numero) {
switch (numero) {
case 1:
return "Domingo";
case 2:
return "Segunda-feira";
case 3:
return "Terça-feira";
case 4:
return "Quarta-feira";
case 5:
return "Quinta-feira";
case 6:
return "Sexta-feira";
case 7:
return "Sábado";
default:
return "Número inválido";
}
}

console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 8:", diaDaSemana(8));

console.log("===== FIM DO PROGRAMA =====");
