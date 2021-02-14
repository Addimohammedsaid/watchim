import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddEpisodeComponent } from "./component/add-episode/add-episode.component";
import { AddAnimeComponent } from "./component/add-anime/add-anime.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { EditComponent } from './component/edit/edit.component';
import { EditAnimeComponent } from './component/edit-anime/edit-anime.component';
import { TrendsListComponent } from './component/trends-list/trends-list.component';
import { EditMovieComponent } from './component/edit-movie/edit-movie.component';

@NgModule({
  declarations: [AddAnimeComponent, AddEpisodeComponent, AddMovieComponent, EditComponent, EditAnimeComponent, TrendsListComponent, EditMovieComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: "admin/add/anime", component: AddAnimeComponent ,canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: "admin/add/episode", component: AddEpisodeComponent,canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: "admin/add/movie", component: AddMovieComponent,canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: "admin/edit", component: EditComponent,canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: "admin/edit/anime", component: EditAnimeComponent,canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: "admin/edit/movie", component: EditMovieComponent,canActivate: [AuthGuardService, AdminAuthGuardService]},
      { path: "admin/trends", component: TrendsListComponent,canActivate: [AuthGuardService, AdminAuthGuardService]},
    ]),
  ],
  exports: [AddAnimeComponent, AddEpisodeComponent, EditAnimeComponent, EditComponent],
})
export class AdminModule {}
