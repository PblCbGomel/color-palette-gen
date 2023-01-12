import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxColorsModule } from 'ngx-colors';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModuleModule } from './angular-material-module/angular-material-module.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './header/settings/settings.component';
import { ColorBlockComponent } from './main/color-block/color-block.component';
import { RandomcolorModule } from 'angular-randomcolor';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SettingsComponent,
    ColorBlockComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModuleModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxColorsModule,
    ReactiveFormsModule,
    FormsModule,
    RandomcolorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
