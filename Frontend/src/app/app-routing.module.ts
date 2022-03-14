import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthComponent } from './auth/auth.component';
import { AddWishListComponent } from './components/add-wish-list/add-wish-list.component';
import { DetailsWishListComponent } from './components/details-wish-list/details-wish-list.component';
import { ProductsComponent } from './products/products.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path: 'profile', component: AccountsComponent},
  {path: 'auth', component: AuthComponent},
  // Products
  {path: '',component: ProductsComponent},
  // Wish List
  {path: 'wishlist',component: WishListComponent},
  {path: 'wishlist/:id', component: DetailsWishListComponent },
  {path: 'wishlist/add', component: AddWishListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
