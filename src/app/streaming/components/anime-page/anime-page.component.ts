import { MovieService } from 'src/app/shared/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserApp } from 'src/app/shared/models/user.model';
import { Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css']
})
export class AnimePageComponent implements OnInit {
  anime: any;

  episodes$ : any;
  
  season:number = 0;  

   // User model
   userApp: UserApp;
   sub : Subscription;

   // Ads
   url = "https://www.highrevenuecpm.com/qe4ddwbxmh?key=7017deed2e4d39034b8baeba52b280fd";

  constructor(private _movieService : MovieService, private _auth: AuthService, private title : Title, private meta : Meta ) {}

  ngOnInit() {

  this.sub = this._auth.appUser$.subscribe((userApp) => (this.userApp = userApp));  

  // Get anime Info from the local storage
   this.anime = localStorage.getItem("currentAnime");   
   this.anime = JSON.parse(this.anime);

   // Get list of episodes
   this.episodes$ = this._movieService.listEpisodes(this.anime).valueChanges();

   // SEO
   this.title.setTitle("Royal Anime | "+this.anime.name);   
   this.meta.updateTag({property: "description", content : this.anime.description});
   this.meta.updateTag({property: "og:title", content : this.anime.name});
   this.meta.updateTag({property: "og:type", content : "article"});
   this.meta.updateTag({property: 'og:image', content: this.anime.imageUrl});
   this.meta.updateTag({property: 'og:image:alt', content: this.anime.name});
   this.meta.updateTag({property: 'og:url', content: "royalanime.tk"});
   this.meta.updateTag({property: "twitter:card", content : "summary"})
   this.meta.updateTag({property: "twitter:site", content : "@royalanime"})         
  }

  passEpisode(episode){    
    localStorage.setItem("currentEpisode", JSON.stringify(episode));
  }
  
  newSeason(season){  
    this.season = season;  
    return this.season;
  }  

  adsLink(){
    window.open(this.url, "_blank");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
