import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { UserModel } from "src/app/shared/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  path: string = "/users/";
  //
  constructor(private _db: AngularFirestore) {}


  getUser(uid: string): AngularFirestoreDocument<UserModel> {
    return this._db.collection(this.path).doc(uid);
  }

  createUser(user: firebase.User) {
    this._db.collection(this.path).doc(user.uid).update({
      key: user.uid,
      email: user.email,
      isAdmin: true,
    });
  }
}
