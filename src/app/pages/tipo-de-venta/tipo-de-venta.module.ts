import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoDeVentaPageRoutingModule } from './tipo-de-venta-routing.module';

import { TipoDeVentaPage } from './tipo-de-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoDeVentaPageRoutingModule
  ],
  declarations: [TipoDeVentaPage]
})
export class TipoDeVentaPageModule {}
