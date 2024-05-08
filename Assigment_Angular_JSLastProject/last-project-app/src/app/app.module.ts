import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageRoutingComponent } from './components/page-routing/page-routing.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DataPageComponent } from './pages/data-page/data-page.component';

// Load translation files
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitchComponent,
    HomePageComponent,
    PageRoutingComponent,
    FormPageComponent,
    DataPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        defaultLanguage: 'en',
        useDefaultLang: true,
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
