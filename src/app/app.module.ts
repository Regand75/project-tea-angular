import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ProductCardComponent } from './components/common/product-card/product-card.component';
import { MainComponent } from './components/pages/main/main.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductsComponent } from './components/pages/products/products.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { TextReductionPipe } from './pipes/text-reduction.pipe';
import { ProductComponent } from './components/pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    MainComponent,
    OrderComponent,
    ProductsComponent,
    TextReductionPipe,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
