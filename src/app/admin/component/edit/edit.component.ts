import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

episode: any;

//
error: string;

constructor(
  private _movieService: MovieService,
  private _router:Router
) {}

ngOnInit() {
  // Get anime Info from the local storage
  this.episode = localStorage.getItem("currentEpisode");   
  this.episode = JSON.parse(this.episode);

  this.episodeForm.setValue({
    name : this.episode.name,
    anime : this.episode.anime,
    description : this.episode.description,
    episode : this.episode.episode,
    imageUrl : this.episode.imageUrl,
    streamingUrl : this.episode.streamingUrl,
    season : this.episode.season
  })

}

deleteEpisode(){
  this._movieService.deleteEpisode(this.episode.key).then((e) => this._router.navigateByUrl("/"));;
}

updateEpisode() {
  this._movieService.updateEpisode(this.episodeForm.value, this.episode.key).then((e) => this._router.navigateByUrl("/"));
}

}
