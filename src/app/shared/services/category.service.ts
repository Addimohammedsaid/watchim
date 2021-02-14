import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  path = "/categories/";

  constructor(private _db: AngularFirestore) {}

  get categoriesList() {
    return this._db.collection(this.path);
  }

  get animeList() {
    return this._db.collection("anime");
  }
}
