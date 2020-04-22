import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tipo-de-venta', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'pagina2',
    loadChildren: () => import('./pages/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./pages/pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'tipo-de-venta',
    loadChildren: () => import('./pages/tipo-de-venta/tipo-de-venta.module').then( m => m.TipoDeVentaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'caratula',
    loadChildren: () => import('./pages/caratula/caratula.module').then( m => m.CaratulaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'resumen-compra',
    loadChildren: () => import('./pages/resumen-compra/resumen-compra.module').then( m => m.ResumenCompraPageModule)
  },
  {
    path: 'buy-your-ticket',
    loadChildren: () => import('./pages/buy-your-ticket/buy-your-ticket.module').then( m => m.BuyYourTicketPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'my-tickets',
    loadChildren: () => import('./pages/my-tickets/my-tickets.module').then( m => m.MyTicketsPageModule)
  },
  {
    path: 'purchase-detail',
    loadChildren: () => import('./pages/purchase-detail/purchase-detail.module').then( m => m.PurchaseDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
