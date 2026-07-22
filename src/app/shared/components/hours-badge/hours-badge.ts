import { Component, computed, inject } from '@angular/core';
import { ScheduleService } from '../../../core/services/schedule.service';

// Badge de estado de horario — compartido (PLAN.md §f.1). Reutilizable en home y contacto.
@Component({
  selector: 'app-hours-badge',
  template: `
    <span
      class="inline-flex items-center gap-2 rounded px-3 py-1 text-xs font-semibold uppercase tracking-widest"
      [class]="clases()"
      [attr.data-estado]="estado()"
      role="status"
    >
      <span class="h-2 w-2 rounded-full" [class]="clasesPunto()"></span>
      {{ etiqueta() }}
    </span>
  `,
})
export class HoursBadge {
  private readonly schedule = inject(ScheduleService);

  protected readonly estado = this.schedule.estado;
  protected readonly etiqueta = computed(() =>
    this.estado() === 'abierto' ? 'Abierto ahora' : 'Cerrado ahora',
  );
  protected readonly clases = computed(() =>
    this.estado() === 'abierto' ? 'bg-brand text-ink' : 'bg-ink/10 text-ink/70',
  );
  protected readonly clasesPunto = computed(() =>
    this.estado() === 'abierto' ? 'bg-ink' : 'bg-ink/40',
  );
}
