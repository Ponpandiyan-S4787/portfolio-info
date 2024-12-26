import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDetailsComponent } from './footer-details.component';

describe('FooterDetailsComponent', () => {
  let component: FooterDetailsComponent;
  let fixture: ComponentFixture<FooterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
