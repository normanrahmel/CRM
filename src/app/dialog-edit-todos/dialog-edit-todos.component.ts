import { Component, Input, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-edit-todos',
  templateUrl: './dialog-edit-todos.component.html',
  styleUrls: ['./dialog-edit-todos.component.scss'],
})
export class DialogEditTodosComponent implements OnInit {
  constructor(
    public MasterService: MasterService,
    public dialogRef: MatDialogRef<DialogEditTodosComponent>
  ) {}
  @Input() userTodos: any;

  ngOnInit(): void {}

  addTodo() {
    let todos = (document.getElementById('editTodo') as HTMLInputElement).value;
    this.MasterService.userTodos.push(todos);
    this.dialogRef.close();
  }
}
