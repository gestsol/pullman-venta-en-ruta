import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoDeVentaPage } from './tipo-de-venta.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDeVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoDeVentaPageRoutingModule {}
