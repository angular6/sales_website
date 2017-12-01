import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ListingsComponent } from './listings/listings.component'
import { ProductComponent } from './product/product.component'


const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'dublin/search', component: ListingsComponent, data:{typeoflisting:"search"} }, 
  { path: 'dublin/category/:param', component: ListingsComponent, data:{typeoflisting:"c"} }, 
  { path: 'dublin/category/:param2/:param', component: ListingsComponent, data:{typeoflisting:"c"} }, 
  { path: 'dublin/subcategory/:param', component: ListingsComponent, data:{typeoflisting: "s"} },
  { path: 'dublin/subcategory/:param2/:param', component: ListingsComponent, data:{typeoflisting: "s"} },
  { path: 'dublin/product/:param2/:param', component: ProductComponent, data:{typeoflisting: "_p"} },
  { path: 'dublin/product/:param', component: ProductComponent, data:{typeoflisting: "_p"} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
