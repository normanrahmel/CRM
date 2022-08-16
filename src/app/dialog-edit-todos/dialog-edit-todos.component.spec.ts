import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogEditTodosComponent } from './dialog-edit-todos.component';

describe('DialogEditTodosComponent', () => {
  let component: DialogEditTodosComponent;
  let fixture: ComponentFixture<DialogEditTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogEditTodosComponent],
      imports: [MatDialogRef],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
