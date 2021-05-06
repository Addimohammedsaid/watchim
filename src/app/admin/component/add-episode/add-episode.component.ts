import { Router } from "@angular/router";
import { CategoryService } from "./../../../shared/services/category.service";
import { MovieService } from "./../../../shared/services/movie.service";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { map } from "rxjs/internal/operators/map";

@Component({
  selector: "app-add-episode",
  templateUrl: "./add-episode.component.html",
  styleUrls: ["./add-episode.component.css"],
})
export class AddEpisodeComponent implements OnInit {
  //init form
  episodeForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    season: new FormControl(""),
    episode: new FormControl(""),
    anime: new FormControl(""),
    description: new FormControl(""),
    imageUrl: new FormControl(""),
    streamingUrl: new FormControl(""),
  });

  //
  anime$: any;

  //
  error: string;

  constructor(
    private _movieService: MovieService,
    private _categoryService: CategoryService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._categoryService.animeList
      .snapshotChanges()
      .pipe(
        map((e) =>
          e.map((c) => ({
            key: c.payload.doc.id,
            ...(c.payload.doc.data() as {}),
          }))
        )
      )
      .subscribe((anime) => {
        console.log(anime);
        this.anime$ = anime;
      });
  }

  addEpisode() {
    this._movieService
      .addEpisode(this.episodeForm.value)
      .then((e) => this._router.navigateByUrl("/"));
  }
}
