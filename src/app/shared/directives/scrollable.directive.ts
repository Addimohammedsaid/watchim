import { Directive, HostListener, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective {

  @Output() scrollPosition = new EventEmitter()
  
  constructor(public el: ElementRef) { }

  // window:scroll

  @HostListener('window:scroll', ['$event'])

  onScroll(event) {
    try {     
      
      if ((window.innerHeight + window.scrollY + 1000) >= document.body.offsetHeight) {
        this.scrollPosition.emit('bottom')
    }

      const top = event.target.scrollTop
      const height = this.el.nativeElement.scrollHeight
      const offset = this.el.nativeElement.offsetHeight

      // emit bottom event
      if (top > height - offset - 1) {
        this.scrollPosition.emit('bottom')
      }

      // emit top event
      if (top === 0) {
        this.scrollPosition.emit('top')
      }

    } catch (err) {}
  }

}