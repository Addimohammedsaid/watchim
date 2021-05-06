import { MovieService } from "./../../../shared/services/movie.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-watch",
  templateUrl: "./watch.component.html",
  styleUrls: ["./watch.component.css"],
})
export class WatchComponent implements OnInit {
  results: Observable<any[]>;

  episodeInfo: any;

  episode$: Observable<any[]>;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    // get params from route
    this.route.paramMap.subscribe((params) => {
      // get movie
      let movie = params.get("movie");

      // if its a movie get from movie collections
      if (movie) {
        this.episodeInfo = {
          anime: movie,
        };
        this.episode$ = this.movieService
          .getMovie(this.episodeInfo)
          .valueChanges();
      }
      // else get from episodes collections
      else {
        let anime = params.get("anime");
        let season = +params.get("season");
        let episode = +params.get("episode");

        this.episodeInfo = {
          anime: anime,
          season: season,
          episode: episode,
        };

        this.episode$ = this.movieService
          .getEpisode(this.episodeInfo)
          .valueChanges();
      }
    });

    // SEO
    this.title.setTitle(
      "Royal Anime | " +
        this.episodeInfo.anime +
        " - episode " +
        this.episodeInfo.episode
    );
    this.meta.updateTag({
      name: "description",
      content:
        this.episodeInfo.anime + " - episode " + this.episodeInfo.episode,
    });
  }
}
