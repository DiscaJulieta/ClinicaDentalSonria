import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/components/nav/nav';
import { Footer } from './shared/components/footer/footer';
import { AppointmentModal } from './shared/components/appointment-modal/appointment-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, AppointmentModal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
