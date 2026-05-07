const NOME = "Giovanna Melo";

let tituloProfissional =
    "Engenheira de Software / Técnica em Análise e Desenvolvimento de Sistemas";

let minhaBio =
    "Sou uma profissional dedicada e pragmática " +
    "com uma paixão por resolver problemas complexos e criar soluções inovadoras.";


// FORMATAÇÕES
// ADS
let anoFormaturaADS = 2027;
let mesFormaturaADS = 12;
let diaFormaturaADS = 31;

// Engenharia de Software
let anoFormaturaEngenharia = 2030;
let mesFormaturaEngenharia = 12;
let diaFormaturaEngenharia = 31;


// DATA ATUAL
let dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;
let diaAtualNumero = dataAtual.getDate();


// VARIÁVEIS EXTRAS
let indefinido;
let nulo = null;


// OBJETO
let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};


// TESTE DOS TIPOS
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormaturaADS);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);


// MOSTRAR DADOS NA TELA
document.getElementById("meuNome").innerText = NOME;

document.getElementById("tituloProfissional").innerText =
    tituloProfissional;

document.getElementById("minhaBio").innerText =
    minhaBio;


// FORMATAÇÃO ADS
document.getElementById("formaturaADS").innerText =
    `Formatura em Análise e Desenvolvimento de Sistemas: ${anoFormaturaADS}`;

let anosRestantesADS = anoFormaturaADS - anoAtual;
let mesesRestantesADS = mesFormaturaADS - mesAtual;
let diasRestantesADS = diaFormaturaADS - diaAtualNumero;

if (
    anosRestantesADS <= 0 &&
    mesesRestantesADS <= 0 &&
    diasRestantesADS <= 0
) {

    document.getElementById("tempoADS").innerText =
        "Curso de ADS concluído!";

} else if (anosRestantesADS === 1) {

    document.getElementById("tempoADS").innerText =
        `Tempo restante para ADS: ${anosRestantesADS} ano`;

} else {

    document.getElementById("tempoADS").innerText =
        `Tempo restante para ADS: ${anosRestantesADS} anos`;
}


// FORMATAÇÃO ENGENHARIA
document.getElementById("formaturaEngenharia").innerText =
    `Formatura em Engenharia de Software: ${anoFormaturaEngenharia}`;

let anosRestantesEngenharia =
    anoFormaturaEngenharia - anoAtual;

let mesesRestantesEngenharia =
    mesFormaturaEngenharia - mesAtual;

let diasRestantesEngenharia =
    diaFormaturaEngenharia - diaAtualNumero;

if (
    anosRestantesEngenharia <= 0 &&
    mesesRestantesEngenharia <= 0 &&
    diasRestantesEngenharia <= 0
) {

    document.getElementById("tempoEngenharia").innerText =
        "Curso de Engenharia concluído!";

} else if (anosRestantesEngenharia === 1) {

    document.getElementById("tempoEngenharia").innerText =
        `Tempo restante para Engenharia: ${anosRestantesEngenharia} ano`;

} else {

    document.getElementById("tempoEngenharia").innerText =
        `Tempo restante para Engenharia: ${anosRestantesEngenharia} anos`;
}


// NOTA
let nota = 8;

let aprovado =
    (nota >= 6)
        ? "Aprovado"
        : "Reprovado";

document.getElementById("notaAluno").innerText =
    `Nota: ${nota} - ${aprovado}`;


// DIA DA SEMANA
let diaSemana = dataAtual.getDay() + 1;

let diaEscrito;

switch (diaSemana) {

    case 1:
        diaEscrito = "Domingo";
        break;

    case 2:
        diaEscrito = "Segunda-feira";
        break;

    case 3:
        diaEscrito = "Terça-feira";
        break;

    case 4:
        diaEscrito = "Quarta-feira";
        break;

    case 5:
        diaEscrito = "Quinta-feira";
        break;

    case 6:
        diaEscrito = "Sexta-feira";
        break;

    case 7:
        diaEscrito = "Sábado";
        break;

    default:
        diaEscrito = "Dia inválido";
}

document.getElementById("diaAtual").innerText =
    `Hoje é: ${diaEscrito}`;

// =========================
// QUIZ PERFIL DEV
// =========================

let perguntas = [

    {
        pergunta: "Você prefere trabalhar com...",
        opcao1: "🎨 Visual e design",
        opcao2: "⚙️ Lógica e dados",
        tipo1: "front",
        tipo2: "back"
    },

    {
        pergunta: "O que parece mais interessante?",
        opcao1: "Criar interfaces bonitas",
        opcao2: "Construir sistemas e APIs",
        tipo1: "front",
        tipo2: "back"
    },

    {
        pergunta: "Qual atividade você acha mais divertida?",
        opcao1: "Escolher cores e melhorar experiência do usuário",
        opcao2: "Organizar banco de dados e regras do sistema",
        tipo1: "front",
        tipo2: "back"
    }

];

let perguntaAtual = 0;

let pontosFront = 0;
let pontosBack = 0;


// ELEMENTOS HTML
const perguntaElemento =
    document.getElementById("pergunta");

const botao1 =
    document.getElementById("opcao1");

const botao2 =
    document.getElementById("opcao2");

const resultadoQuiz =
    document.getElementById("resultado-quiz");


// MOSTRAR PERGUNTA
function mostrarPergunta() {

    let pergunta = perguntas[perguntaAtual];

    perguntaElemento.innerText =
        pergunta.pergunta;

    botao1.innerText =
        pergunta.opcao1;

    botao2.innerText =
        pergunta.opcao2;
}


// PROCESSAR RESPOSTA
function responder(tipo) {

    if (tipo === "front") {

        pontosFront++;

    } else {

        pontosBack++;
    }

    perguntaAtual++;

    // VERIFICAR SE ACABOU
    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();
    }
}


// MOSTRAR RESULTADO
function mostrarResultado() {

    document.getElementById("pergunta-container")
        .style.display = "none";

    if (pontosFront > pontosBack) {

        resultadoQuiz.innerText =
            "🎨 Seu perfil combina mais com Front-end!";

    } else if (pontosBack > pontosFront) {

        resultadoQuiz.innerText =
            "⚙️ Seu perfil combina mais com Back-end!";

    } else {

        resultadoQuiz.innerText =
            "😄 Você possui um perfil Full Stack!";
    }
}


// EVENTOS DOS BOTÕES
botao1.addEventListener("click", function () {

    responder(perguntas[perguntaAtual].tipo1);

});

botao2.addEventListener("click", function () {

    responder(perguntas[perguntaAtual].tipo2);

});


// INICIAR QUIZ
mostrarPergunta();