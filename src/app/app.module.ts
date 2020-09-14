import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MatFormFieldModule , MatInputModule , MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListingComponent } from './order/order-listing/order-listing.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConfirmComponent } from './order/dialog-boxes/confirm/confirm.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';

export function customHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    OrderListingComponent,
    ConfirmComponent,
    OrderDetailComponent
  ],
  imports: [
    MatDialogModule,
    AngularFontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: customHttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [ConfirmComponent]
})
export class AppModule { }
