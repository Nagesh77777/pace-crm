import { Routes } from '@angular/router';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { Outreach } from './features/outreach/components/outreach/outreach';
import { ClientDirectoryView } from './features/clientDirectory/components/client-directory-view/client-directory-view';

export const routes: Routes = [

    // Default route -> Login
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },

  // Login Page
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     import('./features/auth/login/login')
  //       .then(c => c.LoginComponent)
  // },

  // Layout Routes
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout')
        .then(c => c.MainLayout),
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'crm',
        pathMatch: 'full'
      },
      {
        path: 'crm', loadChildren: () => import('./core/crm.routes').then((m) => m.CRM_ROUTES),
      },
    ]
  },

  {
    path: '**',
    redirectTo: 'crm'
  }

];
