import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user: User = new User();
  brithDate!: Date;
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  saveUser() {
    this.user.birthDate = this.brithDate.getTime();
    console.log('Akteuller USER', this.user);
    this.firestore
      .collection('useres')
      .add(this.user.toJSON())
      .then((result: any) => {
        console.log(result);
      });
  }
}
