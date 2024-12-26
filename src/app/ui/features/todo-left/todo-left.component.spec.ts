import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLeftComponent } from './todo-left.component';

describe('TodoLeftComponent', () => {
  let component: TodoLeftComponent;
  let fixture: ComponentFixture<TodoLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
