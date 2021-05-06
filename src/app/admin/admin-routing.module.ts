import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../shared/services/auth-guard.service";
import { AddAnimeComponent } from "./component/add-anime/add-anime.component";
import { AddEpisodeComponent } from "./component/add-episode/add-episode.component";
import { AddMovieComponent } from "./component/add-movie/add-movie.component";
import { EditAnimeComponent } from "./component/edit-anime/edit-anime.component";
import { EditMovieComponent } from "./component/edit-movie/edit-movie.component";
import { EditComponent } from "./component/edit/edit.component";
import { TrendsListComponent } from "./component/trends-list/trends-list.component";
import { AdminAuthGuardService } from "./services/admin-auth-guard.service";

const routes: Routes = [
  {
    path: "add/anime",
    component: AddAnimeComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "add/episode",
    component: AddEpisodeComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "add/movie",
    component: AddMovieComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "edit",
    component: EditComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "edit/anime",
    component: EditAnimeComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "edit/movie",
    component: EditMovieComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
  {
    path: "trends",
    component: TrendsListComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
