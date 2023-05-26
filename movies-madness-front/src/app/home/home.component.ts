import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { pipe, tap } from 'rxjs';
import { FilmsProps } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data?: FilmsProps[];
  searchInput: string = '';
  featured?: FilmsProps;
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmService.getFilmsBySearch('terror', 2).subscribe(
      pipe((value) => {
        this.data = value.Search;
        console.log(this.data);
      })
    );
  }

}
