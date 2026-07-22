// Datos del equipo — extraídos del componente en la integración de Home (#10)
// para poder mostrar un preview de 3 profesionales en `/` sin duplicar contenido.
export interface Profesional {
  nombre: string;
  especialidad: string;
  bio: string;
  foto: string;
}

export interface Valor {
  titulo: string;
  detalle: string;
}

export const EQUIPO: Profesional[] = [
  {
    nombre: 'Dra. Valentina Ríos',
    especialidad: 'Implantología y cirugía',
    bio: 'Se formó en Buenos Aires y en Barcelona. Le obsesiona la precisión, pero atiende con una calma que se contagia. Dirige la clínica desde 2014.',
    foto: '/assets/equipo/valentina-rios.jpg',
  },
  {
    nombre: 'Dr. Tomás Aguilar',
    especialidad: 'Estética y rehabilitación',
    bio: 'Diseño de sonrisa y carillas. Cree que el mejor trabajo es el que no se nota. Fanático de explicar cada paso antes de tocar nada.',
    foto: '/assets/equipo/tomas-aguilar.jpg',
  },
  {
    nombre: 'Dra. Camila Ferrari',
    especialidad: 'Ortodoncia',
    bio: 'Especialista en alineadores invisibles. Acompaña tratamientos largos con un seguimiento cercano para que nunca te sientas solo en el camino.',
    foto: '/assets/equipo/camila-ferrari.jpg',
  },
  {
    nombre: 'Dr. Nicolás Bravo',
    especialidad: 'Odontopediatría',
    bio: 'El que hace que los más chicos quieran volver. Paciencia infinita y una caja de stickers que renueva todas las semanas.',
    foto: '/assets/equipo/nicolas-bravo.jpg',
  },
  {
    nombre: 'Lucía Méndez',
    especialidad: 'Higienista dental',
    bio: 'La primera cara que ves al entrar. Higiene profesional y educación de hábitos, con la teoría de que prevenir siempre es más lindo que curar.',
    foto: '/assets/equipo/lucia-mendez.jpg',
  },
  {
    nombre: 'Martín Sosa',
    especialidad: 'Coordinación de pacientes',
    bio: 'Ordena la agenda, resuelve dudas y se asegura de que nada se pierda entre turno y turno. Si escribís a la clínica, seguro te responde él.',
    foto: '/assets/equipo/martin-sosa.jpg',
  },
];

export const VALORES: Valor[] = [
  {
    titulo: 'Tiempo real para cada uno',
    detalle: 'Agendamos turnos largos a propósito. Nadie sale con la sensación de haber pasado por una cinta transportadora.',
  },
  {
    titulo: 'Te contamos todo antes',
    detalle: 'Diagnóstico claro, opciones sobre la mesa y presupuesto sin letra chica. Vos decidís con toda la información.',
  },
  {
    titulo: 'Un espacio que no intimida',
    detalle: 'Luz cálida, silencio y cero olor a consultorio. Queremos que venir al dentista deje de ser algo que se posterga.',
  },
];
