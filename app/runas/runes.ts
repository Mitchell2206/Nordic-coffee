export type Rune = {
  slug: string;
  symbol: string;
  name: string;
  essence: string;
  message: string;
  present: string;
  question: string;
  ritual: string;
};

export const runes: Rune[] = [
  {
    slug: "fehu",
    symbol: "ᚠ",
    name: "Fehu",
    essence: "Abundancia en movimiento",
    message:
      "Fehu te recuerda que la abundancia crece cuando la reconocés, la cuidás y la dejás circular. Lo valioso no es solamente lo material: también vive en tu tiempo, tu energía, tus vínculos y aquello que sabés hacer.",
    present:
      "Quizás hoy no necesites buscar más, sino mirar con otros ojos lo que ya está disponible para vos.",
    question: "¿Qué riqueza de tu vida estás dejando de reconocer?",
    ritual:
      "Sostené la taza entre tus manos y nombrá, en silencio, tres cosas que ya hacen abundante tu presente.",
  },
  {
    slug: "uruz",
    symbol: "ᚢ",
    name: "Uruz",
    essence: "Fuerza vital",
    message:
      "Uruz habla de una fuerza auténtica: la que no necesita demostrar nada. Aparece cuando tu cuerpo y tu voluntad quieren recuperar espacio, impulso y confianza.",
    present:
      "Tu energía puede estar pidiéndote movimiento, pero también descanso. Escuchar esa diferencia es parte de tu fortaleza.",
    question: "¿Dónde necesitás confiar un poco más en tu propia capacidad?",
    ritual:
      "Inhalá contando cuatro, exhalá contando seis y sentí cómo tu cuerpo vuelve a ocupar el presente.",
  },
  {
    slug: "thurisaz",
    symbol: "ᚦ",
    name: "Thurisaz",
    essence: "Límite consciente",
    message:
      "Thurisaz llega como una pausa protectora. No todo requiere una respuesta inmediata; a veces, la decisión más poderosa es observar antes de avanzar.",
    present:
      "Puede haber algo que necesite un límite claro o una reacción menos impulsiva. Darte tiempo también es elegir.",
    question: "¿Qué cambiaría si hoy respondieras desde la calma y no desde la urgencia?",
    ritual:
      "Antes del próximo sorbo, quedate unos segundos en silencio y elegí qué merece tu energía y qué no.",
  },
  {
    slug: "ansuz",
    symbol: "ᚨ",
    name: "Ansuz",
    essence: "Palabra y escucha",
    message:
      "Ansuz habla de las palabras que abren caminos y de la escucha que permite comprender. Tu voz importa, pero también lo que aparece cuando dejás un espacio para oír de verdad.",
    present:
      "Una conversación, una idea o una frase puede traer la claridad que estabas buscando. Prestá atención a lo simple.",
    question: "¿Qué necesitás expresar con más honestidad?",
    ritual:
      "Pensá una frase que resuma lo que sentís hoy. No la adornes: dejá que sea verdadera.",
  },
  {
    slug: "raidho",
    symbol: "ᚱ",
    name: "Raidho",
    essence: "Movimiento con sentido",
    message:
      "Raidho te invita a revisar el rumbo. Avanzar no siempre significa ir más rápido; a veces significa ordenar los pasos para que se parezcan más a la vida que querés construir.",
    present:
      "Puede que estés en movimiento, pero necesites volver a preguntarte hacia dónde y para qué.",
    question: "¿Tu ritmo actual te acerca o te aleja de lo que realmente querés?",
    ritual:
      "Elegí una acción pequeña y concreta que puedas hacer hoy para volver a tu dirección.",
  },
  {
    slug: "kenaz",
    symbol: "ᚲ",
    name: "Kenaz",
    essence: "Claridad encendida",
    message:
      "Kenaz es la luz que permite ver lo que antes estaba confuso. No promete tener todas las respuestas, pero sí una chispa suficiente para dar el próximo paso.",
    present:
      "Algo empieza a revelarse: una idea, un deseo o una verdad que ya no quiere permanecer escondida.",
    question: "¿Qué se vuelve evidente cuando dejás de evitarlo?",
    ritual:
      "Mirá el color y la textura de tu café. Elegí una idea que quieras iluminar y escribí su primer paso.",
  },
  {
    slug: "gebo",
    symbol: "ᚷ",
    name: "Gebo",
    essence: "Reciprocidad",
    message:
      "Gebo aparece para recordarte que los vínculos más sanos encuentran equilibrio entre dar y recibir. Aceptar apoyo también es una forma de confianza.",
    present:
      "Tal vez estés ofreciendo demasiado sin dejar espacio para recibir, o esperando algo que todavía no expresaste.",
    question: "¿En qué vínculo necesitás recuperar el equilibrio?",
    ritual:
      "Pensá en alguien que haya sumado algo bueno a tu vida y regalale hoy un agradecimiento sincero.",
  },
  {
    slug: "wunjo",
    symbol: "ᚹ",
    name: "Wunjo",
    essence: "Alegría presente",
    message:
      "Wunjo te acerca a una alegría tranquila, de esas que no necesitan grandes motivos. Es la sensación de estar, por un momento, en armonía con vos y con lo que te rodea.",
    present:
      "Quizás la felicidad no esté lejos: puede estar escondida en algo pequeño que la prisa no te deja disfrutar.",
    question: "¿Qué gesto sencillo podría hacer más amable tu día?",
    ritual:
      "Tomá un sorbo sin hacer otra cosa. Permitite disfrutarlo como si ese minuto fuera suficiente.",
  },
  {
    slug: "hagalaz",
    symbol: "ᚺ",
    name: "Hagalaz",
    essence: "Transformación inesperada",
    message:
      "Hagalaz reconoce esos cambios que desordenan lo conocido. No todo puede controlarse, pero sí podés elegir cómo acompañarte mientras una forma vieja deja lugar a otra.",
    present:
      "Algo puede estar rompiendo una estructura que ya era demasiado pequeña para vos. La incomodidad también puede abrir espacio.",
    question: "¿Qué intentás sostener aunque ya haya comenzado a cambiar?",
    ritual:
      "Exhalá lentamente y soltá una expectativa que hoy no depende de vos. Quedate con lo que sí podés cuidar.",
  },
  {
    slug: "nauthiz",
    symbol: "ᚾ",
    name: "Nauthiz",
    essence: "Lo esencial",
    message:
      "Nauthiz distingue el deseo de la necesidad. Cuando todo parece urgente, esta runa te invita a volver a lo básico y atender primero aquello que realmente sostiene tu bienestar.",
    present:
      "Puede que una limitación esté ayudándote a priorizar. Menos opciones también pueden traer más claridad.",
    question: "¿Qué necesitás de verdad en este momento?",
    ritual:
      "Elegí una sola necesidad posible de atender hoy y comprometete con un gesto concreto para cuidarla.",
  },
  {
    slug: "isa",
    symbol: "ᛁ",
    name: "Isa",
    essence: "Pausa y quietud",
    message:
      "Isa no habla de estar detenido para siempre, sino del valor de no forzar. Hay momentos en los que la claridad llega cuando dejás de empujar y permitís que el ruido se aquiete.",
    present:
      "Si algo no avanza, quizás todavía no necesita acción. Puede necesitar observación, paciencia o una pausa honesta.",
    question: "¿Qué podrías comprender si dejaras de apurarlo?",
    ritual:
      "Quedate inmóvil durante tres respiraciones. Sentí la temperatura de la taza y volvé a este instante.",
  },
  {
    slug: "jera",
    symbol: "ᛃ",
    name: "Jera",
    essence: "Tiempo y cosecha",
    message:
      "Jera te recuerda que cada proceso tiene su propio ritmo. Lo que cuidás con constancia puede estar creciendo incluso cuando todavía no ves el resultado completo.",
    present:
      "Este puede ser un momento para reconocer avances, sostener hábitos y dejar de comparar tu tiempo con el de otras personas.",
    question: "¿Qué proceso merece que confíes un poco más en su tiempo?",
    ritual:
      "Recordá algo que hayas sostenido durante los últimos meses y reconocé cuánto cambió gracias a tu constancia.",
  },
  {
    slug: "eihwaz",
    symbol: "ᛇ",
    name: "Eihwaz",
    essence: "Resistencia y transición",
    message:
      "Eihwaz aparece cuando estás atravesando un pasaje interno. Habla de la capacidad de mantenerte firme sin volverte rígido mientras algo profundo se transforma.",
    present:
      "Tal vez ya no seas quien eras, aunque todavía no puedas nombrar del todo en quién te estás convirtiendo.",
    question: "¿Qué parte de vos se está fortaleciendo durante esta transición?",
    ritual:
      "Apoyá bien los pies en el suelo y sentí tu eje. Repetí en silencio: puedo cambiar sin perderme.",
  },
  {
    slug: "perthro",
    symbol: "ᛈ",
    name: "Perthro",
    essence: "Misterio y posibilidad",
    message:
      "Perthro te invita a dejar una puerta abierta a lo inesperado. No conocer el resultado no significa estar perdido; también puede significar que algo nuevo todavía está tomando forma.",
    present:
      "Quizás estés buscando una certeza que aún no existe. La curiosidad puede acompañarte mejor que el control.",
    question: "¿Qué posibilidad aparecería si no necesitaras saberlo todo ahora?",
    ritual:
      "Elegí una situación incierta y cambiá por un instante la pregunta “¿qué va a pasar?” por “¿qué puedo descubrir?”.",
  },
  {
    slug: "algiz",
    symbol: "ᛉ",
    name: "Algiz",
    essence: "Protección y cuidado",
    message:
      "Algiz aparece para recordarte que proteger tu energía también es una forma de cuidarte. No todo merece acceso a vos, y poner límites no te aleja del amor: te acerca a tu centro.",
    present:
      "Prestá atención a aquello que te devuelve calma y a lo que, por el contrario, te deja sin energía.",
    question: "¿Qué necesitás cuidar más en este momento?",
    ritual:
      "Rodeá la taza con ambas manos y visualizá un límite amable alrededor de aquello que hoy querés proteger.",
  },
  {
    slug: "sowulo",
    symbol: "ᛊ",
    name: "Sowulo",
    essence: "Luz y dirección interior",
    message:
      "Sowulo trae una luz cálida sobre aquello que te devuelve vitalidad. Te invita a reconocer tu propia claridad sin esperar que alguien más confirme lo que ya sentís.",
    present:
      "Hay una parte de vos que sabe hacia dónde ir. Tal vez solo necesite menos ruido para poder escucharla.",
    question: "¿Qué decisión se siente más luminosa cuando pensás en ella?",
    ritual:
      "Acercate a una fuente de luz y elegí una intención breve para acompañar el resto de tu día.",
  },
  {
    slug: "tiwaz",
    symbol: "ᛏ",
    name: "Tiwaz",
    essence: "Coraje y coherencia",
    message:
      "Tiwaz habla del valor de actuar de acuerdo con lo que considerás justo, incluso cuando hacerlo requiere esfuerzo. El coraje también puede ser sereno.",
    present:
      "Puede que tengas que elegir entre lo cómodo y lo coherente. Tu integridad puede funcionar como brújula.",
    question: "¿Qué elección te permitiría sentirte más en paz con vos?",
    ritual:
      "Escribí una decisión pendiente y debajo completá: “Lo más honesto para mí sería…”.",
  },
  {
    slug: "berkano",
    symbol: "ᛒ",
    name: "Berkano",
    essence: "Renovación y cuidado",
    message:
      "Berkano acompaña los comienzos que necesitan ternura. Lo nuevo no siempre llega con seguridad; a veces aparece pequeño, frágil y pidiendo tiempo para crecer.",
    present:
      "Una idea, un vínculo o una versión tuya puede estar naciendo. Cuidarla importa más que apurarla.",
    question: "¿Qué parte nueva de tu vida necesita más paciencia y menos exigencia?",
    ritual:
      "Elegí algo que quieras nutrir y pensá cuál sería su gesto mínimo de cuidado para hoy.",
  },
  {
    slug: "ehwaz",
    symbol: "ᛖ",
    name: "Ehwaz",
    essence: "Confianza compartida",
    message:
      "Ehwaz habla del movimiento que se vuelve posible cuando hay confianza. No todos los caminos tienen que recorrerse en soledad; avanzar con alguien también requiere aprender a coordinar ritmos.",
    present:
      "Puede haber una alianza, una conversación o una ayuda capaz de destrabar lo que venías intentando resolver solo.",
    question: "¿Con quién podrías avanzar mejor si te permitieras confiar?",
    ritual:
      "Pensá en una persona con la que puedas construir algo bueno y escribile un mensaje claro para acercar el próximo paso.",
  },
  {
    slug: "mannaz",
    symbol: "ᛗ",
    name: "Mannaz",
    essence: "Humanidad y autoconocimiento",
    message:
      "Mannaz te invita a mirarte con honestidad y humanidad. Sos una persona en proceso: capaz, imperfecta y profundamente conectada con otras personas.",
    present:
      "Quizás sea momento de soltar una versión idealizada de vos y valorar quién sos hoy, con todo lo aprendido y lo que todavía estás descubriendo.",
    question: "¿Cómo te tratarías si fueras alguien a quien querés mucho?",
    ritual:
      "Nombrá una cualidad propia que agradecés y una parte tuya que hoy necesita comprensión, no juicio.",
  },
  {
    slug: "laguz",
    symbol: "ᛚ",
    name: "Laguz",
    essence: "Intuición y fluidez",
    message:
      "Laguz te conecta con el movimiento del agua y con esa percepción que aparece antes que las explicaciones. Fluir no es dejarse llevar por todo, sino reconocer cuándo acompañar y cuándo cambiar de cauce.",
    present:
      "Tus emociones pueden estar mostrando algo que tu mente todavía intenta ordenar. Escucharlas no significa obedecerlas sin pensar.",
    question: "¿Qué sensación se repite y qué podría estar intentando decirte?",
    ritual:
      "Tomá un sorbo lentamente y nombrá la emoción más presente sin corregirla ni justificarla.",
  },
  {
    slug: "ingwaz",
    symbol: "ᛜ",
    name: "Ingwaz",
    essence: "Gestación y energía contenida",
    message:
      "Ingwaz representa aquello que crece en silencio antes de mostrarse. No todo proyecto, deseo o cambio necesita ser compartido de inmediato; algunas cosas se fortalecen en la intimidad.",
    present:
      "Algo puede estar listo para madurar, pero todavía necesita cuidado y concentración antes de salir al mundo.",
    question: "¿Qué estás construyendo en silencio que merece tu confianza?",
    ritual:
      "Protegé durante hoy una idea importante de las opiniones externas y regalale veinte minutos de atención real.",
  },
  {
    slug: "dagaz",
    symbol: "ᛞ",
    name: "Dagaz",
    essence: "Despertar y nueva perspectiva",
    message:
      "Dagaz marca ese instante en que la luz cambia y algo se entiende de otra manera. La situación puede ser la misma, pero vos ya no la estás mirando desde el mismo lugar.",
    present:
      "Una etapa puede estar acercándose a un punto de claridad. Permitite reconocer lo que ahora sabés y antes no podías ver.",
    question: "¿Qué cambió en vos aunque desde afuera todavía no se note?",
    ritual:
      "Completá esta frase: “A partir de hoy quiero mirar esto de una manera diferente…”.",
  },
  {
    slug: "othala",
    symbol: "ᛟ",
    name: "Othala",
    essence: "Raíces y pertenencia",
    message:
      "Othala te acerca a las raíces que te sostienen: historias, personas, lugares y aprendizajes que forman parte de vos. Pertenecer no significa quedarte igual; también implica elegir qué legado querés continuar.",
    present:
      "Puede ser momento de volver a algo esencial, agradecer de dónde venís o construir una forma más propia de sentir hogar.",
    question: "¿Qué querés conservar de tu historia y qué querés transformar?",
    ritual:
      "Recordá un lugar, aroma o persona que te haga sentir en casa. Llevá esa sensación con vos durante el día.",
  },
];
