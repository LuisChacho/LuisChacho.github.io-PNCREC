// BANCO DE RECUPERACIÓN (50 REACTIVOS CON RESPUESTAS CORRECTAS DIVERSIFICADAS A, B, C, D)
const questionsBank = [
  { id: 1, topic: "Simplificación Algebraica", q: "Simplifique la siguiente expresión numérica: $$\\frac{(3^2 \\cdot 9^{-1})^3}{27^{-1}}$$", options: ["81", "9", "27", "3"], correct: 2, explanation: "Expresando en base 3: $\\frac{(3^2 \\cdot 3^{-2})^3}{3^{-3}} = \\frac{(3^0)^3}{3^{-3}} = \\frac{1}{3^{-3}} = 3^3 = 27$ (Opción C)." },
  { id: 2, topic: "Simplificación Algebraica", q: "Al simplificar la expresión $$\\sqrt[4]{a^8 b^{12} c^{16}}$$, se obtiene:", options: ["$a^2 b^3 c^4$", "$a b^2 c^3$", "$a^4 b^3 c^2$", "$a^2 b^2 c^2$"], correct: 0, explanation: "Dividiendo exponentes entre 4: $a^{8/4} b^{12/4} c^{16/4} = a^2 b^3 c^4$ (Opción A)." },
  { id: 3, topic: "Simplificación Algebraica", q: "Reduzca la siguiente fracción exponencial: $$\\frac{y^{-3} \\cdot y^8}{y^{-2}}$$", options: ["$y^3$", "$y^7$", "$y^{-7}$", "$y^5$"], correct: 1, explanation: "Sumando y restando exponentes: $\\frac{y^{5}}{y^{-2}} = y^{5 - (-2)} = y^7$ (Opción B)." },
  { id: 4, topic: "Jerarquía de Operadores", q: "Determine el resultado numérico de: $$15 - 2 \\cdot (5 - 3^2) + 12 \\div 4$$", options: ["18", "22", "14", "26"], correct: 3, explanation: "Paréntesis: $5 - 9 = -4$. Jerarquía: $15 - 2(-4) + 3 = 15 + 8 + 3 = 26$ (Opción D)." },
  { id: 5, topic: "Jerarquía de Operadores", q: "Calcule el valor de: $$8 + 3 \\cdot [2 - 5 \\cdot (1 - 4)]$$", options: ["45", "59", "37", "51"], correct: 1, explanation: "Paréntesis: $1-4 = -3$. Corchetes: $2 - 5(-3) = 17$. Final: $8 + 3(17) = 59$ (Opción B)." },
  { id: 6, topic: "Jerarquía de Operadores", q: "Resuelva la expresión: $$\\frac{24 - 3 \\cdot 2^3}{5 - 2}$$", options: ["0", "2", "4", "1"], correct: 0, explanation: "Numerador: $24 - 3(8) = 0$. $0/3 = 0$ (Opción A)." },
  { id: 7, topic: "Expresiones Algebraicas", q: "Al factorizar la diferencia de cuadrados $4x^2 - 25y^2$, resulta:", options: ["$(2x - 5y)^2$", "$(4x + 25y)(x - y)$", "$(2x + 5y)(2x - 5y)$", "$(2x + 25y)(2x - y)$"], correct: 2, explanation: "Aplicando $a^2 - b^2 = (a+b)(a-b) \\Rightarrow (2x + 5y)(2x - 5y)$ (Opción C)." },
  { id: 8, topic: "Expresiones Algebraicas", q: "Desarrolle el binomio al cuadrado $(3x - 2y)^2$:", options: ["$9x^2 - 4y^2$", "$9x^2 + 12xy + 4y^2$", "$3x^2 - 6xy + 2y^2$", "$9x^2 - 12xy + 4y^2$"], correct: 3, explanation: "$(a-b)^2 = a^2 - 2ab + b^2 \\Rightarrow 9x^2 - 12xy + 4y^2$ (Opción D)." },
  { id: 9, topic: "Expresiones Algebraicas", q: "Factorice completamente el trinomio $x^2 - 7x + 12$:", options: ["$(x - 3)(x - 4)$", "$(x + 3)(x + 4)$", "$(x - 6)(x - 2)$", "$(x - 12)(x + 1)$"], correct: 0, explanation: "Buscamos números que sumen $-7$ y multipliquen $+12$: $-3$ y $-4$ (Opción A)." },
  { id: 10, topic: "Expresiones Algebraicas", q: "Simplifique la fracción algebraica $$\\frac{x^2 - 25}{x - 5}$$", options: ["$x - 5$", "$x + 5$", "$x + 25$", "$5x$"], correct: 1, explanation: "$\\frac{(x-5)(x+5)}{x-5} = x + 5$ (Opción B)." },
  { id: 11, topic: "Expresiones Algebraicas", q: "Calcule el valor numérico de $3m^2 - 2mn + n^2$ para $m = -1$ y $n = 3$:", options: ["12", "15", "18", "21"], correct: 2, explanation: "$3(-1)^2 - 2(-1)(3) + (3)^2 = 3 + 6 + 9 = 18$ (Opción C)." },
  { id: 12, topic: "Ecuaciones Planteamiento", q: "Resuelva la siguiente ecuación lineal: $$4(x - 3) + 2 = 3(x + 1)$$", options: ["$x = 11$", "$x = 9$", "$x = 15$", "$x = 13$"], correct: 3, explanation: "$4x - 10 = 3x + 3 \\Rightarrow x = 13$ (Opción D)." },
  { id: 13, topic: "Ecuaciones Planteamiento", q: "Un número sumado con su cuarta parte resulta en 45. ¿Cuál es dicho número?", options: ["36", "32", "40", "28"], correct: 0, explanation: "$x + \\frac{x}{4} = 45 \\Rightarrow \\frac{5x}{4} = 45 \\Rightarrow x = 36$ (Opción A)." },
  { id: 14, topic: "Ecuaciones Planteamiento", q: "La suma de tres números enteros consecutivos es 96. Calcule el número intermedio.", options: ["31", "32", "33", "30"], correct: 1, explanation: "$3x = 96 \\Rightarrow x = 32$ (Opción B)." },
  { id: 15, topic: "Ecuaciones Planteamiento", q: "Resuelva para $x$: $$\\frac{3x - 2}{4} = \\frac{x + 6}{2}$$", options: ["$x = 10$", "$x = 12$", "$x = 14$", "$x = 8$"], correct: 2, explanation: "$6x - 4 = 4x + 24 \\Rightarrow 2x = 28 \\Rightarrow x = 14$ (Opción C)." },
  { id: 16, topic: "Ecuaciones Planteamiento", q: "El triple de un número disminuido en 12 equivale al doble del mismo número aumentado en 8. El número es:", options: ["16", "24", "18", "20"], correct: 3, explanation: "$3x - 12 = 2x + 8 \\Rightarrow x = 20$ (Opción D)." },
  { id: 17, topic: "Ecuaciones Planteamiento", q: "Dos chaquetas cuestan juntas $110. Si una cuesta $30 más que la otra, ¿cuál es el precio de la más barata?", options: ["$40", "$35", "$45", "$50"], correct: 0, explanation: "$x + (x + 30) = 110 \\Rightarrow 2x = 80 \\Rightarrow x = 40$ (Opción A)." },
  { id: 18, topic: "Ecuaciones Planteamiento", q: "En un examen de 40 preguntas, cada acierto otorga 5 puntos y cada error descuenta 2 puntos. Si contestó todo y obtuvo 130 puntos, ¿cuántas acertó?", options: ["28", "30", "32", "25"], correct: 1, explanation: "$5C - 2(40 - C) = 130 \\Rightarrow 7C = 210 \\Rightarrow C = 30$ (Opción B)." },
  { id: 19, topic: "Ecuaciones Planteamiento", q: "La suma de dos números es 120 y su diferencia es 40. Determine el número menor.", options: ["50", "30", "40", "45"], correct: 2, explanation: "$\\frac{120 - 40}{2} = 40$ (Opción C)." },
  { id: 20, topic: "Ecuaciones Planteamiento", q: "Una madre tiene el triple de la edad de su hija. Si la suma de sus edades es 48 años, ¿qué edad tiene la hija?", options: ["14 años", "10 años", "16 años", "12 años"], correct: 3, explanation: "$4x = 48 \\Rightarrow x = 12$ años (Opción D)." },
  { id: 21, topic: "Ecuaciones Planteamiento", q: "Al restar 10 al cuádruple de un número, se obtiene el doble de dicho número sumado con 14. Halle el número.", options: ["12", "10", "14", "16"], correct: 0, explanation: "$4x - 10 = 2x + 14 \\Rightarrow 2x = 24 \\Rightarrow x = 12$ (Opción A)." },
  { id: 22, topic: "Ecuaciones Planteamiento", q: "Se reparten $600 entre tres empleados. El segundo recibe el doble que el primero y el tercero el triple del primero. ¿Cuánto recibe el tercero?", options: ["$200", "$300", "$100", "$350"], correct: 1, explanation: "$6x = 600 \\Rightarrow x = 100$. Tercero = $3(100) = 300$ (Opción B)." },
  { id: 23, topic: "Sistema de Ecuaciones", q: "Dado el sistema $3x + 2y = 16$ y $x - y = 2$, halle el valor de $y$:", options: ["4", "1", "2", "3"], correct: 2, explanation: "$3(y+2) + 2y = 16 \\Rightarrow 5y = 10 \\Rightarrow y = 2$ (Opción C)." },
  { id: 24, topic: "Cálculo de Edades", q: "Carlos tiene el triple de la edad de Mateo. Si la diferencia de sus edades es 24 años, ¿cuántos años tiene Mateo?", options: ["10 años", "14 años", "8 años", "12 años"], correct: 3, explanation: "$2x = 24 \\Rightarrow x = 12$ años (Opción D)." },
  { id: 25, topic: "Cálculo de Edades", q: "Hace 4 años la edad de Roberto era el cuádruple de la de Luis. Si hoy suman 33 años, ¿cuál es la edad actual de Luis?", options: ["9 años", "8 años", "10 años", "11 años"], correct: 0, explanation: "Hace 4 años sumaban 25 $\\Rightarrow 5x = 25 \\Rightarrow x = 5$. Hoy Luis tiene $5 + 4 = 9$ años (Opción A)." },
  { id: 26, topic: "Cálculo de Edades", q: "Dentro de $m$ años la edad de Andrés será $p$ veces la de Beatriz. Hoy Andrés tiene el triple de años que Beatriz. ¿Cuál es la edad actual de Beatriz?", options: ["$$\\frac{m(p+1)}{3}$$", "$$\\frac{m(p-1)}{3-p}$$", "$$\\frac{mp}{3-p}$$", "$$\\frac{3m}{p-1}$$"], correct: 1, explanation: "$3B + m = p(B + m) \\Rightarrow B(3-p) = m(p-1) \\Rightarrow B = \\frac{m(p-1)}{3-p}$ (Opción B)." },
  { id: 27, topic: "Razones y Proporciones", q: "La razón entre dos números es 4:7. Si el número mayor es 42, ¿cuál es el menor?", options: ["28", "21", "24", "18"], correct: 2, explanation: "$\\frac{4}{7} = \\frac{x}{42} \\Rightarrow x = 24$ (Opción C)." },
  { id: 28, topic: "Razones y Proporciones", q: "En un taller, la relación entre autos y motocicletas es de 3 a 2. Si hay 18 autos, ¿cuántas motocicletas hay?", options: ["10", "15", "14", "12"], correct: 3, explanation: "$\\frac{3}{2} = \\frac{18}{M} \\Rightarrow M = 12$ (Opción D)." },
  { id: 29, topic: "Razones y Proporciones", q: "Si $x:y = 3:4$ y $y:z = 5:6$, halle la razón $x:z$:", options: ["5:8", "3:6", "15:20", "5:6"], correct: 0, explanation: "$\\frac{x}{z} = \\frac{3}{4} \\cdot \\frac{5}{6} = \\frac{15}{24} = \\frac{5}{8}$ (Opción A)." },
  { id: 30, topic: "Razones y Proporciones", q: "Dos números están en proporción 8:3. Si su diferencia es 35, calcule el número mayor.", options: ["48", "56", "64", "40"], correct: 1, explanation: "$5k = 35 \\Rightarrow k = 7$. Mayor = $8(7) = 56$ (Opción B)." },
  { id: 31, topic: "Regla de 3 Compuesta", q: "Si 8 obreros construyen una cerca en 12 días trabajando 6 h/día, ¿cuántos días tardarán 9 obreros trabajando 8 h/día?", options: ["9 días", "10 días", "8 días", "6 días"], correct: 2, explanation: "Horas-hombre = $8 \\cdot 12 \\cdot 6 = 576$. Días = $576 / (9 \\cdot 8) = 8$ días (Opción C)." },
  { id: 32, topic: "Regla de 3 Compuesta", q: "Si 4 bombas funcionando 5 horas diarias bombean 1500 m³ de agua, ¿cuántos m³ bombearán 6 bombas funcionando 4 horas diarias?", options: ["1600 m³", "2000 m³", "1500 m³", "1800 m³"], correct: 3, explanation: "$\\frac{1500}{20} = \\frac{X}{24} \\Rightarrow X = 1800$ m³ (Opción D)." },
  { id: 33, topic: "Regla de 3 Compuesta", q: "Para pintar 240 m², 6 pintores tardan 8 días. ¿Cuántos días tardarán 8 pintores en pintar 300 m²?", options: ["7.5 días", "6 días", "8 días", "9 días"], correct: 0, explanation: "$\\frac{6 \\cdot 8}{240} = \\frac{8 \\cdot d}{300} \\Rightarrow d = 7.5$ días (Opción A)." },
  { id: 34, topic: "Porcentajes y Proporcionalidad", q: "¿A cuánto equivale el 18% de 350?", options: ["54", "63", "72", "68"], correct: 1, explanation: "$350 \\times 0.18 = 63$ (Opción B)." },
  { id: 35, topic: "Porcentajes y Proporcionalidad", q: "Un teléfono cuesta $200. Se le aplica un descuento del 15% y luego un recargo del 5%. ¿Precio final a pagar?", options: ["$180.00", "$175.00", "$178.50", "$182.00"], correct: 2, explanation: "$200 \\times 0.85 = 170 \\Rightarrow 170 \\times 1.05 = 178.50$ (Opción C)." },
  { id: 36, topic: "Porcentajes y Proporcionalidad", q: "Halle la media proporcional entre 9 y 16.", options: ["15", "10", "14", "12"], correct: 3, explanation: "$x = \\sqrt{9 \\cdot 16} = 12$ (Opción D)." },
  { id: 37, topic: "Porcentajes y Proporcionalidad", q: "Encuentre la tercera proporcional entre 4 y 12.", options: ["36", "24", "48", "32"], correct: 0, explanation: "$\\frac{4}{12} = \\frac{12}{x} \\Rightarrow 4x = 144 \\Rightarrow x = 36$ (Opción A)." },
  { id: 38, topic: "Porcentajes y Proporcionalidad", q: "De un grupo de 60 estudiantes, 45 aprobaron la prueba. ¿Qué porcentaje representa?", options: ["80%", "75%", "70%", "85%"], correct: 1, explanation: "$\\frac{45}{60} = 0.75 = 75\\%$ (Opción B)." },
  { id: 39, topic: "Media Aritmética", q: "La media de 5 números es 16. Si cuatro son 10, 14, 18 y 20, ¿cuál es el quinto?", options: ["16", "22", "18", "15"], correct: 2, explanation: "Total = $80$. Parcial = $62$. Quinto = $80 - 62 = 18$ (Opción C)." },
  { id: 40, topic: "Media Aritmética", q: "Tres notas son 7, 8 y 10. ¿Qué nota necesita en el cuarto examen para promediar 8.5?", options: ["9.5", "10", "8.5", "9"], correct: 3, explanation: "Total necesario = $34$. Actual = $25$. Nota = $34 - 25 = 9$ (Opción D)." },
  { id: 41, topic: "Combinatoria y Permutación", q: "¿De cuántas formas distintas se pueden acomodar 6 personas en una fila?", options: ["720", "120", "360", "504"], correct: 0, explanation: "$6! = 720$ (Opción A)." },
  { id: 42, topic: "Combinatoria y Permutación", q: "Se debe seleccionar un grupo de 4 docentes de un total de 8. ¿Cuántas combinaciones son posibles?", options: ["56", "70", "112", "120"], correct: 1, explanation: "$C(8,4) = 70$ (Opción B)." },
  { id: 43, topic: "Combinatoria y Permutación", q: "En un concurso con 10 participantes, ¿de cuántas maneras se premian los 3 primeros lugares?", options: ["120", "504", "720", "210"], correct: 2, explanation: "$P(10,3) = 10 \\times 9 \\times 8 = 720$ (Opción C)." },
  { id: 44, topic: "Combinatoria y Permutación", q: "¿Cuántos códigos de 2 dígitos distintos se forman con {2, 4, 6, 8, 9}?", options: ["25", "15", "30", "20"], correct: 3, explanation: "$5 \\times 4 = 20$ (Opción D)." },
  { id: 45, topic: "Combinatoria y Permutación", q: "Determine el número de parejas distintas que se forman eligiendo 2 elementos de 7.", options: ["21", "42", "14", "28"], correct: 0, explanation: "$C(7,2) = 21$ (Opción A)." },
  { id: 46, topic: "Combinatoria y Permutación", q: "¿De cuántas maneras diferentes pueden sentarse 5 personas alrededor de una mesa circular?", options: ["120", "24", "60", "36"], correct: 1, explanation: "$(5-1)! = 4! = 24$ (Opción B)." },
  { id: 47, topic: "Combinatoria y Permutación", q: "¿Cuántas palabras distintas se forman permutando las letras de 'MAMA'?", options: ["12", "24", "6", "4"], correct: 2, explanation: "$\\frac{4!}{2!2!} = 6$ (Opción C)." },
  { id: 48, topic: "Combinatoria y Permutación", q: "En un torneo con 12 participantes, todos juegan entre sí una vez. ¿Cuántos partidos se juegan?", options: ["132", "72", "48", "66"], correct: 3, explanation: "$C(12,2) = 66$ (Opción D)." },
  { id: 49, topic: "Combinatoria y Permutación", q: "Si 8 personas en una reunión se saludan una sola vez cada una, ¿cuántos apretones se dan?", options: ["28", "56", "32", "64"], correct: 0, explanation: "$C(8,2) = 28$ (Opción A)." },
  { id: 50, topic: "Combinatoria y Permutación", q: "¿Cuántas claves numéricas de 3 dígitos diferentes se forman con los números del 1 al 8?", options: ["56", "336", "512", "280"], correct: 1, explanation: "$8 \\times 7 \\times 6 = 336$ (Opción B)." }
];

const STORAGE_KEY = 'UNL_NUMERICO_RECUPERACION_STATE_V2';

// ESTADO GENERAL
let studentName = "";
let currentQuestionIndex = 0;
let userAnswers = {};
let warningCount = 0;
const MAX_WARNINGS = 3;
let timerInterval = null;
const TOTAL_EXAM_DURATION_SEC = 50 * 60; // 50 minutos exactos
let startTime = null;
let isExamActive = false;
let isCooldown = false;

// ELEMENTOS DOM
const startForm = document.getElementById('start-form');
const studentNameInput = document.getElementById('student-name');
const startScreen = document.getElementById('start-screen');
const examApp = document.getElementById('exam-app');
const resultScreen = document.getElementById('result-screen');
const activeStudentDisplay = document.getElementById('active-student-display');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnFinish = document.getElementById('btn-finish');
const btnDownloadPdf = document.getElementById('btn-download-pdf');
const btnRetryExam = document.getElementById('btn-retry-exam');

const questionNumber = document.getElementById('question-number');
const questionTopic = document.getElementById('question-topic');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerText = document.getElementById('timer-text');

const reactivesGrid = document.getElementById('reactives-grid');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressPercent = document.getElementById('progress-percent');
const feedbackList = document.getElementById('feedback-list');

window.addEventListener('DOMContentLoaded', () => {
  checkExistingSession();
});

function checkExistingSession() {
  const savedState = localStorage.getItem(STORAGE_KEY);
  if (savedState) {
    try {
      const state = JSON.parse(savedState);

      if (state.isFinished) {
        studentName = state.studentName;
        userAnswers = state.userAnswers || {};
        finishExam(state.finishReason || "Evaluación finalizada.", state.isSuspended, false);
      } else {
        studentName = state.studentName;
        userAnswers = state.userAnswers || {};
        warningCount = state.warningCount || 0;
        startTime = state.startTime;
        currentQuestionIndex = state.currentQuestionIndex || 0;

        const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        const remainingSeconds = TOTAL_EXAM_DURATION_SEC - elapsedSeconds;

        if (remainingSeconds <= 0) {
          finishExam("Tiempo límite de 50 minutos agotado.", false, true);
        } else {
          startScreen.classList.add('hidden');
          examApp.classList.remove('hidden');
          activeStudentDisplay.innerText = `Estudiante: ${studentName}`;

          buildGrid();
          renderQuestion();
          startTimer();

          setTimeout(() => {
            requestFullScreen();
            isExamActive = true;
            setupSecurity();
          }, 300);
        }
      }
    } catch (e) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

function saveStateToStorage(isFinished = false, finishReason = "", isSuspended = false) {
  const state = {
    studentName,
    userAnswers,
    warningCount,
    startTime,
    currentQuestionIndex,
    isFinished,
    finishReason,
    isSuspended
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

startForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = studentNameInput.value.trim();
  if (name) {
    studentName = name;
    startTime = Date.now();
    saveStateToStorage();
    launchExamFlow();
  }
});

btnPrev.addEventListener('click', () => navigate(-1));
btnNext.addEventListener('click', () => navigate(1));
btnFinish.addEventListener('click', () => {
  if (confirm("¿Estás seguro de que deseas finalizar tu examen de recuperación ahora?")) {
    finishExam("Evaluación completada voluntariamente por el estudiante.", false, true);
  }
});
btnDownloadPdf.addEventListener('click', () => window.print());

btnRetryExam.addEventListener('click', () => {
  if (confirm("¿Deseas reiniciar el intento de recuperación? Se borrarán las respuestas actuales.")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
});

function launchExamFlow() {
  startScreen.classList.add('hidden');
  examApp.classList.remove('hidden');
  activeStudentDisplay.innerText = `Estudiante: ${studentName}`;

  buildGrid();
  renderQuestion();
  startTimer();

  setTimeout(() => {
    requestFullScreen();
    isExamActive = true;
    setupSecurity();
  }, 300);
}

function buildGrid() {
  reactivesGrid.innerHTML = '';
  questionsBank.forEach((q, index) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.innerText = index + 1;
    btn.id = `grid-btn-${index}`;
    btn.onclick = () => {
      currentQuestionIndex = index;
      saveStateToStorage();
      renderQuestion();
    };
    reactivesGrid.appendChild(btn);
  });
}

function renderQuestion() {
  const q = questionsBank[currentQuestionIndex];

  questionNumber.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questionsBank.length}`;
  questionTopic.innerText = `Tema: ${q.topic}`;
  questionText.innerHTML = q.q;

  optionsContainer.innerHTML = '';
  const badges = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, i) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (userAnswers[q.id] === i) {
      optDiv.classList.add('selected');
    }

    optDiv.innerHTML = `
      <div class="option-badge">${badges[i]}</div>
      <div class="option-label">${optText}</div>
    `;

    optDiv.onclick = () => selectOption(q.id, i);
    optionsContainer.appendChild(optDiv);
  });

  btnPrev.disabled = currentQuestionIndex === 0;
  btnNext.innerText = (currentQuestionIndex === questionsBank.length - 1) ? 'Finalizar' : 'Siguiente';

  updateGridAndProgress();
  setTimeout(renderKaTeX, 20);
}

function renderKaTeX() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  }
}

function selectOption(qId, optionIndex) {
  userAnswers[qId] = optionIndex;
  saveStateToStorage();
  renderQuestion();
}

function navigate(direction) {
  const nextIndex = currentQuestionIndex + direction;
  if (nextIndex >= 0 && nextIndex < questionsBank.length) {
    currentQuestionIndex = nextIndex;
    saveStateToStorage();
    renderQuestion();
  } else if (nextIndex >= questionsBank.length) {
    finishExam("Evaluación completada.", false, true);
  }
}

function updateGridAndProgress() {
  const answeredCount = Object.keys(userAnswers).length;
  const percentage = Math.round((answeredCount / questionsBank.length) * 100);

  progressBarFill.style.width = `${percentage}%`;
  progressPercent.innerText = `${percentage}%`;

  questionsBank.forEach((q, index) => {
    const btn = document.getElementById(`grid-btn-${index}`);
    if (!btn) return;
    btn.className = 'grid-btn';

    if (userAnswers[q.id] !== undefined) {
      btn.classList.add('answered');
    }
    if (index === currentQuestionIndex) {
      btn.classList.add('current');
    }
  });
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    const remainingSeconds = TOTAL_EXAM_DURATION_SEC - elapsedSeconds;

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerText.innerText = "00:00";
      finishExam("Tiempo límite de 50 minutos agotado.", false, true);
      return;
    }

    const mins = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    timerText.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

// CAPA DE SEGURIDAD KIOSKO + ANTI-CAPTURA EN MÓVILES Y PC
function setupSecurity() {
  // Detección de ocultación o cambio de app (útil para móviles y PC)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isExamActive && !isCooldown) {
      document.body.classList.add('blur-protected');
      registerViolation("Salida de la aplicación / Pestaña oculta.");
    } else {
      document.body.classList.remove('blur-protected');
    }
  });

  // Pérdida de foco (capturas de pantalla con combinaciones de botones en móvil a menudo desenfocan la ventana)
  window.addEventListener('blur', () => {
    if (isExamActive && !isCooldown) {
      document.body.classList.add('blur-protected');
      registerViolation("Intento de captura / Pérdida de foco en el dispositivo.");
    }
  });

  window.addEventListener('focus', () => {
    document.body.classList.remove('blur-protected');
  });

  // Salida de Pantalla Completa
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isExamActive && !isCooldown) {
      registerViolation("Salida del modo pantalla completa.");
    }
  });

  // Bloqueos de eventos de mouse y táctiles sospechosos (p. ej. toque sostenido para guardar imagen)
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('paste', e => e.preventDefault());
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 2 && isExamActive && !isCooldown) { // Gestos multitáctiles de captura
      e.preventDefault();
      registerViolation("Gesto táctil no permitido (Posible captura de pantalla).");
    }
  }, { passive: false });

  // Bloqueo de Teclado
  document.addEventListener('keydown', (e) => {
    if (!isExamActive || isCooldown) return;

    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'r' || e.key === 'p' || e.key === 's')) ||
      e.key === 'PrintScreen' ||
      e.altKey
    ) {
      e.preventDefault();
      registerViolation("Uso de atajos prohibidos o captura de pantalla.");
    }
  });
}

function registerViolation(reason) {
  if (isCooldown) return;
  isCooldown = true;
  warningCount++;
  saveStateToStorage();

  if (warningCount >= MAX_WARNINGS) {
    alert(`🚨 ADVERTENCIA FINAL (${warningCount}/${MAX_WARNINGS})\nMotivo: ${reason}\n\nEvaluación suspendida por infracción grave de seguridad.`);
    finishExam(`Prueba suspendida por infracción de seguridad: ${reason} (Límite superado).`, true, true);
  } else {
    alert(`⚠️ ADVERTENCIA DE SEGURIDAD (${warningCount}/${MAX_WARNINGS})\nMotivo: ${reason}\n\nVuelve de inmediato a la prueba.`);
    requestFullScreen();
    setTimeout(() => { isCooldown = false; }, 2500);
  }
}

function requestFullScreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

// REPORTE FINAL & RETROALIMENTACIÓN
function finishExam(reason, isSuspended = false, shouldSave = true) {
  isExamActive = false;
  if (timerInterval) clearInterval(timerInterval);

  if (shouldSave) {
    saveStateToStorage(true, reason, isSuspended);
  }

  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  }

  startScreen.classList.add('hidden');
  examApp.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  const statusBadge = document.getElementById('status-badge');
  if (isSuspended) {
    statusBadge.innerText = "PRUEBA SUSPENDIDA";
    statusBadge.className = "status-badge suspended";
  } else {
    statusBadge.innerText = "PRUEBA FINALIZADA";
    statusBadge.className = "status-badge normal";
  }

  document.getElementById('report-student-name').innerText = studentName;
  document.getElementById('report-date').innerText = new Date(startTime || Date.now()).toLocaleString();
  document.getElementById('result-reason').innerText = reason;

  let score = 0;
  feedbackList.innerHTML = '';
  const badges = ['A', 'B', 'C', 'D'];

  questionsBank.forEach((q, index) => {
    const userAns = userAnswers[q.id];
    const isCorrect = (userAns === q.correct);
    if (isCorrect) score++;

    const itemDiv = document.createElement('div');
    itemDiv.className = `feedback-item ${isCorrect ? 'correct-border' : 'incorrect-border'}`;

    const userAnsText = (userAns !== undefined) ? `${badges[userAns]}) ${q.options[userAns]}` : "Sin responder";
    const correctAnsText = `${badges[q.correct]}) ${q.options[q.correct]}`;

    itemDiv.innerHTML = `
      <div class="feedback-header">
        <span>Reactivo ${index + 1} - ${q.topic}</span>
        <span class="badge-status ${isCorrect ? 'correct' : 'incorrect'}">
          ${isCorrect ? 'Correcta (+1 pt)' : 'Incorrecta / Omitida'}
        </span>
      </div>
      <div class="feedback-q-text">${q.q}</div>
      <div class="ans-box user-ans">
        <strong>Tu respuesta:</strong> ${userAnsText}
      </div>
      ${!isCorrect ? `
        <div class="ans-box correct-ans">
          <strong>Respuesta correcta:</strong> ${correctAnsText}
        </div>
      ` : ''}
      <div class="explanation-box">
        <strong>💡 Resolución paso a paso:</strong><br>
        ${q.explanation}
      </div>
    `;

    feedbackList.appendChild(itemDiv);
  });

  document.getElementById('final-score').innerText = score;
  const pct = ((score / questionsBank.length) * 100).toFixed(1);
  document.getElementById('final-percentage').innerText = `${pct}% de aciertos`;

  setTimeout(renderKaTeX, 50);
}