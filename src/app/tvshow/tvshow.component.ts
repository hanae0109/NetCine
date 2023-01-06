import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TvShow } from '../tv-show';
import { switchMap, map } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

  tvshows: TvShow | null = null
  constructor( private dataService: DataService, private route: ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id') ?? ''),
      switchMap(id => this.dataService.getTvshowDetails(id))
    ).subscribe(
        data => this.tvshows = data
    )
  }
}
