import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  id: any;
  constructor(
    private _movieService: MoviesService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._movieService.getById(this.id).subscribe({
      next: (res) => {
        this.movie = res;
        console.log(this.movie);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
