import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnProjComponent } from './own-proj.component';

describe('OwnProjComponent', () => {
  let component: OwnProjComponent;
  let fixture: ComponentFixture<OwnProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnProjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
