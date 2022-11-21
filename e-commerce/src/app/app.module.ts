import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsDemoComponent } from './google-maps-demo/google-maps-demo.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HomePageComponent,
    ProductDetailsComponent,
    CartComponent,
    GoogleMapsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'products', component: ProductListComponent},
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'cart', component: CartComponent},
    ],
    ),
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
