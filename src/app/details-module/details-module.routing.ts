import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const MovieRoutes: Routes = [
  {
    path: '',
    children: [{ path: 'movie/:id/details', component: MovieDetailsComponent }],
  },
];
