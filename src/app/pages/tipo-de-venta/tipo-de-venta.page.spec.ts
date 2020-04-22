import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipoDeVentaPage } from './tipo-de-venta.page';

describe('TipoDeVentaPage', () => {
  let component: TipoDeVentaPage;
  let fixture: ComponentFixture<TipoDeVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDeVentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipoDeVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
