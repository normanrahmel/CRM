import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  //varibals
  user: User = new User();
  brithDate!: Date;
  loading: boolean = false;

  constructor(
    private firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.user.birthDate = this.brithDate.getTime();
    console.log('Akteuller USER', this.user);
    this.loading = true;
    this.firestore 
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log(result);
        this.dialogRef.close();
      });
  }
}
