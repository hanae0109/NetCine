import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from './movie.interface';
import { TvShow } from './tv-show';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    BASE_URL = 'https://api.themoviedb.org/3'

    constructor(private http: HttpClient) { }
    
    listMovies(): Observable<Movie[]> {
      return this.http.get(this.BASE_URL + '/search/movie' + '?api_key=9d1c7abf1f5988202576c8068b297c09&query=a').pipe(
          map( (data: any) => this.arrayObj2ArrayMovie(data.results) )
      )
    }

    listMoviesTopRated(): Observable<Movie[]> {
        return this.http.get(this.BASE_URL + '/movie/top_rated' + '?api_key=9d1c7abf1f5988202576c8068b297c09&query=a').pipe(
            map( (data: any) => this.arrayObj2ArrayMovie(data.results) )
        )
      }

    getMovieDetails(id: string): Observable<Movie> {
      return this.http.get(this.BASE_URL + '/movie/' + id + '?api_key=9d1c7abf1f5988202576c8068b297c09').pipe(
          map( (data: any) => this.obj2Movie(data) )
      )
    }

    searchMoviesByTitle(title: string): Observable<Movie[]> {
        return this.http.get(this.BASE_URL + '/search/movie' + '?api_key=9d1c7abf1f5988202576c8068b297c09&query=' + title).pipe(
            map( (data: any) => this.arrayObj2ArrayMovie(data.results) )
        )  
    }

    listGenres(): Observable<any[]> {
        return this.http.get(this.BASE_URL + '/genre/movie/list?api_key=9d1c7abf1f5988202576c8068b297c09').pipe(
            map( (data: any) => this.obj2ArrayGenre(data) )
        )
    }


    listTvshows(): Observable<TvShow[]> {
        return this.http.get(this.BASE_URL + '/search/tv' + '?api_key=9d1c7abf1f5988202576c8068b297c09&query=a').pipe(
            map( (data: any) => this.arrayObj2ArrayTvshow(data.results) )
        )
    }

    getTvshowDetails(id: string): Observable<TvShow> {
      return this.http.get(this.BASE_URL + '/tv/' + id + '?api_key=9d1c7abf1f5988202576c8068b297c09').pipe(
          map( (data: any) => this.obj2Tvshow(data) )
      )
    }
    
    // getMovieById(id: string): Observable<Movie[]> {
    //     return this.http.get(this.BASE_URL + '/lookup.php?i=' + id).pipe(
    //         map( (data: any) => this.obj2ArrayMovie(data) )
    //     )
    // }

    // getMovieForAdult(): Observable<Movie[]> {
    //     return this.getMovie().pipe(
    //         map( (movie: Movie[]) => movie.filter( (el: Movie) => el.adult ))
    //     )
    // }

    // getMovieForAll(): Observable<Movie[]> {
    //     return this.getMovie().pipe(
    //         map( (movie: Movie[]) => movie.filter( (el: Movie) => ! el.adult ))
    //     )
    // }

    // getMovieOverview(search: string): Observable<Movie[]> {
    //     return this.getMovie().pipe(
    //         map( (movie: Movie[]) => movie.filter( (el: Movie) => el.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
    //     )
    // }


    protected obj2ArrayGenre(obj: any): any[] {
        const arr = obj['genres']
        return arr
    }

    protected obj2Movie(el: any): Movie {
        const movie: Movie = {
            id: el.id,
              title: el.original_title,
              overview: el.overview,
              img: 'https://image.tmdb.org/t/p/w500/' + el.poster_path,
              genre: el.genres,
              language: el.original_language,
              adult: el.adult
        }
        return movie
    }

    protected obj2Tvshow(el: any): TvShow {
        const tvshow: TvShow = {
            id: el.id,
            title: el.original_title,
            overview: el.overview,
            img: 'https://image.tmdb.org/t/p/w500/' + el.poster_path,
            genre: el.genres,
            language: el.original_language,
            adult: el.adult,
            nbepisode: el.number_of_episodes,
            nbseason: el.number_of_seasons
        }
        return tvshow
    }

    protected arrayObj2ArrayMovie(arr: any[]): Movie[] {
      return arr.map( (el: any) => {
          const c: Movie = {
              id: el.id,
              title: el.original_title,
              overview: el.overview,
              img: 'https://image.tmdb.org/t/p/w500/' + el.poster_path,
              genre: el.genres,
              language: el.original_language,
              adult: el.adult
          }
          return c
      })
  }

  protected arrayObj2ArrayTvshow(arr: any[]): TvShow[] {
    return arr.map( (el: any) => {
        const c: TvShow = {
            id: el.id,
            title: el.name,
            overview: el.overview,
            img: 'https://image.tmdb.org/t/p/w500/' + el.poster_path,
            genre: el.genres,
            language: el.languages,
            adult: el.adult === 'adult',
            nbepisode: el.number_of_episodes,
            nbseason: el.number_of_seasons
        }
        return c
    })
}
  
}
