import { Component, Input, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-dialog-edit-todos',
  templateUrl: './dialog-edit-todos.component.html',
  styleUrls: ['./dialog-edit-todos.component.scss'],
})
export class DialogEditTodosComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogEditTodosComponent>,
    private firestore: AngularFirestore
  ) {}
  user!: User;

  userId!: string;

  ngOnInit(): void {}

  addTodo() {
    let toDo = (document.getElementById('editTodo') as HTMLInputElement).value;
    this.user.todos.push(toDo);
    this.safeToDo();
    this.dialogRef.close();
  }
  safeToDo() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.dialogRef.close();
      });
  }

  /*addTodo() {
    this.safeToDo();
    let todos = (document.getElementById('editTodo') as HTMLInputElement).value;
    this.MasterService.userTodos.push(todos);
    this.dialogRef.close();
  }*/
}
