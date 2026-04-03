// --- DATOS DE ASIGNATURAS Y TEMAS ---
const subjectsData = {
    matematicas: {
        title: "Matemáticas",
        topics: [
            { id: 'proporciones', name: 'Proporciones 🔢' }
        ]
    },
    naturales: {
        title: "Ciencias Naturales",
        topics: []
    },
    sociales: {
        title: "Ciencias Sociales",
        topics: []
    },
    ingles: {
        title: "Inglés",
        topics: []
    }
};

// --- GESTIÓN DE ASIGNATURAS Y TEMAS ---
const subjectBtns = document.querySelectorAll('.subject-btn');
const currentSubjectTitle = document.getElementById('current-subject-title');
const topicsList = document.getElementById('topics-list');
const mainTabs = document.getElementById('main-nav-tabs');
const mainContent = document.getElementById('main-content');

function loadTopics(subjectId) {
    const subject = subjectsData[subjectId];
    currentSubjectTitle.textContent = `Temas de ${subject.title}`;
    topicsList.innerHTML = ''; // Limpiar
    
    // Ocultar sección principal al cambiar de asignatura
    mainTabs.classList.add('hidden');
    mainContent.classList.add('hidden');

    if (subject.topics.length === 0) {
        topicsList.innerHTML = `<div class="topic-btn empty-topic">Próximamente... 🚧</div>`;
        return;
    }

    let firstBtn = null;

    subject.topics.forEach((topic, index) => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = topic.name;
        btn.addEventListener('click', () => {
            // Quitar active a otros botones de tema
            document.querySelectorAll('.topic-btn').forEach(b => b.style.borderColor = 'var(--pastel-4)');
            btn.style.borderColor = 'var(--primary)';

            // Mostrar contenido del tema seleccionado
            mainTabs.classList.remove('hidden');
            mainContent.classList.remove('hidden');
            
            // Reiniciar a "Resumen Teórico" por defecto
            document.querySelector('.tab-btn[data-target="resumen"]').click();
        });
        topicsList.appendChild(btn);
        
        if (index === 0) firstBtn = btn;
    });

    // Auto-seleccionar el primer tema por defecto para no dejar la página vacía
    if (firstBtn) {
        firstBtn.click();
    }
}

subjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar active de todas
        subjectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const subjectId = btn.getAttribute('data-subject');
        loadTopics(subjectId);
    });
});



// --- DATOS DEL TEMA: PROPORCIONES ---
const questions = [
    {
        id: 1,
        question: "¿Qué es una proporción numérica?",
        options: [
            "La suma de dos números diferentes.",
            "La igualdad entre dos razones o fracciones.",
            "Una multiplicación mágica de tres números.",
            "El resultado siempre es 10."
        ],
        answer: 1 // index de la respuesta correcta (0-based)
    },
    {
        id: 2,
        question: "Si 2 de cada 5 alumnos llevan gafas, ¿cuántos llevan gafas en una clase de 25 alumnos?",
        options: [
            "5 alumnos",
            "8 alumnos",
            "10 alumnos",
            "15 alumnos"
        ],
        answer: 2
    },
    {
        id: 3,
        question: "En una proporción directa, si una magnitud aumenta al doble, ¿qué le pasa a la otra?",
        options: [
            "Disminuye a la mitad",
            "Aumenta al triple",
            "Se queda igual",
            "Aumenta al doble también"
        ],
        answer: 3
    },
    {
        id: 4,
        question: "El método de 'reducción a la unidad' consiste en...",
        options: [
            "Restar 1 a todos los números.",
            "Calcular primero cuánto le corresponde a 1 sola unidad.",
            "Multiplicar siempre por uno.",
            "Dividir el mayor entre uno."
        ],
        answer: 1
    },
    {
        id: 5,
        question: "Calcula: ¿Cuál es el 20% de 150?",
        options: [
            "15",
            "20",
            "30",
            "35"
        ],
        answer: 2
    },
    {
        id: 6,
        question: "Si un juguete cuesta 40€ y tiene un descuento del 25%, ¿cuánto cuesta ahora?",
        options: [
            "30€",
            "35€",
            "25€",
            "10€"
        ],
        answer: 0
    },
    {
        id: 7,
        question: "Si compramos 3 bolígrafos por 6€, ¿cuánto costarán 7 bolígrafos?",
        options: [
            "12€",
            "14€",
            "21€",
            "15€"
        ],
        answer: 1
    },
    {
        id: 8,
        question: "Una bicicleta valía 200€ y su precio ha aumentado un 10%. ¿Cuál es su precio nuevo?",
        options: [
            "210€",
            "220€",
            "180€",
            "190€"
        ],
        answer: 1
    },
    {
        id: 9,
        question: "Si queremos repartir 60 caramelos de forma proporcional a las edades de dos niños de 4 y 6 años, ¿cuántos caramelos le tocan al niño de 4 años?",
        options: [
            "20",
            "24",
            "30",
            "36"
        ],
        answer: 1
    },
    {
        id: 10,
        question: "Si 4 / x = 8 / 12, ¿cuál es el valor de 'x'?",
        options: [
            "6",
            "5",
            "4",
            "8"
        ],
        answer: 0
    }
];

// --- GESTIÓN DE PESTAÑAS (TABS) ---
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar active de todos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.add('hidden'));
        
        // Poner active al elegido
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        targetContent.classList.remove('hidden');
        
        // Si vamos al historial, lo recargamos
        if(targetId === 'historial') {
            loadHistory();
        }
    });
});

// --- RENDERIZAR EXAMEN ---
const quizContainer = document.getElementById('quiz-container');
const quizForm = document.getElementById('quiz-form');
const resultBox = document.getElementById('quiz-result');
const btnReintentar = document.getElementById('btn-reintentar');
const btnCorregir = document.getElementById('btn-corregir');

function renderQuiz() {
    quizContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-box';
        questionDiv.id = `question-${q.id}`;
        
        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label class="option-label">
                    <input type="radio" name="q${q.id}" value="${optIndex}" class="option-input" required>
                    <span>${opt}</span>
                </label>
            `;
        });

        questionDiv.innerHTML = `
            <h4>${index + 1}. ${q.question}</h4>
            <div class="options-grid">
                ${optionsHtml}
            </div>
            <div class="feedback hidden" style="margin-top: 10px; font-weight: bold;"></div>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Inicializar el examen al cargar
renderQuiz();

// --- CORREGIR EXAMEN ---
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let score = 0;
    
    questions.forEach(q => {
        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
        const questionBox = document.getElementById(`question-${q.id}`);
        const labels = questionBox.querySelectorAll('.option-label');
        const feedback = questionBox.querySelector('.feedback');
        
        // Limpiar clases anteriores
        questionBox.classList.remove('correct', 'incorrect');
        labels.forEach(l => l.style.color = '');
        
        if (selected) {
            const selectedAnswer = parseInt(selected.value);
            if (selectedAnswer === q.answer) {
                score++;
                questionBox.classList.add('correct');
                feedback.innerHTML = "✅ ¡Correcto!";
                feedback.style.color = "var(--success)";
            } else {
                questionBox.classList.add('incorrect');
                feedback.innerHTML = `❌ Incorrecto. La respuesta correcta era: <strong>${q.options[q.answer]}</strong>`;
                feedback.style.color = "var(--danger)";
                // Marcar en rojo la que eligió mal
                selected.parentElement.style.color = "var(--danger)";
            }
        }
        feedback.classList.remove('hidden');
        
        // Deshabilitar inputs
        const inputs = questionBox.querySelectorAll('input');
        inputs.forEach(input => input.disabled = true);
    });
    
    // Mostrar resultado global
    const nota = (score / questions.length) * 10;
    mostrarResultado(score, nota);
    guardarIntento(nota, score);
    
    btnCorregir.classList.add('hidden');
    btnReintentar.classList.remove('hidden');
});

function mostrarResultado(correctas, nota) {
    resultBox.classList.remove('hidden');
    let emoji = nota >= 5 ? "🎉" : "💪";
    let mensaje = nota >= 5 ? "¡Buen trabajo!" : "¡Sigue practicando, tú puedes!";
    if(nota === 10) mensaje = "¡Perfecto! Eres un genio matemático.";
    
    resultBox.innerHTML = `
        <h3>Resultado del Examen ${emoji}</h3>
        <div class="score">${nota.toFixed(1)} / 10</div>
        <div class="details">
            Has acertado <strong>${correctas}</strong> de ${questions.length} preguntas.<br>
            ${mensaje}
        </div>
    `;
    
    // Scroll al resultado
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

btnReintentar.addEventListener('click', () => {
    // Resetear formulario
    quizForm.reset();
    renderQuiz();
    resultBox.classList.add('hidden');
    btnCorregir.classList.remove('hidden');
    btnReintentar.classList.add('hidden');
    
    // Scroll arriba
    document.querySelector('.quiz-header').scrollIntoView({ behavior: 'smooth' });
});

// --- HISTORIAL (LOCALSTORAGE) ---
const historialContainer = document.getElementById('historial-container');
const btnBorrarHistorial = document.getElementById('btn-borrar-historial');

function guardarIntento(nota, correctas) {
    const intentos = JSON.parse(localStorage.getItem('intentosMath')) || [];
    const fecha = new Date();
    
    const nuevoIntento = {
        fecha: fecha.toLocaleString('es-ES'),
        nota: nota.toFixed(1),
        correctas: correctas,
        total: questions.length
    };
    
    intentos.unshift(nuevoIntento); // Añadir al principio
    localStorage.setItem('intentosMath', JSON.stringify(intentos));
}

function loadHistory() {
    const intentos = JSON.parse(localStorage.getItem('intentosMath')) || [];
    historialContainer.innerHTML = '';
    
    if (intentos.length === 0) {
        historialContainer.innerHTML = `<div class="no-history">Aún no has hecho ningún examen. ¡Anímate a probar! 🚀</div>`;
        btnBorrarHistorial.style.display = 'none';
        return;
    }
    
    btnBorrarHistorial.style.display = 'inline-flex';
    
    intentos.forEach((intento, idx) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        
        let claseColor = 'medium';
        if (parseFloat(intento.nota) >= 7) claseColor = 'good';
        else if (parseFloat(intento.nota) < 5) claseColor = 'bad';
        
        if (claseColor !== 'medium') item.classList.add(claseColor);
        
        item.innerHTML = `
            <div>
                <strong>Intento #${intentos.length - idx}</strong>
                <div class="history-date">📅 ${intento.fecha}</div>
                <div class="history-date">Aciertos: ${intento.correctas}/${intento.total}</div>
            </div>
            <div class="history-score">Nota: ${intento.nota}</div>
        `;
        historialContainer.appendChild(item);
    });
}

btnBorrarHistorial.addEventListener('click', () => {
    if(confirm("¿Estás seguro de que quieres borrar todo tu historial? 🗑️")) {
        localStorage.removeItem('intentosMath');
        loadHistory();
    }
});

// Inicializar la aplicación con la primera asignatura por defecto
loadTopics('matematicas');
