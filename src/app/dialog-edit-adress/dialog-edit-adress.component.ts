import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-adress',
  templateUrl: './dialog-edit-adress.component.html',
  styleUrls: ['./dialog-edit-adress.component.scss'],
})
export class DialogEditAdressComponent implements OnInit {
  user!: User;
  constructor(public dialogRef: MatDialogRef<DialogEditAdressComponent>) {}
  loading = false;
  ngOnInit(): void {}
  saveUser() {}
}
