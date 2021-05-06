import { CardComponent } from "./components/card/card.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { LoadingSpinComponent } from "./components/loading-spin/loading-spin.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { TypeAheadComponent } from "./components/type-ahead/type-ahead.component";
import { RouterModule } from "@angular/router";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { ShowboxComponent } from "./components/showbox/showbox.component";
import { AdBlockComponent } from "./components/ad-block/ad-block.component";
import { AdsLinkComponent } from "./components/ads-link/ads-link.component";
import { ScrollableDirective } from "./directives/scrollable.directive";
import { RequestFormComponent } from "./components/request-form/request-form.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { PaginationComponent } from "./components/pagination/pagination.component";

@NgModule({
  declarations: [
    CardComponent,
    LoadingSpinComponent,
    TypeAheadComponent,
    VideoPlayerComponent,
    ShowboxComponent,
    AdBlockComponent,
    AdsLinkComponent,
    ScrollableDirective,
    RequestFormComponent,
    ContactFormComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule.enablePersistence({ synchronizeTabs: true }),
    AngularFontAwesomeModule,
  ],
  exports: [
    CardComponent,
    LoadingSpinComponent,
    TypeAheadComponent,
    VideoPlayerComponent,
    ShowboxComponent,
    AdBlockComponent,
    RequestFormComponent,
    ContactFormComponent,
    PaginationComponent,
    ScrollableDirective,
    CommonModule,
    ScrollingModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    AngularFontAwesomeModule,
  ],
})
export class SharedModule {}
