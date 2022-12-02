import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { CandyListComponent } from './candy-list/candy-list.component';
import { CandyStoreComponent } from './candy-store/candy-store.component';
import { CandyCartComponent } from './candy-cart/candy-cart.component';
import { CandyAboutComponent } from './candy-about/candy-about.component';
import { CandyContactComponent } from './candy-contact/candy-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CandyListComponent,
    CandyStoreComponent,
    CandyCartComponent,
    CandyAboutComponent,
    CandyContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
