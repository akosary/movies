import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./details-module/details-module.module').then(
        (m) => m.DetailsModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
