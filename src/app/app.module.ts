import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandiingpageComponent } from './component/landiingpage/landiingpage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BookInfoComponent } from './component/book-info/book-info.component';
import { AngularMaterialModule } from './material.module';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { InterceptorService } from './service/interceptor.service';

@NgModule({
  declarations: [AppComponent, LandiingpageComponent, BookInfoComponent, WishlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AngularMaterialModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
