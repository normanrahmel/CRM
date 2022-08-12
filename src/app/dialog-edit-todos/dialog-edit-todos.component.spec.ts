import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTodosComponent } from './dialog-edit-todos.component';

describe('DialogEditTodosComponent', () => {
  let component: DialogEditTodosComponent;
  let fixture: ComponentFixture<DialogEditTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
