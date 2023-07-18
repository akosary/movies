import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { MovieRoutes } from './details-module.routing';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(MovieRoutes)],
})
export class DetailsModuleModule {}
