import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DataPageComponent } from './pages/data-page/data-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'formpage', component: FormPageComponent},
    { path: 'datapage', component: DataPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
