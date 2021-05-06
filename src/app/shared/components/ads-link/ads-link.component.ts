import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads-link',
  templateUrl: './ads-link.component.html',
  styleUrls: ['./ads-link.component.css']
})
export class AdsLinkComponent {

  constructor() { }

  // Ads
  url = "https://www.highrevenuecpm.com/qe4ddwbxmh?key=7017deed2e4d39034b8baeba52b280fd"; 

  adsLink(){
    window.open(this.url, "_blank");
  }
}
