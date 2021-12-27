import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListProjectComponent } from './to-do-list-project.component';

describe('ToDoListProjectComponent', () => {
  let component: ToDoListProjectComponent;
  let fixture: ComponentFixture<ToDoListProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
