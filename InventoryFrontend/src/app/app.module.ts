import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductAPIService } from './services/product-api.service';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatirialModule } from './material-module';
import { AddProductComponent } from './product/add-product/add-product.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { LocationComponent } from './location/location.component';
import { AddLocationComponent } from './location/add-location/add-location.component';
import { EditLocationComponent } from './location/edit-location/edit-location.component';
import { LocationAPIService } from './services/location-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductComponent,
    EditProductComponent,
    LocationComponent,
    AddLocationComponent,
    EditLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatirialModule,
    RxReactiveFormsModule,

  ],
  providers: [ProductAPIService, LocationAPIService],
  bootstrap: [AppComponent],
  entryComponents: [AddProductComponent, EditProductComponent, AddLocationComponent, EditLocationComponent]
})
export class AppModule { }
