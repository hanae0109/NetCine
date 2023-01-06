import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.scss']
})
export class ListGenresComponent implements OnInit {
  
  genres: any[] = []
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.listGenres().subscribe(
      data => {this.genres = data; console.log(this.genres)}
    )
  }
}