import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TvShow } from '../tv-show';

@Component({
  selector: 'app-list-tvshows',
  templateUrl: './list-tvshows.component.html',
  styleUrls: ['./list-tvshows.component.scss']
})
export class ListTvshowsComponent implements OnInit {

    tvshows: TvShow[] = []
    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
      this.dataService.listTvshows().subscribe(
        data => this.tvshows = data
      )
    }

}
