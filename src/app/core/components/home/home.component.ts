import { MovieService } from "./../../../shared/services/movie.service";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { AuthService } from "../../services/auth.service";
import { Meta, Title } from "@angular/platform-browser";
import { map, take } from "rxjs/operators";
import { DomSanitizer } from "@angular/platform-browser";
import { BehaviorSubject, Subscription } from "rxjs";
import { EpisodeModel } from "src/app/shared/models/episode";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  // Page Var
  trendList$: any;
  lastEpisodesList: any;

  // User Model
  user: UserModel;

  // subscriptions
  userSub: Subscription;

  url =
    "https://www.highrevenuecpm.com/qe4ddwbxmh?key=7017deed2e4d39034b8baeba52b280fd";
  imageUrl = "https://coverfiles.alphacoders.com/453/45373.jpg";
  titleShowbox = "Watch";
  subTitleShowbox = "New Series, every week stay updated !";

  index: number = 1000;
  pageSize: number = 12;
  dataSize: number = 50;

  constructor(
    private _movies: MovieService,
    private auth: AuthService,
    private title: Title,
    private meta: Meta,
    protected sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    // User Auth
    this.userSub = this.auth.user$.subscribe((user) => (this.user = user)); // subscribe to user data

    // GET
    this.trendList$ = this._movies.trendList.valueChanges();

    this._movies.lastEpisodes
      .snapshotChanges()
      .pipe(
        map((e) =>
          e.map((c) => ({
            key: c.payload.doc.id,
            ...(c.payload.doc.data() as {}),
          }))
        )
      )
      .subscribe((categories: EpisodeModel[]) => {
        console.log(categories);
        this.lastEpisodesList = categories;
        this.index = Number(categories[0].index);
        console.log(this.index);
      });

    // SEO
    this.title.setTitle("Royal Anime | Watch online Anime in high quality");
    this.meta.updateTag({
      name: "description",
      content: "Watch online Anime in high quality",
    });
  }

  passAnime(anime) {
    localStorage.setItem("currentAnime", JSON.stringify(anime));
    window.open(this.url, "_blank");
  }

  passEpisode(episode) {
    localStorage.setItem("currentEpisode", JSON.stringify(episode));
  }

  slide(N) {
    document.getElementById("slide").scrollBy(N * 2 * 400, 0);
  }

  adsLink() {
    window.open(this.url, "_blank");
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  initPage() {}

  onQueryPage = (args: any): void => {
    console.log("from query", args.index);
    this._movies
      .paginate(args.index, args.pageSize)
      .snapshotChanges()
      .pipe(
        map((e) =>
          e.map((c) => ({
            key: c.payload.doc.id,
            ...(c.payload.doc.data() as {}),
          }))
        )
      )
      .subscribe((categories: EpisodeModel[]) => {
        this.lastEpisodesList = categories;
      });
  };
}
