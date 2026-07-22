import { Injectable, signal } from '@angular/core';

// Estado del modal "Pedir turno" (PLAN.md §f.2). Se monta una vez en app.html.
@Injectable({ providedIn: 'root' })
export class AppointmentService {
  readonly isOpen = signal(false);

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }
}
