import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { header_component } from './header/header_component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SearchComponent } from './home-component/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './home-component/product-details/product-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterComponent } from './home-component/product-list/filter/filter.component';
import { ProductComponent } from './home-component/product-list/product/product.component';
import { ProductListComponent } from './home-component/product-list/product-list.component';
import { contactModule } from './contact/contact.module';
import { spacebtwwordsPipe } from './spacebtwwords.Pipe';
import { ImageErrorDirective } from './ImageErrorDirective.directive';
const routes: Routes= [
  {path: '', component: HomeComponentComponent},
  {path: 'contact', loadChildren: ()=>import ('./contact/contact.module').then ((mod)=>mod.contactModule)} ,

  {path:'home', component: HomeComponentComponent },
  {path : 'About',component: AboutComponent},
  {path : '**', component: NotFoundComponent}

  
] ;
@NgModule({
  declarations: [
    AppComponent,
    header_component,
    TopHeaderComponent,
    SearchComponent,
    ProductDetailsComponent,
    HomeComponentComponent,
    AboutComponent,
    NotFoundComponent,
    ProductComponent,
        FilterComponent,
        ProductListComponent,
        spacebtwwordsPipe,
        ImageErrorDirective


  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    contactModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
