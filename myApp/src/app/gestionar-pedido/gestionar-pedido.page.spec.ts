import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionarPedidoPage } from './gestionar-pedido.page';

describe('GestionarPedidoPage', () => {
  let component: GestionarPedidoPage;
  let fixture: ComponentFixture<GestionarPedidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
