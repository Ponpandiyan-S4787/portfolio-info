import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialImgsComponent } from './social-imgs.component';

describe('SocialImgsComponent', () => {
  let component: SocialImgsComponent;
  let fixture: ComponentFixture<SocialImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialImgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
