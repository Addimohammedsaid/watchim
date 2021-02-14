import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
//init form
movieForm = new FormGroup({
  name: new FormControl("", [Validators.required, Validators.minLength(4)]), 
  category: new FormControl(""),
  description: new FormControl(""),
  imageUrl: new FormControl(""),
  streamingUrl: new FormControl(""),
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
  this._movieService.addMovie(this.movieForm.value).then((e) => this._router.navigateByUrl("/"));
}
}
