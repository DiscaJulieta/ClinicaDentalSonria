import { Component, signal } from '@angular/core';
import { ARTICULOS, Articulo } from './blog-data';

// PLACEHOLDER — Colaboradora A (PLAN.md §b).
@Component({
  selector: 'app-blog-list',
  template: `
    <section class="container-x py-section">
      <h1 class="font-serif text-[40px] font-semibold tracking-[-0.02em]">Blog</h1>
      <p class="mt-4 text-ink/70">
        Placeholder — implementa A. Artículos cargados: {{ articulos().length }}.
      </p>
    </section>
  `,
})
export class BlogList {
  protected readonly articulos = signal<Articulo[]>(ARTICULOS);
}
