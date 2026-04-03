// =============================================
// DATOS: ASIGNATURAS Y TEMAS
// =============================================
var subjects = {
    matematicas: {
        name: "Matemáticas",
        topics: {
            proporciones: {
                name: "Proporciones 🔢",
                resumen: [
                    { titulo: "1. ¿Qué es una proporción numérica?", texto: "Es la <strong>igualdad entre dos razones</strong> (fracciones). Se lee \"a es a b como c es a d\".", formula: "a/b = c/d" },
                    { titulo: "2. Propiedad fundamental", texto: "En cualquier proporción, si multiplicas en cruz (extremos y medios), el resultado es el mismo.", formula: "a × d = b × c" },
                    { titulo: "3. ¿Cómo comparar magnitudes?", texto: "Podemos comparar cantidades viendo la relación entre ellas. Por ejemplo, por cada 2 niños hay 3 niñas.", formula: "" },
                    { titulo: "4. Proporcionalidad directa", texto: "Dos magnitudes son directamente proporcionales si al <strong>duplicar</strong> una, la otra también <strong>se duplica</strong>. ¡Suben o bajan al mismo ritmo!", formula: "" },
                    { titulo: "5. Reducción a la unidad", texto: "Primero calculas cuánto vale <strong>1 sola unidad</strong> y luego multiplicas por la cantidad que quieres.", formula: "" },
                    { titulo: "6. Repartos proporcionales", texto: "Repartir una cantidad de forma proporcional a otra. Ejemplo: repartir caramelos según las edades.", formula: "" },
                    { titulo: "7. Porcentajes (%)", texto: "Un porcentaje es una fracción con denominador 100. El 25% significa \"25 de cada 100\".", formula: "" },
                    { titulo: "8. Calcular el porcentaje", texto: "Para calcular un % de una cantidad, multiplica el número por el porcentaje y divide entre 100.", formula: "20% de 50 = (20 × 50) / 100 = 10" },
                    { titulo: "9. Aumentos porcentuales", texto: "Si un precio sube un 10%, ahora vale el 100% original + 10% extra = <strong>110%</strong> del precio inicial.", formula: "" },
                    { titulo: "10. Disminuciones porcentuales", texto: "Son los descuentos. Si te rebajan el 20%, pagas el 100% − 20% = <strong>80%</strong> del precio original.", formula: "" }
                ],
                examenes: [
                    {
                        id: "exam1",
                        nombre: "Examen 1: Razones y Proporciones",
                        emoji: "📐",
                        preguntas: [
                            { pregunta: "¿Qué es una proporción numérica?", opciones: ["La suma de dos números.", "La igualdad entre dos razones o fracciones.", "Una multiplicación de tres números.", "El resultado siempre es 10."], correcta: 1 },
                            { pregunta: "Si tenemos la proporción 2/4 = x/10, ¿cuánto vale x?", opciones: ["3", "4", "5", "6"], correcta: 2 },
                            { pregunta: "¿Cuál es el producto en cruz de 3/6 = 1/2?", opciones: ["3×2 = 6×1 ✓ Es correcto", "3×1 = 6×2 ✗ Es incorrecto", "No se puede calcular", "El resultado es 0"], correcta: 0 },
                            { pregunta: "Si 4/x = 8/12, ¿cuál es el valor de x?", opciones: ["6", "5", "4", "8"], correcta: 0 },
                            { pregunta: "¿Cuál de estas igualdades ES una proporción válida?", opciones: ["2/3 = 4/5", "1/2 = 3/6", "5/10 = 1/3", "7/14 = 2/5"], correcta: 1 },
                            { pregunta: "La propiedad fundamental de las proporciones dice que los extremos multiplicados son igual a...", opciones: ["La suma de los medios", "Los medios multiplicados", "La diferencia de los medios", "El doble de un extremo"], correcta: 1 },
                            { pregunta: "Si a/b = c/d, entonces...", opciones: ["a + d = b + c", "a × d = b × c", "a - d = b - c", "a / d = b / c"], correcta: 1 },
                            { pregunta: "¿Cuál de estas NO es una proporción?", opciones: ["1/2 = 2/4", "3/9 = 1/3", "5/10 = 1/2", "2/3 = 4/7"], correcta: 3 },
                            { pregunta: "En la proporción 6/x = 3/5, ¿cuánto vale x?", opciones: ["8", "10", "9", "12"], correcta: 1 },
                            { pregunta: "Si 15/25 = x/5, ¿cuánto vale x?", opciones: ["2", "3", "4", "5"], correcta: 1 }
                        ]
                    },
                    {
                        id: "exam2",
                        nombre: "Examen 2: Proporcionalidad Directa",
                        emoji: "📈",
                        preguntas: [
                            { pregunta: "En la proporcionalidad directa, si una magnitud se duplica, ¿qué ocurre con la otra?", opciones: ["Se reduce a la mitad", "Se triplica", "Se queda igual", "También se duplica"], correcta: 3 },
                            { pregunta: "Si 3 bolígrafos cuestan 6€, ¿cuánto cuestan 7 bolígrafos?", opciones: ["12€", "14€", "21€", "15€"], correcta: 1 },
                            { pregunta: "Si 2 de cada 5 alumnos llevan gafas, ¿cuántos llevan gafas en una clase de 25?", opciones: ["5", "8", "10", "15"], correcta: 2 },
                            { pregunta: "Un coche recorre 120 km en 2 horas. ¿Cuántos km recorre en 5 horas?", opciones: ["240 km", "300 km", "250 km", "350 km"], correcta: 1 },
                            { pregunta: "Si 4 obreros construyen un muro en 10 días, ¿qué tipo de magnitudes son obreros y días?", opciones: ["Directamente proporcionales", "Inversamente proporcionales", "No son proporcionales", "Son magnitudes iguales"], correcta: 1 },
                            { pregunta: "El método de reducción a la unidad consiste en...", opciones: ["Restar 1 a todos los números.", "Calcular primero cuánto vale 1 unidad.", "Multiplicar siempre por uno.", "Dividir por el número mayor."], correcta: 1 },
                            { pregunta: "Si 5 kg de naranjas cuestan 3€, ¿cuánto cuestan 15 kg?", opciones: ["6€", "9€", "12€", "15€"], correcta: 1 },
                            { pregunta: "¿Cuál es la constante de proporcionalidad entre 4 y 12?", opciones: ["2", "3", "4", "8"], correcta: 1 },
                            { pregunta: "Si 6 trabajadores hacen una tarea en 8 horas, ¿cuántas horas tardan en proporción directa 9 trabajadores?", opciones: ["La misma, 8h", "No se puede saber", "Menos horas", "Más horas"], correcta: 0 },
                            { pregunta: "Un grifo llena 30 litros en 5 minutos. ¿Cuántos litros llena en 8 minutos?", opciones: ["40 litros", "48 litros", "50 litros", "36 litros"], correcta: 1 }
                        ]
                    },
                    {
                        id: "exam3",
                        nombre: "Examen 3: Porcentajes",
                        emoji: "💯",
                        preguntas: [
                            { pregunta: "¿Qué significa el 25%?", opciones: ["25 de cada 10", "25 de cada 100", "25 de cada 1000", "25 de cada 50"], correcta: 1 },
                            { pregunta: "¿Cuál es el 20% de 150?", opciones: ["15", "20", "30", "35"], correcta: 2 },
                            { pregunta: "¿Cuál es el 10% de 80?", opciones: ["4", "6", "8", "10"], correcta: 2 },
                            { pregunta: "Un juguete cuesta 40€ y tiene un descuento del 25%. ¿Cuánto cuesta ahora?", opciones: ["30€", "35€", "25€", "10€"], correcta: 0 },
                            { pregunta: "Una bicicleta valía 200€ y ha subido un 10%. ¿Cuánto vale ahora?", opciones: ["210€", "220€", "180€", "190€"], correcta: 0 },
                            { pregunta: "Si un precio baja un 15%, ¿qué porcentaje del precio original pagas?", opciones: ["15%", "85%", "90%", "75%"], correcta: 1 },
                            { pregunta: "¿Cuánto es el 50% de 200?", opciones: ["50", "75", "100", "150"], correcta: 2 },
                            { pregunta: "Una camisa cuesta 60€ y tiene un descuento del 30%. ¿Cuánto se ahorra?", opciones: ["12€", "18€", "20€", "30€"], correcta: 1 },
                            { pregunta: "Si 40 alumnos aprobaron de 50, ¿qué porcentaje aprobó?", opciones: ["40%", "60%", "80%", "90%"], correcta: 2 },
                            { pregunta: "Un abrigo cuesta 120€. Si sube un 5%, ¿cuál es su nuevo precio?", opciones: ["124€", "125€", "126€", "130€"], correcta: 2 }
                        ]
                    },
                    {
                        id: "exam4",
                        nombre: "Examen 4: Repartos Proporcionales",
                        emoji: "🍭",
                        preguntas: [
                            { pregunta: "Repartimos 60 caramelos entre dos niños de 4 y 6 años. ¿Cuántos le tocan al niño de 4 años?", opciones: ["20", "24", "30", "36"], correcta: 1 },
                            { pregunta: "Para hacer un reparto directamente proporcional necesitamos...", opciones: ["Restar los valores", "Dividir la cantidad por el número de partes iguales", "Hallar cuántas partes le corresponden a cada uno", "Sumar todos los valores"], correcta: 2 },
                            { pregunta: "Dos socios invierten 3.000€ y 7.000€. Las ganancias son 5.000€. ¿Cuánto gana el que invirtió 3.000€?", opciones: ["1.000€", "1.500€", "2.000€", "2.500€"], correcta: 1 },
                            { pregunta: "Se reparten 120 cromos entre 3 amigos en proporción 1:2:3. ¿Cuántos le tocan al que tiene la parte más pequeña?", opciones: ["10", "20", "30", "60"], correcta: 1 },
                            { pregunta: "¿Qué es un reparto directamente proporcional?", opciones: ["Repartir a partes iguales siempre", "Dar más a quien tiene más de la magnitud de referencia", "Dar más al que menos tiene", "Repartir al azar"], correcta: 1 },
                            { pregunta: "Tres municipios tienen 2.000, 3.000 y 5.000 habitantes. Se reparten 1.000 farolas. ¿Cuántas corresponden al de 5.000 habitantes?", opciones: ["200", "300", "400", "500"], correcta: 3 },
                            { pregunta: "Si la suma de las partes en una proporción 2:3 es 50, ¿cuánto vale la parte de 2?", opciones: ["10", "15", "20", "25"], correcta: 2 },
                            { pregunta: "Dos hermanos trabajan 3 y 5 horas. Ganan 40€ en total. ¿Cuánto gana el que trabajó 5 horas?", opciones: ["15€", "20€", "25€", "30€"], correcta: 2 },
                            { pregunta: "Para calcular la parte de cada uno en un reparto proporcional, primero debemos...", opciones: ["Dividir directamente entre todos", "Encontrar el valor de 1 parte", "Multiplicar todo por la proporción", "Restar el valor total"], correcta: 1 },
                            { pregunta: "Se reparten 900€ entre A, B y C en proporción 2:3:4. ¿Cuánto recibe B?", opciones: ["200€", "250€", "300€", "400€"], correcta: 2 }
                        ]
                    }
                ]
            }
        }
    },
    naturales: { name: "Ciencias Naturales", topics: {} },
    sociales: { name: "Ciencias Sociales", topics: {} },
    ingles: { name: "Inglés", topics: {} }
};

// =============================================
// ESTADO DE LA APP
// =============================================
var currentSubject = "matematicas";
var currentTopic = null;
var currentExamId = null;

// =============================================
// SELECCIONAR ASIGNATURA
// =============================================
function selectSubject(btn, subjectId) {
    var btns = document.querySelectorAll(".subject-btn");
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove("active");
    btn.classList.add("active");

    currentSubject = subjectId;
    currentTopic = null;
    currentExamId = null;

    var subject = subjects[subjectId];
    document.getElementById("topics-label").textContent = "Elige un tema de " + subject.name + ":";

    var topicsList = document.getElementById("topics-list");
    topicsList.innerHTML = "";

    var topicKeys = Object.keys(subject.topics);
    if (topicKeys.length === 0) {
        topicsList.innerHTML = '<span class="no-topics">Próximamente... 🚧</span>';
        showScreen("welcome");
    } else {
        for (var j = 0; j < topicKeys.length; j++) {
            (function(key) {
                var topic = subject.topics[key];
                var tbtn = document.createElement("button");
                tbtn.className = "topic-btn";
                tbtn.textContent = topic.name;
                tbtn.onclick = function() { selectTopic(tbtn, subjectId, key); };
                topicsList.appendChild(tbtn);
            })(topicKeys[j]);
        }
        topicsList.querySelector(".topic-btn").click();
    }
}

// =============================================
// SELECCIONAR TEMA
// =============================================
function selectTopic(btn, subjectId, topicId) {
    var topicBtns = document.querySelectorAll(".topic-btn");
    for (var i = 0; i < topicBtns.length; i++) topicBtns[i].classList.remove("active");
    btn.classList.add("active");

    currentTopic = topicId;
    currentExamId = null;
    var topic = subjects[subjectId].topics[topicId];

    // Rellenar resumen
    var resumenEl = document.getElementById("resumen-content");
    var html = '<div class="intro-box">¡Hola! Repasa la teoría y luego ve a la pestaña "Examen" para ponerte a prueba. 💪</div><div class="cards-grid">';
    var colors = ["color-1", "color-2", "color-3", "color-4", "color-5"];
    for (var i = 0; i < topic.resumen.length; i++) {
        var card = topic.resumen[i];
        var color = colors[i % colors.length];
        html += '<div class="card ' + color + '"><h3>' + card.titulo + '</h3><p>' + card.texto + '</p>';
        if (card.formula) html += '<div class="formula">' + card.formula + '</div>';
        html += '</div>';
    }
    html += '</div>';
    resumenEl.innerHTML = html;

    showScreen("topic");
    showTab("resumen");
}

// =============================================
// LISTA DE EXÁMENES (Vista 1 de la pestaña)
// =============================================
function mostrarListaExamenes() {
    var topic = subjects[currentSubject].topics[currentTopic];
    var container = document.getElementById("exam-cards-list");
    var html = "";

    for (var i = 0; i < topic.examenes.length; i++) {
        var examen = topic.examenes[i];
        var mejorNota = getMejorNota(examen.id);
        var notaHtml, claseCard;

        if (mejorNota === null) {
            notaHtml = '<span class="exam-status not-done">No realizado</span>';
            claseCard = "";
        } else if (mejorNota >= 7) {
            notaHtml = '<span class="exam-status done-good">Mejor nota: ' + mejorNota + '/10 🌟</span>';
            claseCard = "card-good";
        } else if (mejorNota >= 5) {
            notaHtml = '<span class="exam-status done-ok">Mejor nota: ' + mejorNota + '/10 👍</span>';
            claseCard = "card-ok";
        } else {
            notaHtml = '<span class="exam-status done-bad">Mejor nota: ' + mejorNota + '/10 💪</span>';
            claseCard = "card-bad";
        }

        html += '<div class="exam-card ' + claseCard + '" onclick="abrirExamen(\'' + examen.id + '\')">';
        html += '<div class="exam-card-emoji">' + examen.emoji + '</div>';
        html += '<div class="exam-card-info">';
        html += '<div class="exam-card-name">' + examen.nombre + '</div>';
        html += '<div class="exam-card-meta">' + examen.preguntas.length + ' preguntas</div>';
        html += notaHtml;
        html += '</div>';
        html += '<div class="exam-card-arrow">▶</div>';
        html += '</div>';
    }

    container.innerHTML = html;

    // Mostrar vista lista, ocultar vista preguntas
    document.getElementById("view-exam-list").style.display = "block";
    document.getElementById("view-exam-questions").style.display = "none";
}

// =============================================
// ABRIR UN EXAMEN
// =============================================
function abrirExamen(examId) {
    var topic = subjects[currentSubject].topics[currentTopic];
    var examen = null;
    for (var i = 0; i < topic.examenes.length; i++) {
        if (topic.examenes[i].id === examId) { examen = topic.examenes[i]; break; }
    }
    if (!examen) return;

    currentExamId = examId;
    document.getElementById("quiz-title").textContent = examen.emoji + " " + examen.nombre;
    rellenarPreguntas(examen.preguntas);

    document.getElementById("view-exam-list").style.display = "none";
    document.getElementById("view-exam-questions").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function volverListaExamenes() {
    mostrarListaExamenes();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =============================================
// RELLENAR PREGUNTAS
// =============================================
function rellenarPreguntas(preguntas) {
    var container = document.getElementById("quiz-questions");
    var html = "";
    for (var i = 0; i < preguntas.length; i++) {
        var p = preguntas[i];
        html += '<div class="question-box" id="qbox-' + i + '">';
        html += '<h4>' + (i + 1) + '. ' + p.pregunta + '</h4>';
        html += '<div class="options-grid">';
        for (var j = 0; j < p.opciones.length; j++) {
            html += '<label class="option-label">';
            html += '<input type="radio" name="q' + i + '" value="' + j + '" class="option-input"> ';
            html += '<span>' + p.opciones[j] + '</span>';
            html += '</label>';
        }
        html += '</div>';
        html += '<div class="feedback" id="feedback-' + i + '" style="display:none; margin-top:10px; font-weight:bold;"></div>';
        html += '</div>';
    }
    container.innerHTML = html;

    document.getElementById("quiz-result").style.display = "none";
    document.getElementById("btn-corregir").style.display = "inline-flex";
    document.getElementById("btn-reintentar").style.display = "none";
}

// =============================================
// PESTAÑAS INTERNAS
// =============================================
function showTab(tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    for (var i = 0; i < tabs.length; i++) tabs[i].classList.add("hidden");

    var tabBtns = document.querySelectorAll(".tab-btn");
    for (var i = 0; i < tabBtns.length; i++) tabBtns[i].classList.remove("active");

    var target = document.getElementById("tab-" + tabId);
    if (target) target.classList.remove("hidden");

    for (var i = 0; i < tabBtns.length; i++) {
        var txt = tabBtns[i].textContent.toLowerCase();
        if ((tabId === "resumen" && txt.indexOf("resumen") >= 0) ||
            (tabId === "examen" && txt.indexOf("examen") >= 0) ||
            (tabId === "historial" && txt.indexOf("historial") >= 0)) {
            tabBtns[i].classList.add("active");
            break;
        }
    }

    if (tabId === "examen") mostrarListaExamenes();
    if (tabId === "historial") mostrarHistorial();
}

// =============================================
// MOSTRAR PANTALLAS
// =============================================
function showScreen(screenId) {
    document.getElementById("screen-welcome").classList.add("hidden");
    document.getElementById("screen-topic").classList.add("hidden");
    if (screenId === "welcome") document.getElementById("screen-welcome").classList.remove("hidden");
    else document.getElementById("screen-topic").classList.remove("hidden");
}

// =============================================
// CORREGIR EXAMEN
// =============================================
function corregirExamen(event) {
    event.preventDefault();

    var topic = subjects[currentSubject].topics[currentTopic];
    var examen = null;
    for (var i = 0; i < topic.examenes.length; i++) {
        if (topic.examenes[i].id === currentExamId) { examen = topic.examenes[i]; break; }
    }
    if (!examen) return;

    var preguntas = examen.preguntas;
    var score = 0;

    for (var i = 0; i < preguntas.length; i++) {
        var selected = document.querySelector('input[name="q' + i + '"]:checked');
        var qbox = document.getElementById("qbox-" + i);
        var feedback = document.getElementById("feedback-" + i);

        qbox.classList.remove("correct", "incorrect");
        feedback.style.display = "block";

        if (selected && parseInt(selected.value) === preguntas[i].correcta) {
            score++;
            qbox.classList.add("correct");
            feedback.style.color = "var(--success)";
            feedback.innerHTML = "✅ ¡Correcto!";
        } else {
            qbox.classList.add("incorrect");
            feedback.style.color = "var(--danger)";
            feedback.innerHTML = "❌ Incorrecto. La respuesta correcta era: <strong>" + preguntas[i].opciones[preguntas[i].correcta] + "</strong>";
        }

        var inputs = qbox.querySelectorAll("input");
        for (var j = 0; j < inputs.length; j++) inputs[j].disabled = true;
    }

    var nota = parseFloat((score / preguntas.length * 10).toFixed(1));
    guardarIntento(nota, score, preguntas.length);
    actualizarMejorNota(nota);

    var resultEl = document.getElementById("quiz-result");
    var emoji = nota >= 5 ? "🎉" : "💪";
    var msg = nota >= 5 ? "¡Buen trabajo!" : "¡Sigue practicando, tú puedes!";
    if (nota === 10) msg = "¡Perfecto! Eres un genio matemático. 🌟";
    resultEl.innerHTML = '<h3>Resultado ' + emoji + '</h3><div class="score">' + nota + ' / 10</div><div class="details">Acertaste <strong>' + score + '</strong> de ' + preguntas.length + ' preguntas.<br>' + msg + '</div>';
    resultEl.style.display = "block";
    resultEl.scrollIntoView({ behavior: "smooth" });

    document.getElementById("btn-corregir").style.display = "none";
    document.getElementById("btn-reintentar").style.display = "inline-flex";
}

// =============================================
// REINTENTAR
// =============================================
function reintentar() {
    var topic = subjects[currentSubject].topics[currentTopic];
    var examen = null;
    for (var i = 0; i < topic.examenes.length; i++) {
        if (topic.examenes[i].id === currentExamId) { examen = topic.examenes[i]; break; }
    }
    if (examen) rellenarPreguntas(examen.preguntas);
    document.querySelector(".quiz-header").scrollIntoView({ behavior: "smooth" });
}

// =============================================
// MEJOR NOTA (LOCALSTORAGE)
// =============================================
function claveExamen(examId) {
    return "mejor_" + currentSubject + "_" + currentTopic + "_" + examId;
}

function getMejorNota(examId) {
    var saved = localStorage.getItem(claveExamen(examId));
    return saved !== null ? parseFloat(saved) : null;
}

function actualizarMejorNota(nota) {
    var clave = claveExamen(currentExamId);
    var actual = getMejorNota(currentExamId);
    if (actual === null || nota > actual) {
        localStorage.setItem(clave, nota);
    }
}

// =============================================
// HISTORIAL (LOCALSTORAGE)
// =============================================
function guardarIntento(nota, acertadas, total) {
    var clave = "historial_" + currentSubject + "_" + currentTopic + "_" + currentExamId;
    var intentos = JSON.parse(localStorage.getItem(clave) || "[]");
    intentos.unshift({ fecha: new Date().toLocaleString("es-ES"), nota: nota, acertadas: acertadas, total: total });
    localStorage.setItem(clave, JSON.stringify(intentos));
}

function mostrarHistorial() {
    var topic = subjects[currentSubject].topics[currentTopic];
    var el = document.getElementById("historial-list");
    var html = '<h4 style="font-family:var(--font-title); color:var(--primary); margin-bottom:1.2rem; text-align:center;">Resumen por examen:</h4>';

    for (var i = 0; i < topic.examenes.length; i++) {
        var examen = topic.examenes[i];
        var clave = "historial_" + currentSubject + "_" + currentTopic + "_" + examen.id;
        var intentos = JSON.parse(localStorage.getItem(clave) || "[]");
        var mejorNota = getMejorNota(examen.id);

        html += '<div class="historial-exam-section">';
        html += '<div class="historial-exam-title">' + examen.emoji + ' ' + examen.nombre + '</div>';

        if (intentos.length === 0) {
            html += '<div class="no-history">Todavía no has realizado este examen.</div>';
        } else {
            html += '<div class="historial-best">🏆 Mejor nota: <strong>' + mejorNota + '/10</strong></div>';
            for (var j = 0; j < intentos.length; j++) {
                var it = intentos[j];
                var clase = parseFloat(it.nota) >= 7 ? "" : parseFloat(it.nota) >= 5 ? "medium" : "bad";
                html += '<div class="history-item ' + clase + '">';
                html += '<div><strong>Intento #' + (intentos.length - j) + '</strong><div class="history-date">📅 ' + it.fecha + '</div><div class="history-date">Aciertos: ' + it.acertadas + '/' + it.total + '</div></div>';
                html += '<div class="history-score">' + it.nota + '/10</div>';
                html += '</div>';
            }
        }
        html += '</div>';
    }

    el.innerHTML = html;
}

function borrarHistorial() {
    if (!confirm("¿Borrar todo el historial de este tema?")) return;
    var topic = subjects[currentSubject].topics[currentTopic];
    for (var i = 0; i < topic.examenes.length; i++) {
        var examId = topic.examenes[i].id;
        localStorage.removeItem("historial_" + currentSubject + "_" + currentTopic + "_" + examId);
        localStorage.removeItem(claveExamen(examId));
    }
    mostrarHistorial();
}

// =============================================
// INICIALIZAR
// =============================================
window.onload = function() {
    document.querySelector(".subject-btn").click();
};
