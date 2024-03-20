import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { MenutabsComponent } from './components/menutabs/menutabs.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgifComponent,
    MenutabsComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
