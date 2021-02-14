import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() episodeUrl: string;

  urlSafe: SafeResourceUrl; 

  constructor(public sanitizer: DomSanitizer,) { }

  ngOnInit() {
    this.urlSafer();    
  }

  urlSafer(){
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.episodeUrl);    
  }

}
