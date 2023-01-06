import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListTvshowsComponent } from './list-tvshows/list-tvshows.component';
import { MovieComponent } from './movie/movie.component';
import { TvshowComponent } from './tvshow/tvshow.component';

export const routes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'genre', component: ListGenresComponent },
  { path: 'list-movies', component: ListMoviesComponent },
  { path: 'list-tvshows', component: ListTvshowsComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'tv/:id', component: TvshowComponent },
  { path: 'genres/:id', component: GenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
