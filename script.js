// =======// DADOS PRINCIPAIS

const NOME = "Giovanna Melo";

let tituloProfissional =
  "Engenheira de Software / Técnica em Análise e Desenvolvimento de Sistemas";

let minhaBio =
  "Sou uma profissional dedicada e pragmática " +
  "com uma paixão por resolver problemas complexos e criar soluções inovadoras.";



// DATAS DE FORMAÇÃO


// ADS
let anoFormaturaADS = 2027;
let mesFormaturaADS = 12;
let diaFormaturaADS = 31;

// Engenharia
let anoFormaturaEngenharia = 2030;
let mesFormaturaEngenharia = 12;
let diaFormaturaEngenharia = 31;


// DATA ATUAL
let dataAtual = new Date();

let anoAtual = dataAtual.getFullYear();
let mesAtual = dataAtual.getMonth() + 1;
let diaAtualNumero = dataAtual.getDate();



// VARIÁVEIS 
let indefinido;
let nulo = null;



// OBJETO
let curso = {
  nome: "Sistemas de Informação",
  semestre: 3,
  disciplinaAtual: "Design focado no usuário"
};

// =========================
// HABILIDADES
// =========================

let habilidades = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git e GitHub",
  "Design Responsivo"
];



// ELEMENTOS HTML
const perguntaElemento = document.getElementById("pergunta");
const botao1 = document.getElementById("opcao1");
const botao2 = document.getElementById("opcao2");
const resultadoQuiz = document.getElementById("resultado-quiz");



// QUIZ
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



// FUNÇÕES GERAIS



// MOSTRAR DADOS PESSOAIS
function mostrarDadosPessoais() {

  document.getElementById("meuNome").innerText = NOME;

  document.getElementById("tituloProfissional").innerText =
    tituloProfissional;

  document.getElementById("minhaBio").innerText = minhaBio;
}


// TESTAR TIPOS
function testarTipos() {

  console.log(typeof nulo);
  console.log(typeof indefinido);
  console.log(typeof anoFormaturaADS);
  console.log(typeof minhaBio);
  console.log(typeof tituloProfissional);
  console.log(typeof NOME);
  console.log(typeof curso);
}


// CALCULAR TEMPO RESTANTE
function calcularTempoRestante(
  anoFormatura,
  mesFormatura,
  diaFormatura
) {

  let anos = anoFormatura - anoAtual;
  let meses = mesFormatura - mesAtual;
  let dias = diaFormatura - diaAtualNumero;

  return {
    anos,
    meses,
    dias
  };
}


// MOSTRAR FORMAÇÃO
function mostrarFormacao(
  elementoFormatura,
  elementoTempo,
  nomeCurso,
  anoFormatura,
  mesFormatura,
  diaFormatura
) {

  document.getElementById(elementoFormatura).innerText =
    `Formatura em ${nomeCurso}: ${anoFormatura}`;

  let tempo = calcularTempoRestante(
    anoFormatura,
    mesFormatura,
    diaFormatura
  );

  if (
    tempo.anos <= 0 &&
    tempo.meses <= 0 &&
    tempo.dias <= 0
  ) {

    document.getElementById(elementoTempo).innerText =
      `Curso de ${nomeCurso} concluído!`;

  } else if (tempo.anos === 1) {

    document.getElementById(elementoTempo).innerText =
      `Tempo restante para ${nomeCurso}: ${tempo.anos} ano`;

  } else {

    document.getElementById(elementoTempo).innerText =
      `Tempo restante para ${nomeCurso}: ${tempo.anos} anos`;
  }
}


// MOSTRAR NOTA
function mostrarNota(nota) {

  let aprovado =
    (nota >= 6) ? "Aprovado" : "Reprovado";

  document.getElementById("notaAluno").innerText =
    `Nota: ${nota} - ${aprovado}`;
}


// MOSTRAR DIA DA SEMANA
function mostrarDiaSemana() {

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
}

// MOSTRAR HABILIDADES
function mostrarHabilidades() {

  const lista =
    document.getElementById("listaHabilidades");

  lista.innerHTML = "";

  habilidades.forEach(function (habilidade) {

    lista.innerHTML += `
      <li>${habilidade}</li>
    `;
  });
}

// FUNÇÕES DO QUIZ


// MOSTRAR PERGUNTA
function mostrarPergunta() {

  let pergunta = perguntas[perguntaAtual];

  perguntaElemento.innerText = pergunta.pergunta;

  botao1.innerText = pergunta.opcao1;

  botao2.innerText = pergunta.opcao2;
}


// PROCESSAR RESPOSTA
function responder(tipo) {

  if (tipo === "front") {

    pontosFront++;

  } else {

    pontosBack++;
  }

  perguntaAtual++;

  verificarFimQuiz();
}


// VERIFICAR FIM DO QUIZ
function verificarFimQuiz() {

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


// CONFIGURAR EVENTOS
function configurarEventos() {

  botao1.addEventListener("click", function () {

    responder(perguntas[perguntaAtual].tipo1);
  });

  botao2.addEventListener("click", function () {

    responder(perguntas[perguntaAtual].tipo2);
  });
}



// INICIAR SISTEMA

function iniciarPortfolio() {

  mostrarDadosPessoais();

  testarTipos();

  mostrarHabilidades();

  mostrarFormacao(
    "formaturaADS",
    "tempoADS",
    "Análise e Desenvolvimento de Sistemas",
    anoFormaturaADS,
    mesFormaturaADS,
    diaFormaturaADS
  );

  mostrarFormacao(
    "formaturaEngenharia",
    "tempoEngenharia",
    "Engenharia de Software",
    anoFormaturaEngenharia,
    mesFormaturaEngenharia,
    diaFormaturaEngenharia
  );

  mostrarNota(8);

  mostrarDiaSemana();

  configurarEventos();

  mostrarPergunta();
}


// FORMULÁRIO


const formulario =
  document.getElementById("formularioContato");

const mensagemFormulario =
  document.getElementById("mensagemFormulario");


// VALIDAR EMAIL
function emailValido(email) {

  return email.includes("@") &&
         email.includes(".");
}


formulario.addEventListener("submit", function (evento) {

  evento.preventDefault();

  let nome =
    document.getElementById("nome").value;

  let email =
    document.getElementById("email").value;

  let mensagem =
    document.getElementById("mensagem").value;

  // VALIDAÇÃO

  if (nome.trim() === "") {

    mensagemFormulario.innerText =
      "Digite seu nome.";

    return;
  }

  if (!emailValido(email)) {

    mensagemFormulario.innerText =
      "Digite um email válido.";

    return;
  }

  if (mensagem.length < 10) {

    mensagemFormulario.innerText =
      "A mensagem deve ter pelo menos 10 caracteres.";

    return;
  }

  // ENVIO EMAILJS

  emailjs.send(

    "service_8qosawi",

    "template_jp2y3kf",

    {
      nome: nome,
      email: email,
      mensagem: mensagem
    }

  ).then(function () {

    mensagemFormulario.innerText =
      "Mensagem enviada com sucesso!";

    formulario.reset();

  }).catch(function (erro) {

    mensagemFormulario.innerText =
      "Erro ao enviar mensagem.";

    console.log(erro);
  });

});

// API GITHUB

async function buscarProjetosGithub() {

  const listaProjetos =
    document.getElementById("listaProjetos");

  listaProjetos.innerText =
    "Carregando projetos...";

  try {

    let resposta = await fetch(
      "https://api.github.com/users/wiredgio/repos"
    );

    let projetos = await resposta.json();

    listaProjetos.innerHTML = "";

    projetos.forEach(function (projeto) {

listaProjetos.innerHTML += `

<div class="cardProjeto">

  <h3>${projeto.name}</h3>

  <p>${projeto.description || "Sem descrição"}</p>

  <a href="${projeto.html_url}" target="_blank">
    Ver no GitHub →
  </a>

</div>
`;
    });

  } catch (erro) {

    listaProjetos.innerText =
      "Erro ao carregar projetos.";

    console.log(erro);
  }
}

buscarProjetosGithub();


// MODO ESCURO

const botaoModo =
  document.getElementById("modoEscuroClaro");

let modoEscuro = false;

botaoModo.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  modoEscuro = !modoEscuro;

  botaoModo.innerText =
    modoEscuro
    ? "○ CLARO"
    : "○ MODO";
});

// INICIAR
iniciarPortfolio();