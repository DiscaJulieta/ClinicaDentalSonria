import { Routes } from '@angular/router';

// 6 rutas congeladas en Paso 0 (PLAN.md §a). No editar en solitario: coordinar por Bitácora.
export const routes: Routes = [
  {
    path: '',
    // home: EN CONJUNTO al final
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Sonría — Clínica Dental',
  },
  {
    path: 'servicios',
    // Colaboradora A
    loadComponent: () => import('./features/servicios/servicios').then((m) => m.Servicios),
    title: 'Servicios — Sonría',
  },
  {
    path: 'equipo',
    // Colaboradora A
    loadComponent: () => import('./features/equipo/equipo').then((m) => m.Equipo),
    title: 'Equipo — Sonría',
  },
  {
    path: 'blog',
    // Colaboradora A
    loadComponent: () => import('./features/blog/blog-list').then((m) => m.BlogList),
    title: 'Blog — Sonría',
  },
  {
    path: 'blog/:slug',
    // Colaboradora A (plantilla de artículo)
    loadComponent: () => import('./features/blog/articulo').then((m) => m.Articulo),
    title: 'Artículo — Sonría',
  },
  {
    path: 'contacto',
    // Colaboradora B
    loadComponent: () => import('./features/contacto/contacto').then((m) => m.Contacto),
    title: 'Contacto — Sonría',
  },
  { path: '**', redirectTo: '' },
];
