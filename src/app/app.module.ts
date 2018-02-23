import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ContactAddComponent} from './contact/contact_add/contact-add/contact-add.component';
import {FormsModule} from '@angular/forms';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactAddComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
