import { Component, inject } from '@angular/core';
import { AppointmentService } from '../../core/services/appointment.service';
import { SERVICIOS } from './servicios-data';

@Component({
  selector: 'app-servicios',
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
        <button type="button" class="btn-cta" (click)="pedirTurno()">Pedir turno</button>
      </div>
    </section>
  `,
})
export class Servicios {
  private readonly appointment = inject(AppointmentService);
  protected readonly servicios = SERVICIOS;

  protected pedirTurno() {
    this.appointment.open();
  }
}
