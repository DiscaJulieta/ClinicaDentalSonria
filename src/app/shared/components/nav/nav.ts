import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Navegación superior fija — componente compartido (PLAN.md §d). Congelado tras Paso 0.
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed inset-x-0 top-0 z-40 bg-bg/90 backdrop-blur">
      <nav
        class="container-x flex items-center justify-between py-4"
        aria-label="Navegación principal"
      >
        <a routerLink="/" class="font-serif text-xl font-semibold text-ink">Sonría</a>

        <button
          type="button"
          class="md:hidden"
          [attr.aria-expanded]="open()"
          aria-controls="menu-principal"
          aria-label="Abrir menú"
          (click)="open.set(!open())"
        >
          <span class="block h-0.5 w-6 bg-ink"></span>
          <span class="mt-1.5 block h-0.5 w-6 bg-ink"></span>
          <span class="mt-1.5 block h-0.5 w-6 bg-ink"></span>
        </button>

        <ul
          id="menu-principal"
          class="hidden items-center gap-8 md:flex"
          [class.!flex]="open()"
        >
          @for (link of links; track link.path) {
            <li>
              <a
                [routerLink]="link.path"
                routerLinkActive="text-accent"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="font-sans text-sm text-ink transition-colors hover:text-accent"
                (click)="open.set(false)"
                >{{ link.label }}</a
              >
            </li>
          }
          <li>
            <a routerLink="/contacto" class="btn-cta" (click)="open.set(false)">Pedir turno</a>
          </li>
        </ul>
      </nav>
      <!-- "The Signature Line" — DESIGN.md §5 -->
      <div class="h-px bg-accent"></div>
    </header>
  `,
})
export class Nav {
  protected readonly open = signal(false);
  protected readonly links = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/equipo', label: 'Equipo' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacto', label: 'Contacto' },
  ];
}
