import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Footer — componente compartido (PLAN.md §d). Congelado tras Paso 0. Datos de fantasía.
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="mt-section bg-alt">
      <div class="h-px bg-accent"></div>
      <div class="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p class="font-serif text-lg font-semibold text-ink">Sonría</p>
          <p class="mt-2 max-w-xs text-sm text-ink/70">
            Clínica dental — elegancia clínica y cuidado cercano.
          </p>
        </div>
        <nav aria-label="Enlaces del pie">
          <ul class="space-y-2 text-sm">
            <li><a routerLink="/servicios" class="hover:text-accent">Servicios</a></li>
            <li><a routerLink="/equipo" class="hover:text-accent">Equipo</a></li>
            <li><a routerLink="/blog" class="hover:text-accent">Blog</a></li>
            <li><a routerLink="/contacto" class="hover:text-accent">Contacto</a></li>
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
export class Footer {}
