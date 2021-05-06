import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showbox',
  templateUrl: './showbox.component.html',
  styleUrls: ['./showbox.component.css']
})
export class ShowboxComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
