import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmSearch, MoviesObject } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private baseUrl = '';
  headers: any;

  constructor(@Inject('ENV') private envs: any, private http: HttpClient) {
    this.baseUrl = this.envs.API_URL;
  }

  getFilmsBySearch(search: string, nroPages: number) {
    const query = this.baseUrl + `/?s=${search}&page=${nroPages}&apikey=${this.envs.API_KEY}`;
    return this.http.get<FilmSearch>(query);
  }

  getMoviesByTitle(title: string): Observable<MoviesObject> {
    const query = this.baseUrl + `/?t=${title}&apikey=${this.envs.API_KEY}`;
    return this.http.get<MoviesObject>(query);
  }

  getMoviesByID(id: string | number): Observable<MoviesObject> {
    const query = this.baseUrl + `/?i=${id}`;
    return this.http.get<MoviesObject>(query);
  }

  getFilmByYear(year: string | number): Observable<MoviesObject> {
    const query = this.baseUrl + `/?y=${year}`;
    return this.http.get<MoviesObject>(query);
  }
}
