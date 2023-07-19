import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchForm: FormGroup;
  result: any;

  constructor(
    private _movieService: MoviesService,
    private _formBuilder: FormBuilder,
    private _route: Router
  ) {
    this.searchForm = this._formBuilder.group({
      word: '',
    });
  }
  ngOnInit(): void {}

  get fields() {
    return this.searchForm.controls;
  }

  onSubmit() {
    this._movieService.search(this.fields['word'].value).subscribe({
      next: (res) => {
        this.result = res.results;
        this._movieService.setData(res);
        this._route.navigate(['/search']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
