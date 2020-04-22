import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyYourTicketPage } from './buy-your-ticket.page';

describe('BuyYourTicketPage', () => {
  let component: BuyYourTicketPage;
  let fixture: ComponentFixture<BuyYourTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyYourTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyYourTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
