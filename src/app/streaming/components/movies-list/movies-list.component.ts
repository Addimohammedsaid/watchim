import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { AuthService } from "src/app/core/services/auth.service";
import { UserModel } from "src/app/shared/models/user.model";
import { MovieService } from "src/app/shared/services/movie.service";
import { PaginationService } from "src/app/shared/services/pagination.service";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.css"],
})
export class MoviesListComponent implements OnInit {
  //
  movieList$: any;
  // alphabet
  letters = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();
  alphabet = this.letters.split("");
  // show box
  imageUrlShowbox =
    "https://64.media.tumblr.com/1a4e1642207ced7601e77d4130bf90be/tumblr_inline_oz6reclRtK1s2ua4d_1280.png";
  titleShowBox = "Movies";
  subTitleShowbox = "Find your peace Here !";

  // User model
  user: UserModel;
  sub: Subscription;

  // Ads
  url =
    "https://www.highrevenuecpm.com/qe4ddwbxmh?key=7017deed2e4d39034b8baeba52b280fd";

  constructor(
    private _movies: MovieService,
    private _auth: AuthService,
    public page: PaginationService
  ) {}

  ngOnInit() {
    this.sub = this._auth.user$.subscribe((user) => (this.user = user));
    this.page.init("movies", "name", {
      limit: 6,
      reverse: false,
      prepend: false,
    });
  }

  scrollHandler(e) {
    if (e === "bottom") {
      this.page.more();
    }
  }

  passEpisode(episode) {
    localStorage.setItem("currentEpisode", JSON.stringify(episode));
  }

  adsLink() {
    window.open(this.url, "_blank");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
