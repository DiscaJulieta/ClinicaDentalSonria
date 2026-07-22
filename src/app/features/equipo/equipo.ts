import { Component } from '@angular/core';

interface Profesional {
  nombre: string;
  especialidad: string;
  bio: string;
  foto: string;
}

interface Valor {
  titulo: string;
  detalle: string;
}

@Component({
  selector: 'app-equipo',
  template: `
    <section class="container-x py-section">
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">Quiénes somos</p>
      <h1 class="mt-3 max-w-2xl font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
        Un equipo chico que te conoce por tu nombre
      </h1>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
        Somos pocos y así nos gusta: cada paciente lo atiende siempre la misma persona, de principio a fin.
      </p>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (p of equipo; track p.nombre) {
          <li class="overflow-hidden rounded-lg border border-ink/10 bg-alt transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-ambient">
            <img
              [src]="p.foto"
              [alt]="'Retrato de ' + p.nombre + ', ' + p.especialidad"
              class="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div class="p-6 md:p-8">
              <h2 class="font-serif text-2xl font-medium tracking-tight">{{ p.nombre }}</h2>
              <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-accent">
                {{ p.especialidad }}
              </p>
              <p class="mt-3 leading-relaxed text-ink/70">{{ p.bio }}</p>
            </div>
          </li>
        }
      </ul>
    </section>

    <section class="bg-alt">
      <div class="container-x py-section">
        <p class="text-xs font-semibold uppercase tracking-widest text-accent">Cómo trabajamos</p>
        <h2 class="mt-3 max-w-2xl font-serif text-[32px] font-medium leading-tight tracking-tight md:text-[40px]">
          Elegancia clínica, sin apuros ni frialdad de consultorio
        </h2>
        <ul class="mt-10 grid gap-8 md:grid-cols-3">
          @for (v of valores; track v.titulo) {
            <li>
              <div class="h-px w-12 bg-accent"></div>
              <h3 class="mt-4 font-serif text-xl font-medium tracking-tight">{{ v.titulo }}</h3>
              <p class="mt-2 leading-relaxed text-ink/70">{{ v.detalle }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Equipo {
  protected readonly equipo: Profesional[] = [
    {
      nombre: 'Dra. Valentina Ríos',
      especialidad: 'Implantología y cirugía',
      bio: 'Se formó en Buenos Aires y en Barcelona. Le obsesiona la precisión, pero atiende con una calma que se contagia. Dirige la clínica desde 2014.',
      foto: 'https://picsum.photos/seed/valentina-rios/600/750',
    },
    {
      nombre: 'Dr. Tomás Aguilar',
      especialidad: 'Estética y rehabilitación',
      bio: 'Diseño de sonrisa y carillas. Cree que el mejor trabajo es el que no se nota. Fanático de explicar cada paso antes de tocar nada.',
      foto: 'https://picsum.photos/seed/tomas-aguilar/600/750',
    },
    {
      nombre: 'Dra. Camila Ferrari',
      especialidad: 'Ortodoncia',
      bio: 'Especialista en alineadores invisibles. Acompaña tratamientos largos con un seguimiento cercano para que nunca te sientas solo en el camino.',
      foto: 'https://picsum.photos/seed/camila-ferrari/600/750',
    },
    {
      nombre: 'Dr. Nicolás Bravo',
      especialidad: 'Odontopediatría',
      bio: 'El que hace que los más chicos quieran volver. Paciencia infinita y una caja de stickers que renueva todas las semanas.',
      foto: 'https://picsum.photos/seed/nicolas-bravo/600/750',
    },
    {
      nombre: 'Lucía Méndez',
      especialidad: 'Higienista dental',
      bio: 'La primera cara que ves al entrar. Higiene profesional y educación de hábitos, con la teoría de que prevenir siempre es más lindo que curar.',
      foto: 'https://picsum.photos/seed/lucia-mendez/600/750',
    },
    {
      nombre: 'Martín Sosa',
      especialidad: 'Coordinación de pacientes',
      bio: 'Ordena la agenda, resuelve dudas y se asegura de que nada se pierda entre turno y turno. Si escribís a la clínica, seguro te responde él.',
      foto: 'https://picsum.photos/seed/martin-sosa/600/750',
    },
  ];

  protected readonly valores: Valor[] = [
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
}
