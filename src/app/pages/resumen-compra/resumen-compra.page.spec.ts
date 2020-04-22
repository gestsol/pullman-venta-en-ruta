import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResumenCompraPage } from './resumen-compra.page';

describe('ResumenCompraPage', () => {
  let component: ResumenCompraPage;
  let fixture: ComponentFixture<ResumenCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenCompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
