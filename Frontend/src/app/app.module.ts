import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishListComponent } from './components/add-wish-list/add-wish-list.component';
import { DetailsWishListComponent } from './components/details-wish-list/details-wish-list.component';
import { FormsModule } from '@angular/forms';
import { ColorsComponent } from './components/colors/colors.component';
import { SizesComponent } from './components/sizes/sizes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountsComponent,
    ProductsComponent,
    WishListComponent,
    AddWishListComponent,
    DetailsWishListComponent,
    ColorsComponent,
    SizesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
