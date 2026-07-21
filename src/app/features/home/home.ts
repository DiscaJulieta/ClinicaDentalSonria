import { Component } from '@angular/core';

// PLACEHOLDER — home se integra EN CONJUNTO al final (PLAN.md §b).
@Component({
  selector: 'app-home',
  template: `
    <section class="container-x py-section text-center">
      <p class="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
        Elegancia clínica
      </p>
      <h1 class="mt-4 font-serif text-[40px] font-semibold tracking-[-0.02em] md:text-[56px]">
        Sonría
      </h1>
      <p class="mx-auto mt-4 max-w-xl text-lg text-ink/70">
        Placeholder de inicio. Se integra al final con las piezas de A y B.
      </p>
    </section>
  `,
})
export class Home {}
