import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInfoComponent } from './portfolio-info.component';

describe('PortfolioInfoComponent', () => {
  let component: PortfolioInfoComponent;
  let fixture: ComponentFixture<PortfolioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
