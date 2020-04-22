import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaratulaPage } from './caratula.page';

describe('CaratulaPage', () => {
  let component: CaratulaPage;
  let fixture: ComponentFixture<CaratulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaratulaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaratulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
