import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDueComponent } from './student-due.component';

describe('StudentDueComponent', () => {
  let component: StudentDueComponent;
  let fixture: ComponentFixture<StudentDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
