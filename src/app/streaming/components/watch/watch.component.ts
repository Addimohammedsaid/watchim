import { MovieService } from './../../../shared/services/movie.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: "app-watch",
  templateUrl: "./watch.component.html",
  styleUrls: ["./watch.component.css"],
})
export class WatchComponent implements OnInit {      

  results : Observable<any[]>;   
  
  episodeInfo : any;

  episode$ : any;

  constructor(private _movieService : MovieService, private _route : ActivatedRoute,private title : Title, private meta : Meta) {}

  ngOnInit() {                        
   
    this._route.paramMap.subscribe(params =>{

      let movie = params.get('movie');

      if(movie){
        this.episodeInfo = {
          "anime" : movie,
        }
        this.episode$ = this._movieService.getMovie(this.episodeInfo).valueChanges();   
      }
      else {
        let anime = params.get('anime');
        let season = +params.get('season');
        let episode =  +params.get('episode');

        this.episodeInfo = {
          "anime" : anime,        
          "season" : season,
          "episode" : episode,        
        }      

        this.episode$ = this._movieService.getEpisode(this.episodeInfo).valueChanges();    
      }    
    });


    // SEO    
    this.title.setTitle("Royal Anime | "+this.episodeInfo.anime+" - episode "+this.episodeInfo.episode);
    this.meta.updateTag({name : "description", content : this.episodeInfo.anime+" - episode "+this.episodeInfo.episode});    
  }  

}
