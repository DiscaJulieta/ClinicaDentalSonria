import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ARTICULOS } from './blog-data';
import { fechaLarga } from './fecha';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink],
  template: `
    <section class="container-x py-16 md:py-20">
      <p class="text-xs font-semibold uppercase tracking-widest text-accent">Blog</p>
      <h1 class="mt-3 max-w-3xl text-balance font-serif text-[40px] font-semibold leading-tight tracking-[-0.02em] md:text-[56px]">
        Notas para cuidar tu sonrisa
      </h1>
      <p class="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
        Sin tecnicismos ni letra chica: lo que de verdad conviene saber antes, durante y después
        de cada tratamiento.
      </p>

      <ul class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        @for (a of articulos; track a.slug) {
          <li class="group">
            <a [routerLink]="['/blog', a.slug]" class="block">
              <div class="overflow-hidden rounded-lg border border-ink/10">
                <img
                  [src]="a.imagen"
                  [alt]="'Ilustración del artículo: ' + a.titulo"
                  class="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p class="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">
                {{ a.categoria }}
              </p>
              <h2 class="mt-2 font-serif text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
                {{ a.titulo }}
              </h2>
              <p class="mt-2 leading-relaxed text-ink/70">{{ a.extracto }}</p>
              <p class="mt-3 text-sm text-ink/50">{{ fecha(a.fecha) }} · {{ a.minutosLectura }} min de lectura</p>
            </a>
          </li>
        }
      </ul>
    </section>
  `,
})
export class BlogList {
  protected readonly articulos = ARTICULOS;
  protected readonly fecha = fechaLarga;
}
