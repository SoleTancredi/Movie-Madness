import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { tap } from 'rxjs';
import { MoviesObject } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data?: MoviesObject[];
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    //     this.filmService.getMoviesByTitle('hulk').subscribe((value) => {
    //       console.log(value);
    //       this.data = value;
    //     });
  }

  getFilms() {
    this.filmService.getFilmsBySearch('terror', 2).subscribe((value) => {
      this.data = value.Search;
      console.log(this.data);
    });
  }
}
