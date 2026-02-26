export interface Profession {
  id: string;
  title: string;
  subtitle: string;
  whatTheyDo: string;
  problemsSolved: string;
  dayInLife: string;
  myths: { myth: string; reality: string }[];
  quote: string;
  quoteAuthor: string;
}

export const professions: Profession[] = [
  {
    id: "maquetador",
    title: "Maquetador Web",
    subtitle: "El arquitecto invisible de cada píxel",
    whatTheyDo:
      "Traduce diseños visuales en código funcional. Cada botón que pulsas, cada texto que se adapta a tu pantalla, cada animación que te guía — un maquetador lo construyó línea a línea.",
    problemsSolved:
      "Sin ellos, los diseños serían imágenes estáticas. Son el puente entre la idea visual y la experiencia real del usuario. Resuelven la distancia entre lo bonito y lo funcional.",
    dayInLife:
      "Su día empieza revisando un diseño en Figma. Luego abre su editor, escribe HTML, CSS, y JavaScript. Prueba en Chrome, Safari, Firefox. Ajusta. Comprueba en móvil. Ajusta más. Un píxel fuera de lugar puede arruinar horas de trabajo.",
    myths: [
      { myth: "Solo copia y pega código", reality: "Cada layout es un puzzle único que requiere pensamiento estructural y creatividad técnica." },
      { myth: "Es lo mismo que un diseñador", reality: "El diseñador crea la visión; el maquetador la hace real, navegable y accesible." },
    ],
    quote: "Mi mejor trabajo es el que nadie nota. Si la web simplemente funciona, hice bien mi trabajo.",
    quoteAuthor: "Maquetador senior, 8 años de experiencia",
  },
  {
    id: "ux",
    title: "Especialista en UX",
    subtitle: "El detective de la frustración digital",
    whatTheyDo:
      "Investiga cómo las personas realmente usan los productos digitales. Observa, pregunta, analiza y diseña soluciones que hacen que la tecnología se sienta natural e intuitiva.",
    problemsSolved:
      "¿Por qué los usuarios abandonan un formulario a la mitad? ¿Por qué nadie encuentra el botón de contacto? El especialista UX encuentra estas respuestas antes de que cuesten dinero.",
    dayInLife:
      "Empieza el día analizando grabaciones de sesiones de usuarios. Nota que el 60% abandona en el paso 3 del checkout. Diseña tres alternativas, las testea con usuarios reales, presenta datos al equipo. No opiniones, datos.",
    myths: [
      { myth: "Solo hace cosas bonitas", reality: "La UX se basa en investigación, psicología y datos. Lo bonito es solo la superficie." },
      { myth: "Es un rol prescindible", reality: "Cada euro invertido en UX devuelve entre 10 y 100 euros en conversiones y retención." },
    ],
    quote: "No diseño para mí. Diseño para la persona que tiene prisa, que está frustrada, que necesita que algo simplemente funcione.",
    quoteAuthor: "UX Researcher, startup fintech",
  },
  {
    id: "localizador",
    title: "Localizador",
    subtitle: "El traductor que va más allá de las palabras",
    whatTheyDo:
      "Adapta productos digitales a diferentes culturas e idiomas. No solo traduce texto — adapta formatos de fecha, monedas, humor, imágenes y flujos completos para que se sientan nativos en cada mercado.",
    problemsSolved:
      "Un botón que dice 'Get Started' no se traduce igual en japonés que en español. Un color que inspira confianza en Europa puede significar luto en Asia. El localizador previene estos choques culturales.",
    dayInLife:
      "Recibe un archivo con 2.000 cadenas de texto para una app. Adapta cada una al contexto cultural del mercado objetivo. Coordina con desarrolladores para textos que se expanden un 30% en alemán. Revisa screenshots para confirmar que nada se corta.",
    myths: [
      { myth: "Es simplemente traducir", reality: "La localización incluye adaptación cultural, técnica y legal. Es ingeniería lingüística." },
      { myth: "Google Translate puede hacerlo", reality: "La IA traduce palabras. Un localizador traduce intenciones, matices y experiencias." },
    ],
    quote: "Cuando un usuario en Tokio siente que la app fue hecha para él, ahí está mi trabajo invisible.",
    quoteAuthor: "Localizadora freelance, 12 idiomas",
  },
  {
    id: "seo",
    title: "Especialista SEO",
    subtitle: "El estratega que susurra a los algoritmos",
    whatTheyDo:
      "Optimiza sitios web para que aparezcan cuando los usuarios buscan soluciones. Combina análisis técnico, contenido estratégico y comprensión del comportamiento humano de búsqueda.",
    problemsSolved:
      "Tener la mejor web del mundo no sirve si nadie la encuentra. El SEO conecta preguntas con respuestas, necesidades con soluciones, personas con productos.",
    dayInLife:
      "Revisa métricas de tráfico orgánico. Analiza qué busca la gente y cómo lo busca. Optimiza títulos, estructura y velocidad. Coordina con desarrollo para resolver problemas técnicos. Espera. El SEO es un juego de paciencia.",
    myths: [
      { myth: "Es meter palabras clave a lo loco", reality: "El SEO moderno es estrategia de contenido, arquitectura web y experiencia de usuario combinadas." },
      { myth: "Resultados inmediatos", reality: "Los resultados orgánicos tardan meses. Es una inversión a largo plazo que crece exponencialmente." },
    ],
    quote: "Mi trabajo es hacer que la respuesta correcta encuentre a la persona correcta en el momento correcto.",
    quoteAuthor: "Head of SEO, agencia digital",
  },
];
