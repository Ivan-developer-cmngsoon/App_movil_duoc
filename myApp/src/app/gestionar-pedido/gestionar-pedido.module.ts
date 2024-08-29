import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarPedidoPageRoutingModule } from './gestionar-pedido-routing.module';

import { GestionarPedidoPage } from './gestionar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarPedidoPageRoutingModule
  ],
  declarations: [GestionarPedidoPage]
})
export class GestionarPedidoPageModule {}
