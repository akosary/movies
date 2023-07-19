import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: any;
  totalPages: number = 0;
  _page: number = 1;
  p: number = 1;
  constructor(private _movieService: MoviesService) {}
  ngOnInit(): void {
    this._movieService.searchData$.subscribe({
      next: (res) => {
        this.movies = res.results;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateData(pageNumber: number) {
    this._movieService.searchData$.subscribe({
      next: (res) => {
        console.log(res);
        this.movies = res.results;
        this.totalPages = res.total_pages;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public set page(value: number) {
    this._page = value;
    this.updateData(value);
  }
  get page() {
    return this._page;
  }
}
