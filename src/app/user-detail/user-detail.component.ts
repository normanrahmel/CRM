import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAdressComponent } from '../dialog-edit-adress/dialog-edit-adress.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditTodosComponent } from '../dialog-edit-todos/dialog-edit-todos.component';
import { deleteDoc } from '@angular/fire/firestore/firebase';
import { doc } from 'firebase/firestore';
import { onLog } from '@angular/fire/app';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  user: User = new User();
  organisationTodos = [];

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog,
    public MasterService: MasterService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      this.getUser();
    });
  }

  getUser() {
    if (this.userId) {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .valueChanges()
        .subscribe((user: any) => {
          this.user = new User(user);
          // this.photoUrl = this.user.photoURL;
          console.log('Retrieved user', this.user);
        });
    }
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAdressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserTodo() {
    const dialog = this.dialog.open(DialogEditTodosComponent);
    //dialog.componentInstance.user = new User(this.user.toJSON());
    //dialog.componentInstance.userId = this.userId;
  }

  deleteAllTodos() {
    while (this.MasterService.userTodos.length > 0) {
      this.MasterService.userTodos.pop();
    }
  }

  async deleteUser() {
    this.loading = true;
    await this.firestore.collection('users').doc(this.userId).delete();
    this.loading = false;
    window.location.href = '/User';
  }
}
