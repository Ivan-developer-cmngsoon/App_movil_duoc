import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarPedidoPage } from './gestionar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarPedidoPageRoutingModule {}
