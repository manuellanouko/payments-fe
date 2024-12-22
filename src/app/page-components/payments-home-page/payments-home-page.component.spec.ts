import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsHomePageComponent } from './payments-home-page.component';

describe('PaymentsHomePageComponent', () => {
  let component: PaymentsHomePageComponent;
  let fixture: ComponentFixture<PaymentsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
