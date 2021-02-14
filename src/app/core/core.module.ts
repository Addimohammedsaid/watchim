import { SharedModule } from './../shared/shared.module';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent, NavBarComponent, FooterComponent, LoginComponent],
})
export class CoreModule {}
