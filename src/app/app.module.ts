import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent} from './qoutes/qoutes.component'
import { QuotesModule } from './qoutes/QoutesModule';

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
