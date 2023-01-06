import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { GenreComponent } from './genre/genre.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ObservablesComponent } from './observables/observables.component';
import { ProducerComponent } from './observables/producer/producer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListTvshowsComponent } from './list-tvshows/list-tvshows.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MovieComponent,
    GenreComponent,
    HeaderComponent,
    FooterComponent,
    ObservablesComponent,
    ProducerComponent,
    ListMoviesComponent,
    ListTvshowsComponent,
    TvshowComponent,
    ListGenresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
