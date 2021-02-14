import { Component, OnInit, Input } from "@angular/core";
import { Anime } from "../../models/anime";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input("anime") anime;

  constructor() {}

  ngOnInit() {}
}
