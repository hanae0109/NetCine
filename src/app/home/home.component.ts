import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Movie } from '../movie.interface';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = []

  searchForm: UntypedFormGroup
  searchCtrl: FormControl<string>
  constructor(private dataService: DataService) {
      this.searchCtrl = new FormControl('', {
        validators: [Validators.required],
        nonNullable: true
    })
    this.searchForm = new UntypedFormGroup({
        search: this.searchCtrl
    })
  }

  ngOnInit() {
      this.dataService.listMoviesTopRated().subscribe(
          data => this.movies = data
      )

      this.searchCtrl.valueChanges.pipe(
        filter( chaine => chaine.length >= 3),
        debounceTime(2000),
        switchMap(title => this.dataService.searchMoviesByTitle(title))
        ).subscribe(
          data => this.movies = data
      )
  }
}
