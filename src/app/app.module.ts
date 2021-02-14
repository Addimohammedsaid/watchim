import { AdminModule } from "./admin/admin.module";
import { StreamingModule } from "./streaming/streaming.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule,PreloadingStrategy } from "@angular/router";
import { HomeComponent } from "./core/components/home/home.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { LoginComponent } from './core/components/login/login.component';
import { DisqusModule } from 'ngx-disqus';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common'

@NgModule({
  declarations: [AppComponent],
  imports: [
    DisqusModule.forRoot('watchim'),
    RouterModule.forRoot([
      { path: "", component: HomeComponent }, 
      { path: "home", component: HomeComponent },      
      { path: "login", component: LoginComponent },            
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
      { path: 'streaming', loadChildren: './streaming/streaming.module#StreamingModule'},       
      { path: '**', component: PageNotFoundComponent }, 
    ],{scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'}),        
    BrowserModule.withServerTransition({ appId: 'serverApp' }),    
    AdminModule,     
    CoreModule,
    StreamingModule,  
    SharedModule,     
    ScrollingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AngularFirestore, {provide : LocationStrategy, useClass : HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
