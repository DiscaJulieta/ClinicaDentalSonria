import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Servicio {
  titulo: string;
  descripcion: string;
  chip: string;
  icon: string; // path `d` (trazo fino, DESIGN.md §4)
}

@Component({
  selector: 'app-servicios',
  imports: [RouterLink],
  template: `
    <section class="container-x py-section">
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">Nuestros servicios</p>
      <h1 class="mt-3 max-w-2xl font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
        Odontología pensada con calma y detalle
      </h1>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
        Cada tratamiento arranca con una conversación, no con una silla. Elegí el que necesitás
        y coordinamos el resto sin apuros.
      </p>

      <ul class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        @for (s of servicios; track s.titulo) {
          <li
            class="group rounded-lg border border-ink/10 bg-alt p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-ambient md:p-10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-9 w-9 text-brand"
              aria-hidden="true"
            >
              <path [attr.d]="s.icon" />
            </svg>
            <h2 class="mt-5 font-serif text-2xl font-medium tracking-tight">{{ s.titulo }}</h2>
            <p class="mt-3 leading-relaxed text-ink/70">{{ s.descripcion }}</p>
            <span
              class="mt-5 inline-block rounded bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink"
              >{{ s.chip }}</span
            >
          </li>
        }
      </ul>

      <div class="mt-16 flex flex-col items-start gap-4 border-t border-ink/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p class="font-serif text-2xl tracking-tight">¿No sabés por dónde empezar? Charlémoslo.</p>
        <a routerLink="/contacto" class="btn-cta">Pedir turno</a>
      </div>
    </section>
  `,
})
export class Servicios {
  protected readonly servicios: Servicio[] = [
    {
      titulo: 'Implantes dentales',
      descripcion:
        'Reponemos piezas perdidas con implantes de titanio que se ven y se sienten como propios. Planificación digital y seguimiento cercano.',
      chip: 'Turno disponible',
      icon: 'M8 3c-2 0-3.5 1.5-3.5 4 0 3 1 4 1.5 8 .3 2.4 2 2.4 2.2 0 .2-2 .5-3 1.8-3s1.6 1 1.8 3c.2 2.4 1.9 2.4 2.2 0 .5-4 1.5-5 1.5-8 0-2.5-1.5-4-3.5-4-1 0-1.5.5-2.5.5S9 3 8 3z',
    },
    {
      titulo: 'Ortodoncia invisible',
      descripcion:
        'Alineadores transparentes y removibles para corregir la mordida sin brackets a la vista. Ideal para adultos y adolescentes.',
      chip: 'Consulta previa',
      icon: 'M6 4v16M18 4v16M10 8h4M10 16h4',
    },
    {
      titulo: 'Estética y blanqueamiento',
      descripcion:
        'Diseño de sonrisa, carillas y blanqueamiento supervisado. Realzamos lo que ya tenés, con criterio y sin exageraciones.',
      chip: 'Turno disponible',
      icon: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',
    },
    {
      titulo: 'Limpieza y prevención',
      descripcion:
        'Higiene profesional, control de placa y hábitos. La base para que todo lo demás dure. Recomendada cada seis meses.',
      chip: 'Sin espera',
      icon: 'M12 3s6 6.5 6 10.5a6 6 0 11-12 0C6 9.5 12 3 12 3z',
    },
    {
      titulo: 'Urgencias',
      descripcion:
        'Dolor, un golpe, algo que se rompió. Reservamos huecos en la agenda para atenderte el mismo día siempre que se pueda.',
      chip: 'Atención en el día',
      icon: 'M12 5v14M5 12h14',
    },
    {
      titulo: 'Odontopediatría',
      descripcion:
        'La primera visita marca el resto. Acompañamos a los más chicos con paciencia para que el consultorio no dé miedo.',
      chip: 'Turno disponible',
      icon: 'M12 20s-7-4.5-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3.5C19 15.5 12 20 12 20z',
    },
  ];
}
