import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsNavbarComponent } from './payments-navbar.component';

describe('PaymentsNavbarComponent', () => {
  let component: PaymentsNavbarComponent;
  let fixture: ComponentFixture<PaymentsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
