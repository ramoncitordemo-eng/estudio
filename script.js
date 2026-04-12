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
                    { titulo: "1. Cuando te piden hallar x", texto: "Si ves dos razones iguales y falta un número, ordénalas bien y usa producto en cruz. Es el caso típico de proporciones, escalas y recetas.", formula: "a / b = c / d  →  a × d = b × c", tips: ["No mezcles el orden de las magnitudes.", "Antes de resolver, mira si las unidades son comparables.", "Después comprueba si el resultado encaja en la situación."] },
                    { titulo: "2. Cómo detectar proporcionalidad directa", texto: "Si una magnitud sube y la otra también sube en el mismo sentido, normalmente estás ante una regla de tres directa.", formula: "más → más   |   menos → menos", tips: ["Más horas de trabajo, más producción.", "Más kilos, más precio.", "Truco: si una cantidad se duplica y la otra también, es directa."] },
                    { titulo: "3. Cómo detectar proporcionalidad inversa", texto: "Si una magnitud sube pero la otra baja, suele ser proporcionalidad inversa. Aparece mucho en problemas de obreros, máquinas y tiempo.", formula: "más → menos   |   menos → más", tips: ["Más trabajadores, menos tiempo.", "Más velocidad, menos tiempo.", "Truco: piensa si el trabajo total sigue siendo el mismo."] },
                    { titulo: "4. Reducción a la unidad", texto: "Cuando te lías con la regla de tres, vuelve a 1 unidad. Primero calcula cuánto vale una sola unidad y luego multiplica.", formula: "valor buscado = valor de 1 × número de unidades", tips: ["Si 4 kg cuestan 6,80 €, primero calcula 1 kg.", "Si 8 horas producen 96 piezas, primero calcula 1 hora.", "Suele ser la forma más segura de no equivocarte."] },
                    { titulo: "5. Repartos proporcionales", texto: "En los repartos no se divide entre personas, sino entre partes. Primero suma la proporción y luego averigua cuánto vale cada parte.", formula: "r = total / suma de partes", tips: ["En 2:3:4 hay 9 partes, no 3.", "Después multiplica r por 2, por 3 y por 4.", "Si repartes dinero, revisa que todo vuelva a sumar el total."] },
                    { titulo: "6. Problemas de tiempo, trabajo y velocidad", texto: "Estos problemas suelen caer en examen. Lo importante es decidir antes si son directos o inversos y no empezar a multiplicar sin pensar.", formula: "trabajo fijo: personas × tiempo", tips: ["Más obreros para el mismo trabajo implica menos días.", "Más tiempo a la misma velocidad implica más distancia.", "Subraya qué dato permanece fijo en el problema."] },
                    { titulo: "7. Qué hacer con los porcentajes", texto: "Un porcentaje es una parte de 100. Puedes convertirlo a fracción o a decimal según te resulte más cómodo.", formula: "p% = p / 100 = decimal", tips: ["10% es dividir entre 10.", "50% es la mitad.", "25% es la cuarta parte.", "5% es la mitad del 10%."] },
                    { titulo: "8. Calcular un porcentaje de una cantidad", texto: "Si te piden un porcentaje de un número, multiplica la cantidad por el porcentaje y divide entre 100.", formula: "porcentaje = cantidad × p / 100", tips: ["15% de 80 = 80 × 15 / 100.", "Si el porcentaje es fácil, hazlo mentalmente por partes.", "Por ejemplo: 15% = 10% + 5%."] },
                    { titulo: "9. Descuentos y rebajas", texto: "En descuentos no calcules solo lo que quitan: fíjate en lo que se paga al final. Muchas veces conviene pensar en el porcentaje que queda.", formula: "precio final = precio inicial × (100 - p) / 100", tips: ["Descuento del 20% = pagar el 80%.", "Descuento del 5% en 56 €: calcula 95% o resta el 5%.", "Si el enunciado pregunta cuánto ahorras, entonces sí calculas solo la rebaja."] },
                    { titulo: "10. Aumentos y errores típicos", texto: "En una subida, el nuevo valor es el original más el aumento. El error más frecuente es quedarse solo con el porcentaje y olvidar sumarlo al precio inicial.", formula: "nuevo valor = precio inicial × (100 + p) / 100", tips: ["Subida del 8% = calcular el 108%.", "Si el final es 144 tras subir un 20%, divide entre 1,20 para volver atrás.", "Lee bien si te preguntan el aumento o el precio final."] }
                ],
                examenes: [
                    {
                        id: "exam1",
                        nombre: "Examen 1: Proporciones y valor desconocido",
                        emoji: "📐",
                        preguntas: [
                            { pregunta: "Resuelve la proporción 2/4 = x/10.", opciones: ["3", "4", "5", "6"], correcta: 2 },
                            { pregunta: "En una receta, 3 vasos de leche se mezclan con 5 cucharadas de cacao. Si usas 9 vasos de leche, ¿cuántas cucharadas necesitas?", opciones: ["12", "15", "18", "20"], correcta: 1 },
                            { pregunta: "Resuelve 4/x = 8/12.", opciones: ["4", "5", "6", "8"], correcta: 2 },
                            { pregunta: "Una maqueta está hecha a escala 1:50. Si una pared del edificio mide 4 m en realidad, ¿cuánto medirá en la maqueta?", opciones: ["4 cm", "8 cm", "10 cm", "12 cm"], correcta: 1 },
                            { pregunta: "Completa la proporción 6/9 = 10/x.", opciones: ["12", "15", "18", "21"], correcta: 1 },
                            { pregunta: "En un plano, 2 cm representan 7 km. Si la distancia real es de 21 km, ¿cuántos centímetros habrá en el plano?", opciones: ["4 cm", "5 cm", "6 cm", "7 cm"], correcta: 2 },
                            { pregunta: "Resuelve 15/25 = x/5.", opciones: ["2", "3", "4", "5"], correcta: 1 },
                            { pregunta: "Una botella se llena con 8 vasos de agua. Si solo quieres llenar 3/4 de la botella, ¿cuántos vasos necesitas?", opciones: ["4", "5", "6", "7"], correcta: 2 },
                            { pregunta: "Resuelve la proporción 7/14 = x/10.", opciones: ["4", "5", "6", "7"], correcta: 1 },
                            { pregunta: "Juan y su padre guardan cromos en razón 2:7. Si Juan tiene 18 cromos, ¿cuántos tiene su padre?", opciones: ["49", "56", "63", "72"], correcta: 2 }
                        ]
                    },
                    {
                        id: "exam2",
                        nombre: "Examen 2: Problemas de proporcionalidad",
                        emoji: "📈",
                        preguntas: [
                            { pregunta: "Si 3 bolígrafos cuestan 6 €, ¿cuánto costarán 7 bolígrafos?", opciones: ["12 €", "14 €", "16 €", "18 €"], correcta: 1 },
                            { pregunta: "Un coche recorre 120 km en 2 horas. ¿Cuántos kilómetros recorre en 5 horas al mismo ritmo?", opciones: ["240 km", "280 km", "300 km", "360 km"], correcta: 2 },
                            { pregunta: "Un grifo llena 30 litros en 5 minutos. ¿Cuántos litros llena en 8 minutos?", opciones: ["40 litros", "42 litros", "48 litros", "50 litros"], correcta: 2 },
                            { pregunta: "Un túnel de lavado limpia 96 coches en 8 horas. ¿Cuántos coches limpiará en 5 horas?", opciones: ["50", "55", "60", "65"], correcta: 2 },
                            { pregunta: "Un disco tarda 5 horas en llenarse con 2 máquinas iguales. ¿Cuánto tardará con 5 máquinas iguales?", opciones: ["1 hora", "2 horas", "2 horas y 30 min", "3 horas"], correcta: 1 },
                            { pregunta: "15 albañiles construyen una obra en 200 días. ¿Cuántos albañiles hacen falta para terminarla en 150 días?", opciones: ["18", "20", "22", "24"], correcta: 1 },
                            { pregunta: "Una máquina embotelladora llena 240 botellas en 20 minutos. ¿Cuántas llenará en 1 hora y media?", opciones: ["960", "1080", "1120", "1200"], correcta: 1 },
                            { pregunta: "Un equipo fotocopia 450 hojas en 6 minutos. ¿Cuántas copiará en 14 minutos?", opciones: ["900", "975", "1050", "1125"], correcta: 2 },
                            { pregunta: "Si 4 kg de naranjas cuestan 6,80 €, ¿cuánto costarán 10 kg?", opciones: ["15 €", "16 €", "17 €", "17,50 €"], correcta: 2 },
                            { pregunta: "Seis personas terminan un trabajo en 10 días. Si trabajan 8 personas al mismo ritmo, ¿en cuántos días lo terminarán?", opciones: ["6 días", "7,5 días", "8 días", "9 días"], correcta: 1 }
                        ]
                    },
                    {
                        id: "exam3",
                        nombre: "Examen 3: Porcentajes aplicados",
                        emoji: "💯",
                        preguntas: [
                            { pregunta: "Calcula el 10% de 320.", opciones: ["12", "20", "32", "42"], correcta: 2 },
                            { pregunta: "Calcula el 25% de 48.", opciones: ["10", "12", "14", "16"], correcta: 1 },
                            { pregunta: "Un pantalón cuesta 80 € y tiene un descuento del 15%. ¿Cuánto se paga al final?", opciones: ["62 €", "66 €", "68 €", "72 €"], correcta: 2 },
                            { pregunta: "Una bicicleta costaba 450 € y sube un 8%. ¿Cuál es su nuevo precio?", opciones: ["470 €", "480 €", "486 €", "494 €"], correcta: 2 },
                            { pregunta: "En una clase han aprobado 18 de 24 alumnos. ¿Qué porcentaje ha aprobado?", opciones: ["65%", "70%", "75%", "80%"], correcta: 2 },
                            { pregunta: "El 35% de una cantidad es 70. ¿Cuál es la cantidad?", opciones: ["180", "190", "200", "210"], correcta: 2 },
                            { pregunta: "En una tienda rebajan 9 € un producto que costaba 60 €. ¿Qué porcentaje de descuento aplican?", opciones: ["10%", "12%", "15%", "18%"], correcta: 2 },
                            { pregunta: "¿Qué porcentaje es 120 de 500?", opciones: ["20%", "24%", "30%", "32%"], correcta: 1 },
                            { pregunta: "Un abrigo vale 56 €. Si se rebaja un 5%, ¿cuánto cuesta después del descuento?", opciones: ["52,20 €", "53,20 €", "54,20 €", "55,20 €"], correcta: 1 },
                            { pregunta: "Una cantidad aumenta un 20% y pasa a ser 144. ¿Cuánto valía antes?", opciones: ["110", "115", "120", "125"], correcta: 2 }
                        ]
                    },
                    {
                        id: "exam4",
                        nombre: "Examen 4: Repartos y problemas mixtos",
                        emoji: "🍭",
                        preguntas: [
                            { pregunta: "Se reparten 60 caramelos entre dos niños en proporción 4:6. ¿Cuántos recibe el primero?", opciones: ["20", "24", "30", "36"], correcta: 1 },
                            { pregunta: "Tres amigos se reparten 120 cromos en proporción 1:2:3. ¿Cuántos recibe el que tiene la parte más pequeña?", opciones: ["10", "20", "30", "40"], correcta: 1 },
                            { pregunta: "Dos socios invierten 3.000 € y 7.000 €. Si ganan 5.000 €, ¿cuánto recibe el que invirtió 3.000 €?", opciones: ["1.000 €", "1.500 €", "2.000 €", "2.500 €"], correcta: 1 },
                            { pregunta: "Tres municipios de 2.000, 3.000 y 5.000 habitantes se reparten 1.000 farolas. ¿Cuántas recibe el de 5.000 habitantes?", opciones: ["200", "300", "400", "500"], correcta: 3 },
                            { pregunta: "Dos hermanos trabajan 3 y 5 horas y ganan 40 € en total. ¿Cuánto le corresponde al que trabajó 5 horas?", opciones: ["15 €", "20 €", "25 €", "30 €"], correcta: 2 },
                            { pregunta: "Tres amigos ponen 250 € cada uno para un regalo. Si finalmente pagan lo mismo entre 2 amigos, ¿cuánto pone cada uno?", opciones: ["300 €", "325 €", "350 €", "375 €"], correcta: 3 },
                            { pregunta: "Un ciclista da 489 vueltas en 25 minutos. ¿Cuántas dará en una hora?", opciones: ["1.048", "1.104", "1.174", "1.220"], correcta: 2 },
                            { pregunta: "Un autobús tarda 24 horas en recorrer una ruta a cierta velocidad. Si aumenta su velocidad un 20%, ¿cuánto tardará aproximadamente?", opciones: ["18 h", "19 h 12 min", "20 h", "21 h 30 min"], correcta: 3 },
                            { pregunta: "650 postes de 1,20 m cuestan 780 €. ¿Cuántos postes de 1,30 m se pueden comprar con el mismo dinero, si el precio es proporcional a la longitud?", opciones: ["560", "600", "650", "700"], correcta: 1 },
                            { pregunta: "Un colegio reparte 900 € entre tres clases en proporción 2:3:4. ¿Cuánto recibe la segunda clase?", opciones: ["200 €", "250 €", "300 €", "400 €"], correcta: 2 }
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

var topicStudyGuides = {
    proporciones: {
        titulo: "Qué debes dominar",
        texto: "En este tema vas a reconocer proporciones, resolver problemas de proporcionalidad directa, repartir cantidades de forma justa y trabajar con porcentajes en situaciones reales.",
        puntos: [
            "Comprueba una proporción con el producto en cruz.",
            "Si una magnitud cambia por un factor, la otra también cambia por ese mismo factor.",
            "En los repartos, primero calcula cuánto vale una parte.",
            "Un porcentaje expresa una cantidad sobre 100."
        ]
    }
};

var examMeta = {
    exam1: {
        subTema: "Proporciones numéricas",
        descripcion: "Igualdad entre razones, producto en cruz y término desconocido.",
        refuerzo: "Repasa la propiedad fundamental y comprueba siempre extremos y medios."
    },
    exam2: {
        subTema: "Problemas de proporcionalidad",
        descripcion: "Velocidad, tiempo, trabajo, litros, precios y reducción a la unidad.",
        refuerzo: "Decide primero si el problema es directo o inverso antes de montar la regla de tres."
    },
    exam3: {
        subTema: "Porcentajes aplicados",
        descripcion: "Descuentos, aumentos, porcentaje de una cantidad y cálculo del total.",
        refuerzo: "Convierte el porcentaje a fracción o decimal antes de operar."
    },
    exam4: {
        subTema: "Repartos y problemas mixtos",
        descripcion: "Reparto proporcional, dinero, vueltas, tiempos y problemas combinados.",
        refuerzo: "En los repartos, suma las partes primero; en los mixtos, separa bien los datos y la operación."
    }
};

function getExamMeta(examId) {
    return examMeta[examId] || {
        subTema: "Examen",
        descripcion: "Pon a prueba lo que has estudiado.",
        refuerzo: "Repasa el resumen antes de volver a intentarlo."
    };
}

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
    var guide = topicStudyGuides[topicId];
    var html = "";

    if (guide) {
        html += '<section class="summary-hero">';
        html += '<div class="summary-hero-copy">';
        html += '<span class="summary-kicker">Resumen guiado</span>';
        html += '<h2>' + topic.name + '</h2>';
        html += '<p>' + guide.texto + '</p>';
        html += '</div>';
        html += '<div class="summary-checklist"><h3>' + guide.titulo + '</h3><ul>';
        for (var g = 0; g < guide.puntos.length; g++) html += '<li>' + guide.puntos[g] + '</li>';
        html += '</ul></div>';
        html += '</section>';
    }

    html += '<div class="intro-box">Usa este resumen como guía de resolución: identifica el tipo de problema, elige la operación correcta y comprueba el resultado antes de pasar al examen.</div><div class="cards-grid">';
    var colors = ["color-1", "color-2", "color-3", "color-4", "color-5"];
    for (var i = 0; i < topic.resumen.length; i++) {
        var card = topic.resumen[i];
        var color = colors[i % colors.length];
        html += '<div class="card ' + color + '"><h3>' + card.titulo + '</h3><p>' + card.texto + '</p>';
        if (card.formula) html += '<div class="formula">' + card.formula + '</div>';
        if (card.tips && card.tips.length) {
            html += '<ul class="card-tips">';
            for (var t = 0; t < card.tips.length; t++) html += '<li>' + card.tips[t] + '</li>';
            html += '</ul>';
        }
        html += '<div class="card-tip">Piensa siempre: qué magnitudes se comparan, si suben o bajan juntas y qué dato debo comprobar al final.</div>';
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
        var meta = getExamMeta(examen.id);
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
        html += '<div class="exam-card-tag">' + meta.subTema + '</div>';
        html += '<div class="exam-card-name">' + examen.nombre + '</div>';
        html += '<div class="exam-card-desc">' + meta.descripcion + '</div>';
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
    rellenarPreguntas(examen);

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
function rellenarPreguntas(examen) {
    var preguntas = examen.preguntas;
    var meta = getExamMeta(examen.id);
    var container = document.getElementById("quiz-questions");
    var html = '<div class="exam-brief"><div><span class="exam-brief-label">Subtema</span><strong>' + meta.subTema + '</strong></div><div><span class="exam-brief-label">Objetivo</span><strong>' + meta.descripcion + '</strong></div></div>';
    for (var i = 0; i < preguntas.length; i++) {
        var p = preguntas[i];
        html += '<div class="question-box" id="qbox-' + i + '">';
        html += '<div class="question-number">Pregunta ' + (i + 1) + ' de ' + preguntas.length + '</div>';
        html += '<h4>' + p.pregunta + '</h4>';
        html += '<div class="options-grid">';
        for (var j = 0; j < p.opciones.length; j++) {
            html += '<label class="option-label" id="q' + i + '-opt-' + j + '">';
            html += '<input type="radio" name="q' + i + '" value="' + j + '" class="option-input"> ';
            html += '<span>' + p.opciones[j] + '</span>';
            html += '</label>';
        }
        html += '</div>';
        html += '<div class="feedback" id="feedback-' + i + '" style="display:none;"></div>';
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
    var unanswered = [];

    for (var u = 0; u < preguntas.length; u++) {
        if (!document.querySelector('input[name="q' + u + '"]:checked')) unanswered.push(u + 1);
    }

    if (unanswered.length > 0) {
        alert("Te faltan por responder las preguntas: " + unanswered.join(", ") + ".");
        return;
    }

    for (var i = 0; i < preguntas.length; i++) {
        var selected = document.querySelector('input[name="q' + i + '"]:checked');
        var qbox = document.getElementById("qbox-" + i);
        var feedback = document.getElementById("feedback-" + i);
        var correcta = preguntas[i].correcta;
        var selectedIndex = parseInt(selected.value, 10);

        qbox.classList.remove("correct", "incorrect");
        feedback.style.display = "block";

        document.getElementById("q" + i + "-opt-" + correcta).classList.add("is-correct-answer");
        if (selectedIndex !== correcta) document.getElementById("q" + i + "-opt-" + selectedIndex).classList.add("is-wrong-answer");

        if (selectedIndex === correcta) {
            score++;
            qbox.classList.add("correct");
            feedback.innerHTML = "<strong>✅ Correcto.</strong> Has identificado bien la idea principal de la pregunta.";
        } else {
            qbox.classList.add("incorrect");
            feedback.innerHTML = "❌ Incorrecto. La respuesta correcta era: <strong>" + preguntas[i].opciones[correcta] + "</strong>";
        }

        var inputs = qbox.querySelectorAll("input");
        for (var j = 0; j < inputs.length; j++) inputs[j].disabled = true;
    }

    var nota = parseFloat((score / preguntas.length * 10).toFixed(1));
    guardarIntento(nota, score, preguntas.length);
    actualizarMejorNota(nota);

    var resultEl = document.getElementById("quiz-result");
    var meta = getExamMeta(currentExamId);
    var emoji = nota >= 5 ? "🎉" : "💪";
    var msg = nota >= 5 ? "Buen trabajo. Ya puedes pasar al siguiente examen o repetir para mejorar la nota." : meta.refuerzo;
    if (nota === 10) msg = "Perfecto. Has dominado este bloque sin fallos.";
    resultEl.innerHTML = '<h3>Resultado ' + emoji + '</h3><div class="score">' + nota + ' / 10</div><div class="details">Acertaste <strong>' + score + '</strong> de ' + preguntas.length + ' preguntas.</div><div class="result-tip">' + msg + '</div>';
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
    if (examen) rellenarPreguntas(examen);
    document.getElementById("quiz-title").scrollIntoView({ behavior: "smooth" });
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
