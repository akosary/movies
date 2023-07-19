import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: any;
  totalPages?: number = 0;
  _page: number = 1;
  p: number = 1;

  constructor(private _movieService: MoviesService) {}
  ngOnInit(): void {
    this._movieService.getAll(this._page).subscribe({
      next: (res) => {
        this.movies = res.results;
        this.totalPages = res.total_pages;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateData(pageNumber: number) {
    this._movieService.getAll(pageNumber).subscribe({
      next: (res) => {
        this.movies = res.results;
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
