import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie.interface';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

    movies: Movie[] = []
    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.dataService.listMovies().subscribe(
            data => this.movies = data
        )
    }
}
