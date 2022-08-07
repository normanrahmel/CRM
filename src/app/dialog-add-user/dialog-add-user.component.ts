import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User();
  brithDate!: Date;
  constructor() {}

  ngOnInit(): void {}

  saveUser() {
    this.user.birthDate = this.brithDate.getTime();
    console.log('Akteuller USER', this.user);
  }
}
