import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
//init form
movieForm = new FormGroup({
  name: new FormControl("", [Validators.required, Validators.minLength(4)]),   
  description: new FormControl(""),
  imageUrl: new FormControl(""),
  streamingUrl: new FormControl(""),
});

//
categories$: any;

//
error: string;

episode: any;

constructor(
  private _movieService: MovieService,
  private _categoryService: CategoryService,
  private _router : Router
) {}

ngOnInit() {

  // Get anime Info from the local storage
  this.episode = localStorage.getItem("currentEpisode");   
  this.episode = JSON.parse(this.episode);  

  this.movieForm.setValue({
    name : this.episode.name,    
    description : this.episode.description,      
    imageUrl : this.episode.imageUrl,
    streamingUrl : this.episode.streamingUrl,    
  })  
}

deleteEpisode(){
  this._movieService.deleteEpisode(this.episode.key).then((e) => this._router.navigateByUrl("/"));;
}

updateEpisode() {
  this._movieService.updateMovie(this.movieForm.value, this.episode.key).then((e) => this._router.navigateByUrl("/"));
}

}
