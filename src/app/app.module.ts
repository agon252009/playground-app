import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactAddComponent } from './contact/contact_add/contact-add/contact-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
