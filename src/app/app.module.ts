import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppPaginationComponent } from './app-pagination/app-pagination.component';
import { PageSizeSelectorComponent } from './page-size-selector/page-size-selector.component';
import { PhoneNumberGeneratorComponent } from './phonenumber-generator/phonenumber-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberGeneratorComponent,
    PageSizeSelectorComponent,
    AppPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
