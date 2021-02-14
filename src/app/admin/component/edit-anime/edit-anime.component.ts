import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent implements OnInit {
 //init form
 animeForm = new FormGroup({
  name: new FormControl("", [Validators.required, Validators.minLength(4)]),  
  category: new FormControl(""),
  description: new FormControl(""),
  imageUrl: new FormControl(""), 
});

//
categories$: any;

//
error: string;

// 
anime : any;

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

  // Get anime Info from the local storage
  this.anime = localStorage.getItem("currentAnime");   
  this.anime = JSON.parse(this.anime);

    this.animeForm.setValue({
      name : this.anime.name,
      category : this.anime.category,
      description : this.anime.description,      
      imageUrl : this.anime.imageUrl,  
    })
}

deleteAnime(){
  this._movieService.deleteAnime(this.anime.key).then((e) => this._router.navigateByUrl("/"));;
}

updateAnime() {        
  this._movieService.updateAnime(this.animeForm.value, this.anime.key).then((e) => this._router.navigateByUrl("/"));
}

}
