import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css']
})
export class TypeAheadComponent implements OnInit {

  results : Observable<any[]>;

  offset = new Subject<string>();

  lastKeypress: number = 0;

  constructor(private _moviesSer:MovieService) { }

  ngOnInit() {
    this.results = this.search();
  }

  // event handler
  onkeyup($event){    
    if($event.timeStamp - this.lastKeypress > 200)
    {
      this.offset.next($event.target.value.toLowerCase());  
    }
    this.lastKeypress = $event.timeStamp;    
  }

  // search
  search(){
  return this.offset.pipe(
    filter(val => !!val),switchMap(offset=> {
      return this._moviesSer.searchForAnime(offset).valueChanges();
    })
  )
  }

  passAnime(anime){ 
    localStorage.setItem("currentAnime", JSON.stringify(anime));
  }

}
