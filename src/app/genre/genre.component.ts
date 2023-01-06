import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  
  genres: any[] = []
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.listGenres().subscribe(
      data => {this.genres = data; console.log(this.genres)}
    )
  }
}


