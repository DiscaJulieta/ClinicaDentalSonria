import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Footer — componente compartido (PLAN.md §d). Congelado tras Paso 0. Datos de fantasía.
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="mt-20 md:mt-section bg-alt">
      <div class="h-px bg-accent"></div>
      <div class="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p class="font-serif text-lg font-semibold text-ink">Sonría</p>
          <p class="mt-2 max-w-xs text-sm text-ink/70">
            Clínica dental — elegancia clínica y cuidado cercano.
          </p>
        </div>
        <nav aria-label="Enlaces del pie">
          <ul class="text-sm">
            @for (l of links; track l.path) {
              <li>
                <a [routerLink]="l.path" class="inline-flex min-h-11 items-center hover:text-accent">
                  {{ l.label }}
                </a>
              </li>
            }
          </ul>
        </nav>
        <address class="text-sm not-italic text-ink/70">
          Av. Ficticia 1234, Buenos Aires<br />
          +54 11 5555-5555<br />
          hola&#64;sonria.demo
        </address>
      </div>
      <div class="container-x border-t border-ink/10 py-6 text-xs text-ink/50">
        © 2026 Sonría · Sitio demostrativo, datos de fantasía.
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly links = [
    { path: '/servicios', label: 'Servicios' },
    { path: '/equipo', label: 'Equipo' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacto', label: 'Contacto' },
  ];
}
