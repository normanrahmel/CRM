import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent implements OnInit {
  user!: User;
  loading = false;
  brithDate!: Date;
  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  ngOnInit(): void {}
  saveUser() {}
}
