import { MovieService } from "./../../../shared/services/movie.service";
import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { UserApp } from "src/app/shared/models/user.model";
import { AuthService } from "../../services/auth.service";
import { Meta, Title } from "@angular/platform-browser";
import { take } from "rxjs/operators";
import { DomSanitizer } from "@angular/platform-browser";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  // Page Var
  trendList$: any;
  lastEpisodesList$ : any;  

  // User Model
  userApp: UserApp;

  // subscriptions
  userSub : Subscription;

  url = "https://www.highrevenuecpm.com/qe4ddwbxmh?key=7017deed2e4d39034b8baeba52b280fd";
  imageUrl = "https://free4kwallpapers.com/uploads/originals/2020/12/07/dabi--myheroacadmia--wallpaper.jpg";
  titleShowbox = "Watch";
  subTitleShowbox = "New Series, every week stay updated !"

  constructor(private _movies: MovieService, private _auth: AuthService, 
    private title : Title,private meta : Meta, protected sanitizer: DomSanitizer) {}

  async ngOnInit() {

    // User Auth
    this.userSub =  this._auth.appUser$.subscribe((userApp) => (this.userApp = userApp));  

    // GET 
    this.trendList$ = this._movies.trendList.valueChanges();
    this.lastEpisodesList$ = this._movies.lastEpisodes.valueChanges();  

   // SEO
   this.title.setTitle("Royal Anime | Watch online Anime in high quality");  
   this.meta.updateTag({name : "description", content : "Watch online Anime in high quality"});   
  }

  passAnime(anime){
    localStorage.setItem("currentAnime", JSON.stringify(anime));
    window.open(this.url, "_blank");
  }
  
  passEpisode(episode){    
    localStorage.setItem("currentEpisode", JSON.stringify(episode));
  }

  slide(N) {           
    document.getElementById('slide').scrollBy(N*2*400,0);
  }

  nextPage(last){
    this.lastEpisodesList$ = this._movies.nextEpisode(last).valueChanges().pipe(take(1));
  }

  prevPage(first){
    this.lastEpisodesList$ = this._movies.prevEpisode(first).valueChanges().pipe(take(1));
  }

  adsLink(){
    window.open(this.url, "_blank");
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
