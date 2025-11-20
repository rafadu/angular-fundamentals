import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop"},
  { path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop"},
  { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop"},
  { path: 'sign-in', component: SignInComponent },
  { path: 'form-controls', component: TemplateFormControlsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

//order of the routes matters
//use patchMatch full when doing redirects, especially from an empty path


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //providing routes for the root of the application
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
