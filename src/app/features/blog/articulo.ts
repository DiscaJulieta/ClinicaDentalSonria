import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// PLACEHOLDER — Colaboradora A: plantilla de artículo, lee :slug (PLAN.md §a).
@Component({
  selector: 'app-articulo',
  template: `
    <article class="container-x py-section">
      <h1 class="font-serif text-[40px] font-semibold tracking-[-0.02em]">Artículo</h1>
      <p class="mt-4 text-ink/70">Placeholder — implementa A. slug: {{ slug }}</p>
    </article>
  `,
})
export class Articulo {
  protected readonly slug = inject(ActivatedRoute).snapshot.paramMap.get('slug');
}
