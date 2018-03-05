import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent} from './about/about.component';


import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductDetailComponent } from './product-details/new-product-detail/new-product-detail.component';
import { ListProductDetailComponent } from './product-details/list-product-detail/list-product-detail.component';
import { ProductComponent } from './product/product.component';
import { TestasycComponent } from './testasyc/testasyc.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent,
  children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'productdetails', component: ProductDetailsComponent },
    { path: 'listproductdetails', component: ListProductDetailComponent },
    { path: 'newproductdetails', component: NewProductDetailComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ParentComponent,
    ChildComponent,
    ProductDetailsComponent,
    NewProductDetailComponent,
    ListProductDetailComponent,
    ProductComponent,
    TestasycComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) 
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
