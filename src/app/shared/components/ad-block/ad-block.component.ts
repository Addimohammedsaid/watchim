import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-ad-block',
  templateUrl: './ad-block.component.html',
  styleUrls: ['./ad-block.component.css']
})
export class AdBlockComponent implements OnInit {

  adBlockEnabled : Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.adBlockEnabled.subscribe(function(e){
      console.log("work");
    });
  }

  ngOnInit() {   
    var testAd = document.createElement('div');
  
    testAd.innerHTML = '&nbsp;';

    testAd.className = 'adsbox';

    document.body.appendChild(testAd);

    window.setTimeout(function() {
      if (testAd.offsetHeight === 0) {
        // this.adBlockEnabled.next(true);  
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;              
      }
      testAd.remove();
      console.log('AdBlock Enabled? ', this.adBlockEnabled)
    }, 100); 
  }


  showPopup(){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`; 
  }

}
