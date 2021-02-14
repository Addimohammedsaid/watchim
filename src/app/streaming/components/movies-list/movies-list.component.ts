import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserApp } from 'src/app/shared/models/user.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
//
movieList$: any;
// alphabet 
letters = "abcdefghijklmnopqrstuvwxyz".toLocaleUpperCase();
alphabet = this.letters.split('');
// show box
imageUrlShowbox = "https://64.media.tumblr.com/1a4e1642207ced7601e77d4130bf90be/tumblr_inline_oz6reclRtK1s2ua4d_1280.png";
titleShowBox = "Movies"
subTitleShowbox = "Find your peace Here !"

// User model
userApp: UserApp;
sub : Subscription;

constructor(private _movies: MovieService, private _auth: AuthService,) {}

ngOnInit() {
  this.sub = this._auth.appUser$.subscribe((userApp) => (this.userApp = userApp)); 
  this.movieList$ = this._movies.movieList.valueChanges();       
}

passEpisode(episode){
  localStorage.setItem("currentEpisode", JSON.stringify(episode));
}

ngOnDestroy() {
  this.sub.unsubscribe();
}

}
