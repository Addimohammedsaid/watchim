import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";
import { Anime } from "src/app/shared/models/anime";
import { UserModel } from "src/app/shared/models/user.model";
import { MovieService } from "src/app/shared/services/movie.service";

@Component({
  selector: "app-anime-list",
  templateUrl: "./anime-list.component.html",
  styleUrls: ["./anime-list.component.css"],
})
export class AnimeListComponent implements OnInit {
  //
  animeList$: any;
  categories$: any;

  //
  user: UserModel;
  sub: Subscription;

  // alphabet
  letters = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();
  alphabet = this.letters.split("");

  // filters
  animeList: Anime[] = [];
  filteredAnime: Anime[] = [];

  filtred = null;

  category = null;

  letter = null;

  imageUrl =
    "https://www.dailynews.com/wp-content/uploads/2020/02/LDN-L-MYHERO-0228-10-1.jpg";
  title = "Find Your Anime here !";

  constructor(
    private route: ActivatedRoute,
    private _moviesService: MovieService,
    private _auth: AuthService
  ) {
    // this._moviesService.animeList.snapshotChanges().subscribe(data => {
    //   this.animeList = data.map(e => {
    //      return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data() as Anime
    //      };
    //   })
    // });;

    this._moviesService.animeList
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.doc.id,
            ...(c.payload.doc.data() as Anime),
          }))
        )
      )
      .pipe(
        switchMap((animeList) => {
          this.filteredAnime = this.animeList = animeList;
          return route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get("category");
        this.letter = params.get("letter");
        console.log(this.letter);
        console.log(this.category);
        this.filteredAnime = this.category
          ? this.animeList.filter((e) => e.category === this.category)
          : this.letter
          ? this.animeList.filter((e) => e.name[0].toUpperCase() == this.letter)
          : this.animeList;
      });

    this.categories$ = this._moviesService.categoriesList.valueChanges();
  }

  ngOnInit() {
    this.sub = this._auth.user$.subscribe((user) => (this.user = user));
  }

  passAnime(anime) {
    localStorage.setItem("currentAnime", JSON.stringify(anime));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
