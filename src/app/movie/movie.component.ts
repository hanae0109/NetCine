import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs';
import { Movie } from '../movie.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null
  constructor( private dataService: DataService, private route: ActivatedRoute ) {
  
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id') ?? ''),
      switchMap(id => this.dataService.getMovieDetails(id))
    ).subscribe(
        data => this.movie = data
    )
  }
}
