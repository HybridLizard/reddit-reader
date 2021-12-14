import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reader',
    pathMatch: 'full'
  },
  {
    path: 'reader',
    loadChildren: () => import('./reader/reader.module').then(m => m.ReaderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
