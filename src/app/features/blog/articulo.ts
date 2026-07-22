import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppointmentService } from '../../core/services/appointment.service';
import { ARTICULOS } from './blog-data';
import { fechaLarga } from './fecha';

@Component({
  selector: 'app-articulo',
  imports: [RouterLink],
  template: `
    @if (articulo(); as a) {
      <article class="pb-section">
        <header class="container-x pt-section">
          <p class="text-xs font-semibold uppercase tracking-widest text-accent">{{ a.categoria }}</p>
          <h1 class="mt-3 max-w-3xl font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
            {{ a.titulo }}
          </h1>
          <p class="mt-5 text-sm text-ink/60">
            Por {{ a.autor }} · {{ fecha(a.fecha) }} · {{ a.minutosLectura }} min de lectura
          </p>
          <img
            [src]="a.imagen"
            [alt]="'Ilustración del artículo: ' + a.titulo"
            class="mt-8 aspect-[16/9] w-full rounded-lg border border-ink/10 object-cover"
          />
        </header>

        <div class="container-x mt-12 max-w-2xl">
          @for (parrafo of a.cuerpo; track $index) {
            <p class="mb-6 text-lg leading-relaxed text-ink/80">{{ parrafo }}</p>
          }
        </div>

        @if (relacionados().length) {
          <section class="container-x mt-20 border-t border-ink/10 pt-12">
            <h2 class="font-serif text-2xl font-medium tracking-tight">Seguí leyendo</h2>
            <ul class="mt-8 grid gap-8 sm:grid-cols-2">
              @for (r of relacionados(); track r.slug) {
                <li class="group">
                  <a [routerLink]="['/blog', r.slug]" class="block">
                    <p class="text-xs font-semibold uppercase tracking-widest text-accent">{{ r.categoria }}</p>
                    <h3 class="mt-2 font-serif text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
                      {{ r.titulo }}
                    </h3>
                    <p class="mt-2 leading-relaxed text-ink/70">{{ r.extracto }}</p>
                  </a>
                </li>
              }
            </ul>
          </section>
        }

        <div class="container-x mt-20 flex flex-col items-start gap-4 rounded-lg bg-alt p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p class="font-serif text-2xl tracking-tight">¿Te quedaron dudas? Charlémoslas en persona.</p>
          <button type="button" class="btn-cta" (click)="pedirTurno()">Pedir turno</button>
        </div>
      </article>
    } @else {
      <section class="container-x py-section text-center">
        <p class="text-xs font-semibold uppercase tracking-widest text-accent">Artículo no encontrado</p>
        <h1 class="mt-3 font-serif text-[32px] font-semibold tracking-tight md:text-[40px]">
          Esta nota no existe o fue movida
        </h1>
        <p class="mt-4 text-ink/70">Volvé al índice para ver todo lo que publicamos.</p>
        <a routerLink="/blog" class="btn-cta mt-8">Ver el blog</a>
      </section>
    }
  `,
})
export class Articulo {
  private readonly appointment = inject(AppointmentService);

  // El componente se reutiliza al ir de un artículo a otro: hay que leer el param
  // como signal, no con snapshot (si no, cambia la URL y el contenido no).
  private readonly slug = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug'))),
  );
  protected readonly fecha = fechaLarga;
  protected readonly articulo = computed(() => ARTICULOS.find((a) => a.slug === this.slug()));
  protected readonly relacionados = computed(() =>
    ARTICULOS.filter((a) => a.slug !== this.slug()).slice(0, 2),
  );

  protected pedirTurno() {
    this.appointment.open();
  }
}
