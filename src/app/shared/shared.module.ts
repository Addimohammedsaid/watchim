import { CardComponent } from "./components/card/card.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { LoadingSpinComponent } from './components/loading-spin/loading-spin.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ShowboxComponent } from './components/showbox/showbox.component';
import { AdBlockComponent } from './components/ad-block/ad-block.component';

@NgModule({
  declarations: [CardComponent, LoadingSpinComponent, TypeAheadComponent, VideoPlayerComponent, ShowboxComponent, AdBlockComponent],
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule.enablePersistence({synchronizeTabs:true}),
    AngularFontAwesomeModule,
  ],
  exports: [
    CardComponent,    
    LoadingSpinComponent,
    TypeAheadComponent,
    VideoPlayerComponent,
    ShowboxComponent,
    AdBlockComponent,
    CommonModule,    
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ScrollingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
