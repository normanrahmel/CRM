import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

import { UserDetailComponent } from '../user-detail/user-detail.component';
@Component({
  selector: 'app-dialog-edit-todos',
  templateUrl: './dialog-edit-todos.component.html',
  styleUrls: ['./dialog-edit-todos.component.scss'],
})
export class DialogEditTodosComponent implements OnInit {
  constructor() {}
  @Input() userTodos: any;

  ngOnInit(): void {}

  addTodo() {
    let todos = (document.getElementById('editTodo') as HTMLInputElement).value;
    this.userTodos.push(todos);
  }
}
