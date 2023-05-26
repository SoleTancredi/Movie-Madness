import { Component, OnInit } from '@angular/core';
import { FilmsProps } from 'src/app/models';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'featured-comp',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  featured?: FilmsProps;
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
	this.getFeatured();
  }
  
  getFeatured() {
    this.filmService
      .getMoviesByTitle('spider man')
      .subscribe((value) => (this.featured = value));
  }
}
