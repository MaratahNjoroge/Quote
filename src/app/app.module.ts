import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from '../app/qoutes/qoutes.component';
import { QuotesDetailsComponent } from  '../app/qoutes/quotes-details';
import { CapitalizePipe} from '../app/capitalize-pipe.pipe';
import { QuotesFormComponent } from '../app/quotes-form/quotes-form.component'


@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
     QuotesDetailsComponent,
    CapitalizePipe,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
