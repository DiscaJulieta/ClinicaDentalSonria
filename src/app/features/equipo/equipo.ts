import { Component } from '@angular/core';
import { EQUIPO, VALORES } from './equipo-data';

@Component({
  selector: 'app-equipo',
  template: `
    <section class="container-x py-16 md:py-20">
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">Quiénes somos</p>
      <h1 class="mt-3 max-w-3xl text-balance font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
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
      <div class="container-x py-16 md:py-20">
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
  protected readonly equipo = EQUIPO;

  protected readonly valores = VALORES;
}
