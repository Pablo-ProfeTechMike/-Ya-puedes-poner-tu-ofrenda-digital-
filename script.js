/* =========================================================
   REFERENCIAS AL DOM
   ========================================================= */
const btnEncender  = document.getElementById('btnEncender');
const btnFotos     = document.getElementById('btnFotos');
const btnOfrenda   = document.getElementById('btnOfrenda');
const btnSonido    = document.getElementById('btnSonido');
const btnMusica    = document.getElementById('btnMusica');
const volumenInput = document.getElementById('volumen');
const lluvia       = document.getElementById('lluvia');
const tooltip      = document.getElementById('tooltip');
const camino       = document.getElementById('camino');
const galeria      = document.getElementById('galeria');
const contOfrendas = document.getElementById('ofrendas');
const inputFotos   = document.getElementById('inputFotos');
const inputOfrenda = document.getElementById('inputOfrenda');
const inputNueva   = document.getElementById('inputNueva');
const inputAudio   = document.getElementById('inputAudio');

/* =========================================================
   1. ILUSTRACIONES SVG (imágenes por defecto de las ofrendas)
   Se convierten a "data URI" para usarlas en etiquetas <img>.
   ========================================================= */
const SVG = {
  pan: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="84" rx="40" ry="7" fill="#000" opacity=".25"/>
    <path d="M10 76 Q10 30 50 28 Q90 30 90 76 Q50 88 10 76Z" fill="#c9822f"/>
    <g stroke="#f3c88a" stroke-width="7" stroke-linecap="round" fill="none">
      <path d="M30 40 Q34 60 28 74"/><path d="M70 40 Q66 60 72 74"/><path d="M38 34 Q50 52 62 34"/>
    </g>
    <circle cx="50" cy="26" r="8" fill="#f3c88a"/>
    <g fill="#fff" opacity=".75"><circle cx="42" cy="58" r="1.6"/><circle cx="58" cy="60" r="1.6"/><circle cx="50" cy="68" r="1.6"/><circle cx="20" cy="62" r="1.4"/><circle cx="80" cy="62" r="1.4"/></g>
  </svg>`,
  calavera: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="92" rx="28" ry="5" fill="#000" opacity=".25"/>
    <path d="M22 50 Q22 10 50 10 Q78 10 78 50 Q78 62 68 66 L68 86 L32 86 L32 66 Q22 62 22 50Z" fill="#fff6e6"/>
    <circle cx="38" cy="46" r="11" fill="#E91E63"/><circle cx="62" cy="46" r="11" fill="#7E57C2"/>
    <circle cx="38" cy="46" r="6" fill="#1a0a2e"/><circle cx="62" cy="46" r="6" fill="#1a0a2e"/>
    <circle cx="38" cy="46" r="11" fill="none" stroke="#FFD54F" stroke-width="2"/>
    <circle cx="62" cy="46" r="11" fill="none" stroke="#FFD54F" stroke-width="2"/>
    <path d="M50 57 L45 67 H55Z" fill="#3a1250"/>
    <path d="M50 18 L54 24 L50 30 L46 24Z" fill="#FF6F00"/>
    <g stroke="#3a1250" stroke-width="2"><path d="M38 74V86M46 74V86M54 74V86M62 74V86M32 74H68"/></g>
  </svg>`,
  agua: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="90" rx="26" ry="5" fill="#000" opacity=".25"/>
    <path d="M26 16 L74 16 L67 86 Q50 93 33 86Z" fill="#cfe9ff" opacity=".35" stroke="#e8f4ff" stroke-width="3"/>
    <path d="M30 40 L70 40 L67 86 Q50 93 33 86Z" fill="#4fc3f7" opacity=".8"/>
    <ellipse cx="50" cy="40" rx="20" ry="3.5" fill="#b3e5fc"/>
    <path d="M36 48 L38 78" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>
  </svg>`,
  platillo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <ellipse cx="50" cy="84" rx="40" ry="7" fill="#000" opacity=".25"/>
    <path d="M10 54 H90 Q88 84 50 84 Q12 84 10 54Z" fill="#b5532a"/>
    <ellipse cx="50" cy="54" rx="40" ry="10" fill="#e8a65a"/>
    <ellipse cx="50" cy="54" rx="33" ry="7" fill="#5d2a14"/>
    <g fill="#FFD54F"><circle cx="40" cy="53" r="1.5"/><circle cx="52" cy="55" r="1.5"/><circle cx="60" cy="52" r="1.5"/><circle cx="46" cy="57" r="1.5"/></g>
    <g stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".55">
      <path d="M38 40 Q34 32 40 26"/><path d="M52 40 Q48 30 54 22"/><path d="M64 40 Q60 32 66 26"/>
    </g>
  </svg>`,
  silueta: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130">
    <rect width="100" height="130" fill="#2b1245"/>
    <circle cx="50" cy="48" r="20" fill="#FFD54F" opacity=".85"/>
    <path d="M10 130c0-36 18-50 40-50s40 14 40 50z" fill="#FFD54F" opacity=".85"/>
  </svg>`
};
const aURI = svg => 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);

/* =========================================================
   2. OFRENDAS (con imagen en vez de emoji)
   ========================================================= */
const OFRENDAS_BASE = [
  { nombre: 'Pan de muerto', img: aURI(SVG.pan),
    tip: 'Pan de muerto: simboliza el ciclo de la vida y la muerte; los huesitos son los difuntos y la bolita central, el cráneo.' },
  { nombre: 'Calaveritas', img: aURI(SVG.calavera),
    tip: 'Calaveritas de azúcar: representan a los difuntos; llevan su nombre escrito en la frente para honrar a cada alma.' },
  { nombre: 'Vaso de agua', img: aURI(SVG.agua),
    tip: 'Agua: mitiga la sed de las almas tras su largo camino de regreso.' },
  { nombre: 'Platillo', img: aURI(SVG.platillo),
    tip: 'Comida: se coloca el platillo favorito del difunto (mole, tamales…) para que disfrute su aroma y esencia.' }
];

let imgObjetivo = null; // <img> cuya imagen se va a reemplazar

function crearOfrenda({ nombre, img, tip }, personalizada = false) {
  const wrap = document.createElement('div');
  wrap.className = 'ofrenda-wrap';

  // Botón principal (muestra el tooltip)
  const boton = document.createElement('button');
  boton.className = 'ofrenda';
  boton.dataset.tip = tip;

  const imagen = document.createElement('img');
  imagen.className = 'ofrenda-img';
  imagen.src = img;
  imagen.alt = nombre;

  const etiqueta = document.createElement('span');
  etiqueta.textContent = nombre;
  boton.append(imagen, etiqueta);

  // Botón 📷 para cambiar la imagen por una propia
  const cambiar = document.createElement('button');
  cambiar.className = 'mini cambiar';
  cambiar.textContent = '📷';
  cambiar.title = 'Cambiar imagen';
  cambiar.setAttribute('aria-label', 'Cambiar imagen de ' + nombre);
  cambiar.addEventListener('click', () => { imgObjetivo = imagen; inputOfrenda.click(); });

  wrap.append(boton, cambiar);

  // Las ofrendas añadidas por el usuario se pueden quitar
  if (personalizada) {
    const quitar = document.createElement('button');
    quitar.className = 'mini quitar';
    quitar.textContent = '✕';
    quitar.title = 'Quitar ofrenda';
    quitar.setAttribute('aria-label', 'Quitar ' + nombre);
    quitar.addEventListener('click', () => { ocultarTooltip(); wrap.remove(); });
    wrap.appendChild(quitar);
  }
  contOfrendas.appendChild(wrap);
}

OFRENDAS_BASE.forEach(o => crearOfrenda(o));

// Reemplazar la imagen de una ofrenda existente
inputOfrenda.addEventListener('change', () => {
  const archivo = inputOfrenda.files[0];
  if (archivo && archivo.type.startsWith('image/') && imgObjetivo) {
    imgObjetivo.src = URL.createObjectURL(archivo);
  }
  inputOfrenda.value = ''; // permite elegir el mismo archivo otra vez
});

// Añadir una ofrenda totalmente nueva
btnOfrenda.addEventListener('click', () => inputNueva.click());
inputNueva.addEventListener('change', () => {
  const archivo = inputNueva.files[0];
  inputNueva.value = '';
  if (!archivo || !archivo.type.startsWith('image/')) return;

  const sugerido = archivo.name.replace(/\.[^.]+$/, '');
  const nombre = prompt('¿Cómo se llama esta ofrenda?', sugerido);
  if (nombre === null || !nombre.trim()) return;
  const significado = prompt('¿Qué significa o por qué la pones? (opcional)', '');

  crearOfrenda({
    nombre: nombre.trim(),
    img: URL.createObjectURL(archivo),
    tip: `${nombre.trim()}: ${significado && significado.trim() ? significado.trim() : 'una ofrenda puesta con cariño para nuestros seres queridos.'}`
  }, true);
});

/* =========================================================
   3. FOTOGRAFÍAS DE LOS SERES QUERIDOS
   ========================================================= */
// Marco de silueta que se muestra mientras no haya fotos
const marcoVacio = (() => {
  const fig = document.createElement('figure');
  fig.className = 'marco';
  fig.innerHTML = `<div class="foto" data-tip="Aquí va la fotografía de tu ser querido. Pulsa «Añadir fotografías» para colocarla en el altar.">${SVG.silueta}</div>
                   <figcaption>En memoria de nuestros seres queridos</figcaption>`;
  return fig;
})();

function crearMarco(src) {
  const fig = document.createElement('figure');
  fig.className = 'marco real';

  const foto = document.createElement('div');
  foto.className = 'foto';
  foto.dataset.tip = 'Fotografía: el rostro que recordamos; ponerla en el altar invita a su alma a volver a casa.';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Fotografía de un ser querido';
  foto.appendChild(img);

  // Nombre editable (clic para escribir)
  const nombre = document.createElement('figcaption');
  nombre.contentEditable = 'true';
  nombre.spellcheck = false;
  nombre.textContent = 'Escribe un nombre';
  nombre.title = 'Haz clic para editar el nombre';

  // Botón para quitar la foto
  const quitar = document.createElement('button');
  quitar.className = 'mini quitar';
  quitar.textContent = '✕';
  quitar.title = 'Quitar fotografía';
  quitar.setAttribute('aria-label', 'Quitar fotografía');
  quitar.addEventListener('click', () => {
    URL.revokeObjectURL(src); // libera memoria
    ocultarTooltip();
    fig.remove();
    actualizarMarcoVacio();
  });

  fig.append(foto, nombre, quitar);
  galeria.appendChild(fig);
}

// Muestra la silueta solo cuando no hay fotos reales
function actualizarMarcoVacio() {
  const hayFotos = galeria.querySelector('.marco.real');
  if (hayFotos) marcoVacio.remove();
  else galeria.appendChild(marcoVacio);
}
actualizarMarcoVacio();

btnFotos.addEventListener('click', () => inputFotos.click());
inputFotos.addEventListener('change', () => {
  [...inputFotos.files]
    .filter(f => f.type.startsWith('image/'))
    .forEach(f => crearMarco(URL.createObjectURL(f)));
  inputFotos.value = '';
  actualizarMarcoVacio();
});

/* =========================================================
   4. CAMINO DE PÉTALOS FIJOS EN LA BASE
   ========================================================= */
for (let i = 0; i < 60; i++) {
  const p = document.createElement('span');
  p.className = 'petalo-fijo';
  p.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`;
  camino.appendChild(p);
}

/* =========================================================
   5. ENCENDER / APAGAR LA OFRENDA + LLUVIA DE PÉTALOS
   ========================================================= */
let intervaloLluvia = null;
let ofrendaEncendida = false;

btnEncender.addEventListener('click', () => {
  ofrendaEncendida = document.body.classList.toggle('encendido');
  btnEncender.setAttribute('aria-pressed', ofrendaEncendida);
  btnEncender.textContent = ofrendaEncendida ? '🌬️ Apagar Ofrenda' : '🕯️ Encender Ofrenda';

  if (ofrendaEncendida) intervaloLluvia = setInterval(crearPetalo, 350);
  else clearInterval(intervaloLluvia);

  actualizarSonido(); // el clic cuenta como "gesto del usuario" y permite iniciar el audio
});

function crearPetalo() {
  const p = document.createElement('div');
  const tam = 10 + Math.random() * 14;
  p.className = 'petalo';
  p.style.width = p.style.height = `${tam}px`;
  p.style.left = `${Math.random() * 100}%`;
  p.style.animationDuration = `${6 + Math.random() * 6}s`;
  p.style.setProperty('--deriva', `${Math.random() * 160 - 80}px`);
  p.style.setProperty('--giro', `${Math.random() * 720 - 360}deg`);
  lluvia.appendChild(p);
  p.addEventListener('animationend', () => p.remove());
}

/* =========================================================
   6. SONIDO DE FONDO (generado con Web Audio, sin archivos)
      - Zumbido grave suave (dron)
      - Notas tipo caja de música con eco
      - Chasquidos de vela
      Si el usuario carga su propia música, se usa esa en su lugar.
   ========================================================= */
let ctx = null, master = null, eco = null, bufferRuido = null;
let timerMelodia = null, timerCrepitar = null;
let sonidoActivo = true;   // preferencia del usuario (botón 🔊/🔇)
let volumen = 0.5;
let audioUsuario = null;   // <audio> con la música propia

// Escala pentatónica menor (suena melancólica y serena)
const ESCALA = [220, 261.63, 293.66, 329.63, 392, 440, 523.25, 587.33];
let indiceNota = 3;

function crearAudio() {
  ctx = new (window.AudioContext || window.webkitAudioContext)();

  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  // Eco (retardo con realimentación) para dar ambiente
  eco = ctx.createDelay();
  eco.delayTime.value = 0.38;
  const retro = ctx.createGain(); retro.gain.value = 0.35;
  const salidaEco = ctx.createGain(); salidaEco.gain.value = 0.5;
  eco.connect(retro); retro.connect(eco);
  eco.connect(salidaEco); salidaEco.connect(master);

  // Dron: tres tonos graves con volumen que "respira" lentamente
  [110, 164.81, 220].forEach((frecuencia, i) => {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = frecuencia;
    const ganancia = ctx.createGain();
    ganancia.gain.value = 0.05;

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.1 + i * 0.07;
    const lfoGanancia = ctx.createGain();
    lfoGanancia.gain.value = 0.03;
    lfo.connect(lfoGanancia); lfoGanancia.connect(ganancia.gain);

    osc.connect(ganancia); ganancia.connect(master);
    osc.start(); lfo.start();
  });

  // Ruido blanco (base de los chasquidos)
  bufferRuido = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const datos = bufferRuido.getChannelData(0);
  for (let i = 0; i < datos.length; i++) datos[i] = Math.random() * 2 - 1;
}

function tocarNota(frecuencia) {
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = frecuencia;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(0.18, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
  osc.connect(g); g.connect(master); g.connect(eco);
  osc.start(t); osc.stop(t + 2.7);
}

function melodia() {
  // Camina por la escala con pasos pequeños y aleatorios
  indiceNota = Math.max(0, Math.min(ESCALA.length - 1, indiceNota + Math.floor(Math.random() * 5) - 2));
  tocarNota(ESCALA[indiceNota]);
  timerMelodia = setTimeout(melodia, 1400 + Math.random() * 2200);
}

function crepitar() {
  const t = ctx.currentTime;
  const fuente = ctx.createBufferSource();
  fuente.buffer = bufferRuido;
  const filtro = ctx.createBiquadFilter();
  filtro.type = 'highpass';
  filtro.frequency.value = 1800 + Math.random() * 2500;
  const g = ctx.createGain();
  const dur = 0.02 + Math.random() * 0.05;
  g.gain.setValueAtTime(0.02 + Math.random() * 0.08, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  fuente.connect(filtro); filtro.connect(g); g.connect(master);
  fuente.start(t, Math.random() * 0.9, dur);
  timerCrepitar = setTimeout(crepitar, 150 + Math.random() * 1300);
}

// Decide si debe sonar: ofrenda encendida Y sonido no silenciado
function actualizarSonido() {
  const debeSonar = ofrendaEncendida && sonidoActivo;
  clearTimeout(timerMelodia);
  clearTimeout(timerCrepitar);

  // Música propia del usuario
  if (audioUsuario) {
    audioUsuario.volume = volumen;
    if (debeSonar) audioUsuario.play().catch(() => {});
    else audioUsuario.pause();
  }

  // Ambiente generado
  if (debeSonar && !audioUsuario) {
    if (!ctx) crearAudio();
    ctx.resume();
    master.gain.setTargetAtTime(volumen, ctx.currentTime, 0.8); // entrada suave
    melodia();
    crepitar();
  } else if (ctx) {
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);       // salida suave
  }
}

// Botón silenciar / activar
btnSonido.addEventListener('click', () => {
  sonidoActivo = !sonidoActivo;
  btnSonido.textContent = sonidoActivo ? '🔊' : '🔇';
  btnSonido.setAttribute('aria-pressed', sonidoActivo);
  actualizarSonido();
});

// Control de volumen
volumenInput.addEventListener('input', e => {
  volumen = parseFloat(e.target.value);
  if (audioUsuario) audioUsuario.volume = volumen;
  if (ctx && ofrendaEncendida && sonidoActivo && !audioUsuario) {
    master.gain.setTargetAtTime(volumen, ctx.currentTime, 0.1);
  }
});

// Cargar música propia (mp3, wav, ogg…)
btnMusica.addEventListener('click', () => inputAudio.click());
inputAudio.addEventListener('change', () => {
  const archivo = inputAudio.files[0];
  inputAudio.value = '';
  if (!archivo || !archivo.type.startsWith('audio/')) return;

  if (audioUsuario) { audioUsuario.pause(); URL.revokeObjectURL(audioUsuario.src); }
  audioUsuario = new Audio(URL.createObjectURL(archivo));
  audioUsuario.loop = true;
  actualizarSonido();
});

/* =========================================================
   7. TOOLTIPS (delegación de eventos: funciona con elementos
      que se añaden después, como fotos y ofrendas nuevas)
   ========================================================= */
function mostrarTooltip(el) {
  tooltip.textContent = el.dataset.tip;
  tooltip.classList.add('visible');

  const r = el.getBoundingClientRect();
  const t = tooltip.getBoundingClientRect();
  let x = r.left + r.width / 2 - t.width / 2;
  let y = r.top - t.height - 10;
  x = Math.max(8, Math.min(x, window.innerWidth - t.width - 8));
  if (y < 8) y = r.bottom + 10; // si no cabe arriba, va abajo

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}
function ocultarTooltip() { tooltip.classList.remove('visible'); }

document.addEventListener('mouseover', e => {                 // escritorio
  const el = e.target.closest('[data-tip]');
  if (el) mostrarTooltip(el);
});
document.addEventListener('mouseout', e => {
  const el = e.target.closest('[data-tip]');
  if (el && !el.contains(e.relatedTarget)) ocultarTooltip();
});
document.addEventListener('focusin', e => {                   // teclado
  const el = e.target.closest('[data-tip]');
  if (el) mostrarTooltip(el);
});
document.addEventListener('focusout', ocultarTooltip);
document.addEventListener('click', e => {                     // táctil (móvil)
  const el = e.target.closest('[data-tip]');
  if (el) mostrarTooltip(el); else ocultarTooltip();
});
window.addEventListener('scroll', ocultarTooltip, { passive: true });