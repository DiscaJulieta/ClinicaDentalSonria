import { Component, computed, input } from '@angular/core';
import { HoursBadge } from '../hours-badge/hours-badge';

export interface Resena {
  id: number;
  autor: string;
  texto: string;
  hace: string;
}

// Ficha de Google Business simulada — compartida (PLAN.md §f.5). Datos por @Input.
@Component({
  selector: 'app-gbp-card',
  imports: [HoursBadge],
  template: `
    <article
      class="rounded-lg border border-ink/10 bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-ambient md:p-10"
      aria-labelledby="gbp-nombre"
    >
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">
        Ficha de Google
      </p>
      <h3 id="gbp-nombre" class="mt-2 font-serif text-2xl font-medium tracking-tight text-ink">
        {{ nombre() }}
      </h3>

      <p class="mt-3 flex items-center gap-2" [attr.aria-label]="ratingTexto()">
        <span class="text-sm font-semibold text-ink">{{ rating() }}</span>
        <span class="flex gap-0.5" aria-hidden="true">
          @for (estrella of estrellas(); track estrella.n) {
            <span [class]="estrella.llena ? 'text-accent' : 'text-ink/20'">★</span>
          }
        </span>
        <span class="text-sm text-ink/60">({{ resenas() }} reseñas)</span>
      </p>

      <div class="mt-4 flex flex-wrap items-center gap-3">
        <app-hours-badge />
        <span class="text-sm text-ink/70">{{ direccion() }}</span>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        @for (accion of acciones; track accion) {
          <button
            type="button"
            class="rounded border border-ink/20 px-4 py-3 text-sm text-ink transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            [attr.aria-label]="accion + ' (demo, sin acción real)'"
          >
            {{ accion }}
          </button>
        }
      </div>

      <ul class="mt-6 space-y-4 border-t border-ink/10 pt-6">
        @for (resena of opiniones(); track resena.id) {
          <li>
            <p class="text-sm font-semibold text-ink">
              {{ resena.autor }}
              <span class="font-normal text-ink/50">· {{ resena.hace }}</span>
            </p>
            <p class="mt-1 text-sm leading-relaxed text-ink/70">{{ resena.texto }}</p>
          </li>
        }
      </ul>

      <p class="mt-6 text-xs text-ink/50">
        Ficha de demostración: los datos y las reseñas son ficticios.
      </p>
    </article>
  `,
})
export class GbpCard {
  readonly nombre = input('Sonría — Clínica Dental');
  readonly rating = input(4.8);
  readonly resenas = input(214);
  readonly direccion = input('Av. Belgrano 1240, Ciudad');
  readonly opiniones = input<Resena[]>([
    {
      id: 1,
      autor: 'Lucía M.',
      texto: 'Me atendieron puntual y me explicaron todo antes de empezar. Salí sin ansiedad.',
      hace: 'hace 2 semanas',
    },
    {
      id: 2,
      autor: 'Diego R.',
      texto: 'Hice el blanqueamiento y el resultado es natural. El consultorio es impecable.',
      hace: 'hace 1 mes',
    },
  ]);

  protected readonly acciones = ['Cómo llegar', 'Llamar', 'Sitio web'];
  protected readonly ratingTexto = computed(
    () => `${this.rating().toString().replace('.', ',')} de 5 estrellas`,
  );
  protected readonly estrellas = computed(() =>
    [1, 2, 3, 4, 5].map((n) => ({ n, llena: n <= Math.round(this.rating()) })),
  );
}
