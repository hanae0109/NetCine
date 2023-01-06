import { DataService } from '../data.service';

import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    movie: Movie[] = []



    constructor(
        private dataService: DataService
    ) {
        
    }

    ngOnInit(): void {
    
    }

}




