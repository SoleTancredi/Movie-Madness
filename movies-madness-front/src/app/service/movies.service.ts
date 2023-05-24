import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesObject } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'http://www.omdbapi.com'; //?i=tt3896198&apikey=914576be

  constructor(private httpClient: HttpClient) {}

  getMoviesByTitle(title: string): Observable<MoviesObject> {
    const query = this.baseUrl + `/?t=${title}`;
    return this.httpClient.get<MoviesObject>(query);
  }
  
  getMoviesByID(id: string|number): Observable<MoviesObject> {
    const query = this.baseUrl + `/?i=${id}`;
    return this.httpClient.get<MoviesObject>(query);
  }
  
  getFilmByYear(year: string | number): Observable<MoviesObject> {
    const query = this.baseUrl + `/?y=${year}`;
    return this.httpClient.get<MoviesObject>(query);
  }
}
