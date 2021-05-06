import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AddAnimeComponent } from "./component/add-anime/add-anime.component";
import { AddEpisodeComponent } from "./component/add-episode/add-episode.component";
import { AddMovieComponent } from "./component/add-movie/add-movie.component";
import { EditAnimeComponent } from "./component/edit-anime/edit-anime.component";
import { EditMovieComponent } from "./component/edit-movie/edit-movie.component";
import { EditComponent } from "./component/edit/edit.component";
import { TrendsListComponent } from "./component/trends-list/trends-list.component";

@NgModule({
  declarations: [
    AddAnimeComponent,
    AddEpisodeComponent,
    AddMovieComponent,
    EditComponent,
    EditAnimeComponent,
    TrendsListComponent,
    EditMovieComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
  exports: [],
})
export class AdminModule {}
