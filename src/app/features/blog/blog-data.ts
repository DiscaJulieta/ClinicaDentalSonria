// Datos del blog — Colaboradora A (PLAN.md §b). Contenido de fantasía, tono premium (voseo).
export interface Articulo {
  slug: string;
  titulo: string;
  categoria: string;
  extracto: string;
  fecha: string; // ISO
  autor: string;
  minutosLectura: number;
  imagen: string;
  cuerpo: string[]; // párrafos
}

export const ARTICULOS: Articulo[] = [
  {
    slug: 'cuidado-post-implante',
    titulo: 'Cuidado post-implante: las primeras semanas que definen todo',
    categoria: 'Implantología',
    extracto:
      'Un implante bien colocado es solo la mitad del trabajo. La otra mitad la hacés vos en casa, sobre todo en los primeros días. Te contamos cómo acompañar la cicatrización para que el resultado dure décadas.',
    fecha: '2026-06-18',
    autor: 'Dra. Valentina Ríos',
    minutosLectura: 6,
    imagen: '/assets/blog/cuidado-post-implante.jpg',
    cuerpo: [
      'Cuando salís del consultorio con un implante recién colocado, tenés en la boca una pieza de titanio que todavía no es parte de tu cuerpo. Lo será, pero eso lleva tiempo: entre ocho y doce semanas de un proceso silencioso llamado osteointegración, en el que el hueso crece y abraza la superficie del implante hasta hacerlo indistinguible de una raíz natural. Lo que hagas durante esas primeras semanas pesa muchísimo más de lo que la mayoría imagina.',
      'Las primeras cuarenta y ocho horas son las más sensibles. Es normal que haya algo de inflamación, una molestia sorda y, a veces, un poco de sangrado leve. Nada de eso debería asustarte: es la respuesta lógica del cuerpo ante una intervención. Lo que sí conviene es tenerle respeto. Aplicá frío las primeras horas —una bolsa de gel sobre la mejilla, veinte minutos sí y veinte minutos no— y mantené la cabeza un poco elevada cuando descanses. Ese gesto simple reduce la hinchazón más que cualquier pastilla.',
      'La comida es el primer gran tema. Durante los primeros días, elegí todo lo que puedas comer sin esfuerzo: sopas tibias (nunca calientes), purés, yogur, huevos revueltos, pescado desmenuzado. Masticá siempre del lado opuesto a la zona operada y evitá lo crujiente, lo pegajoso y las semillas chiquitas que pueden meterse justo donde no querés. No es para siempre: es una tregua de una semana que tu implante te va a agradecer.',
      'Con la higiene pasa algo curioso: por miedo a lastimar, muchos pacientes dejan de limpiar la zona, y ese es justamente el peor error. La placa bacteriana acumulada alrededor de un implante fresco es el enemigo número uno de la cicatrización. La clave está en limpiar con suavidad, no en dejar de limpiar. Usá un cepillo de cerdas extra suaves, movimientos delicados, y sumá los enjuagues que te indiquemos —habitualmente con clorhexidina durante los primeros días—. A partir de la segunda semana solemos incorporar cepillos interdentales finitos para la zona.',
      'Hay dos hábitos que conviene poner en pausa sin negociar: el cigarrillo y el alcohol. El tabaco reduce el riego sanguíneo de la encía y multiplica varias veces el riesgo de que el implante no integre; no es un consejo de manual, es la diferencia real entre que funcione o que fracase. El alcohol, por su parte, interfiere con la cicatrización y no se lleva bien con la medicación. Si alguna vez pensaste en dejar de fumar, este es un momento con una excusa perfecta.',
      '¿Y el deporte? Los primeros tres o cuatro días, calma. El esfuerzo físico intenso sube la presión, favorece el sangrado y te va a hacer sentir la zona más de lo necesario. Una caminata tranquila está perfecta; el gimnasio, el running exigente o la pileta pueden esperar una semana. Tu cuerpo está poniendo energía en un lado; no le pidas que la reparta.',
      'Es importante que sepas distinguir lo esperable de lo que merece una consulta. Molestia que baja día a día, hinchazón que cede hacia el tercer día, un hilo de sangre al enjuagar: todo eso entra dentro de lo normal. En cambio, dolor que en lugar de mejorar empeora, hinchazón que crece después del cuarto día, fiebre, un sabor feo persistente o la sensación de que el implante se mueve, son motivos para llamarnos sin esperar. Preferimos mil veces una consulta “de más” que un problema detectado tarde.',
      'Después de las primeras semanas viene la parte más fácil y más larga a la vez: cuidarlo como cuidarías un diente natural. Un implante no se caria, pero la encía que lo rodea sí se enferma si se descuida. Cepillado dos veces por día, limpieza interdental, y controles con nosotros cada seis meses. Con eso, las cifras juegan a tu favor: la enorme mayoría de los implantes bien cuidados siguen funcionando pasados los diez, quince y veinte años.',
      'Al final, la idea es simple. El implante te lo pusimos nosotros; la osteointegración la hace tu cuerpo; y el que sostiene todo eso en el tiempo sos vos, con gestos chicos y constantes. Si tenés cualquier duda en el camino, escribinos. Preferimos acompañarte de más que dejarte adivinando.',
    ],
  },
  {
    slug: 'mitos-del-blanqueamiento',
    titulo: 'Blanqueamiento dental: seis mitos que conviene dejar atrás',
    categoria: 'Estética',
    extracto:
      'Que arruina el esmalte, que cuanto más fuerte mejor, que con pasta “blanqueadora” alcanza. Alrededor del blanqueamiento hay más mitos que evidencia. Separemos lo que funciona de lo que solo suena bien.',
    fecha: '2026-07-02',
    autor: 'Dr. Tomás Aguilar',
    minutosLectura: 7,
    imagen: '/assets/blog/mitos-del-blanqueamiento.jpg',
    cuerpo: [
      'Pocos tratamientos generan tantas preguntas —y tanta desinformación— como el blanqueamiento dental. Es entendible: es visible, es deseado, y hay una industria enorme empujando productos de todo tipo. Vale la pena entonces poner algunas cosas en su lugar, porque una sonrisa más clara está muy al alcance, pero no de cualquier manera.',
      'Mito uno: “el blanqueamiento arruina el esmalte”. Es probablemente el más difundido y el más falso. Los blanqueamientos profesionales trabajan con peróxido de hidrógeno o de carbamida, que actúan liberando oxígeno dentro del diente y rompiendo las moléculas que le dan color a la mancha. No raspan, no desgastan, no adelgazan el esmalte. Lo que sí puede pasar es una sensibilidad temporal mientras dura el tratamiento, algo muy distinto a un daño estructural. La estructura del diente queda intacta.',
      'Mito dos: “cuanto más concentrado, mejor”. Acá está el corazón del asunto. Una concentración más alta no da una sonrisa más blanca; da más riesgo de sensibilidad y de irritar la encía, sin un resultado final mejor. El blanqueamiento tiene un techo natural: cada diente llega hasta cierto punto y no más allá, por más producto que le pongas. Un profesional elige la concentración justa para tu caso, no la más agresiva. Los kits caseros ultra concentrados que se consiguen por internet son el ejemplo perfecto de esto que no hay que hacer.',
      'Mito tres: “las pastas blanqueadoras blanquean”. En realidad, no cambian el color interno del diente. Lo que hacen es arrastrar manchas superficiales con partículas abrasivas, y algunas suman pigmentos que dan un efecto óptico pasajero. Sirven para mantener un resultado, no para lograrlo. Y ojo: usadas en exceso, las más abrasivas pueden hacer más mal que bien con el tiempo. Si esperabas un cambio real solo con cambiar la pasta, es momento de bajar esa expectativa.',
      'Mito cuatro: “sirve para todos los dientes por igual”. Falso, y este importa mucho antes de empezar. El blanqueamiento actúa sobre el diente natural, pero no sobre resinas, coronas ni carillas: esos materiales conservan su color original. Si tenés una restauración en un diente de adelante, blanquear el resto puede dejarla notoriamente más oscura que el resto. Por eso siempre miramos primero qué hay en tu boca y armamos un plan; a veces el orden correcto es blanquear y después renovar una restauración para que combine.',
      'Mito cinco: “los remedios caseros son igual de buenos y más baratos”. El bicarbonato, el carbón activado, el limón, la frutilla machacada: circulan por todos lados y comparten un problema. Los ácidos, como el del limón, desmineralizan el esmalte; los abrasivos fuertes, como el carbón, lo desgastan. Terminás con dientes que parecen algo más claros al principio porque perdieron superficie, y más manchados a mediano plazo porque el esmalte quedó más poroso y rugoso. Es el ejemplo clásico del remedio que sale más caro que la enfermedad.',
      'Mito seis: “una vez que blanqueás, es para siempre”. Ojalá, pero no. El resultado dura, en general, entre uno y tres años, y depende bastante de vos: el café, el té, el vino tinto, el mate y el cigarrillo van tiñendo de nuevo, de a poco. La buena noticia es que mantenerlo es fácil. Con una buena higiene, moderación con lo que más mancha, y algún retoque puntual cuando haga falta, la sonrisa se sostiene sin dramas.',
      'Entonces, ¿qué sí funciona? Un blanqueamiento supervisado, con diagnóstico previo, la concentración adecuada para tu caso y un control de la sensibilidad. Puede ser en el consultorio, más rápido, o con férulas personalizadas para hacer en casa a tu ritmo; muchas veces combinamos ambos. Lo importante no es el método de moda, sino que alguien mire tu boca antes de empezar.',
      'La conclusión es tranquilizadora: blanquear los dientes es seguro y efectivo cuando se hace bien. Los mitos casi siempre empujan hacia lo más fuerte, lo más rápido o lo más barato, y casi siempre es por ahí donde aparecen los problemas. Si querés una sonrisa más luminosa, agendá una consulta y lo charlamos. Vas a ver que el camino correcto es más simple —y más amable con tus dientes— de lo que suena.',
    ],
  },
];
