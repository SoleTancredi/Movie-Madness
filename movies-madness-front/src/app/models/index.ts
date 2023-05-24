export type FilmSearch = {
	Response: boolean,
	Search: MoviesObject[],
	totalResults : number| string,
}
export interface MoviesObject {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Rating {
  Source: string;
  Value: string;
}

export type Films = 'movies' | 'series' | 'episode';

export type FilmsProps = {
  filmType?: Films;
  title?: string;
  year?: string | number;
  id: string | number;
};
