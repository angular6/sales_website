import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { ShopService } from './shop.service'
import { FilterarrayPipe } from './pipes/filterarray.pipe'
import { PadwithzeroesPipe } from './pipes/padwithzeroes.pipe'
import { AppComponent } from './app.component'
import { NavComponent } from './nav/nav.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'
import { ListingsComponent } from './listings/listings.component'
import { ProductComponent } from './product/product.component';
import { PrettyurlPipe } from './pretty_url.pipe'


@NgModule({
  declarations: [
    AppComponent,
    FilterarrayPipe,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ListingsComponent,
    ProductComponent,
    PadwithzeroesPipe,
    PrettyurlPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ShopService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
