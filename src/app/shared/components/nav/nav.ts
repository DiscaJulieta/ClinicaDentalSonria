import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppointmentService } from '../../../core/services/appointment.service';

// Navegación superior fija — componente compartido (PLAN.md §d). Congelado tras Paso 0.
@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed inset-x-0 top-0 z-40 bg-bg/95 backdrop-blur">
      <nav
        class="container-x flex items-center justify-between py-4"
        aria-label="Navegación principal"
      >
        <a routerLink="/" class="font-serif text-xl font-semibold text-ink">Sonría</a>

        <button
          type="button"
          class="-mr-3 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          [attr.aria-expanded]="open()"
          aria-controls="menu-principal"
          [attr.aria-label]="open() ? 'Cerrar menú' : 'Abrir menú'"
          (click)="open.set(!open())"
        >
          <span class="block h-0.5 w-6 bg-ink"></span>
          <span class="block h-0.5 w-6 bg-ink"></span>
          <span class="block h-0.5 w-6 bg-ink"></span>
        </button>

        <!-- Móvil: panel vertical debajo de la barra. Desktop (md+): fila horizontal. -->
        <ul
          id="menu-principal"
          class="absolute inset-x-0 top-full flex-col gap-1 border-t border-ink/10 bg-bg px-5 pb-6 pt-2 shadow-ambient
                 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none"
          [class.hidden]="!open()"
          [class.flex]="open()"
        >
          @for (link of links; track link.path) {
            <li>
              <a
                [routerLink]="link.path"
                routerLinkActive="text-accent"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="block py-3 text-base text-ink transition-colors hover:text-accent md:py-0 md:text-sm"
                (click)="open.set(false)"
                >{{ link.label }}</a
              >
            </li>
          }
          <li class="mt-2 md:mt-0">
            <button type="button" class="btn-cta w-full md:w-auto" (click)="pedirTurno()">
              Pedir turno
            </button>
          </li>
        </ul>
      </nav>
      <!-- "The Signature Line" — DESIGN.md §5 -->
      <div class="h-px bg-accent"></div>
    </header>
  `,
})
export class Nav {
  private readonly appointment = inject(AppointmentService);
  protected readonly open = signal(false);

  protected pedirTurno() {
    this.open.set(false);
    this.appointment.open();
  }

  protected readonly links = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/equipo', label: 'Equipo' },
    { path: '/blog', label: 'Blog' },
    { path: '/contacto', label: 'Contacto' },
  ];
}
