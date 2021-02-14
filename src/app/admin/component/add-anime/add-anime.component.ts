import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MovieService } from "src/app/shared/services/movie.service";
import { CategoryService } from "src/app/shared/services/category.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-add-anime",
  templateUrl: "./add-anime.component.html",
  styleUrls: ["./add-anime.component.css"],
})
export class AddAnimeComponent implements OnInit {
  //init form
  movieForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4)]),
    episodesNumber: new FormControl(""),
    category: new FormControl(""),
    description: new FormControl(""),
    imageUrl: new FormControl(""),   
  });

  //
  categories$: any;

  //
  error: string;

  constructor(
    private _movieService: MovieService,
    private _categoryService: CategoryService,
    private _router : Router
  ) {}

  ngOnInit() {
    this._categoryService.categoriesList
      .snapshotChanges()
      .pipe(
        map((e) =>
          e.map((c) => ({
            key: c.payload.doc.id,
            ...(c.payload.doc.data() as {}),
          }))
        )
      )
      .subscribe((categories) => {
        console.log(categories);
        this.categories$ = categories;
      });
  }

  addAnime() {        
    this._movieService.addAnime(this.movieForm.value).then((e) => this._router.navigateByUrl("/"));
  }
}
