import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';
import { Anime } from 'src/app/shared/models/anime';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-trends-list',
  templateUrl: './trends-list.component.html',
  styleUrls: ['./trends-list.component.css']
})
export class TrendsListComponent implements OnInit {
  
 //init form
 trendForm = new FormGroup({    
  index: new FormControl(""),  
  });

  //
  animeList: Anime [] = [];
  trendsList$ : any;

  //
  sub : Subscription;
  error: string;

  constructor(private _movieService: MovieService,  private _router:Router) {}

  ngOnInit() {
       this.sub = this._movieService.animeList.snapshotChanges().subscribe(data => {
      this.animeList = data.map(e => {
         return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Anime
         };
      })
    });;        

    this.trendsList$ = this._movieService.trendList.valueChanges();

  }

  submit(){
    var index = this.trendForm.controls.index.value;
    this._movieService.addTrend(this.animeList[index]);
  }

  delete(trend){
    this._movieService.deleteTrend(trend.key);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
