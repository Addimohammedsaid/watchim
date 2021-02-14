import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WatchComponent } from "./components/watch/watch.component";
import { AnimePageComponent } from './components/anime-page/anime-page.component';
import { DisqusModule } from 'ngx-disqus';
import { AnimeListComponent } from "./components/anime-list/anime-list.component";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { StreamingRoutingModule } from "./streaming-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,    
    DisqusModule.forRoot('watchim'),    
    StreamingRoutingModule,
  ],
  declarations: [
    WatchComponent,
    AnimePageComponent,
    AnimeListComponent,
    MoviesListComponent,       
  ],
  exports: [],
})
export class StreamingModule {}
