import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './pages/list/list.component';
import { MapComponent } from './pages/map/map.component';
import { BibListElementComponent } from './shared/ui/bib-list-element/bib-list-element.component';
import { BibListHeaderComponent } from './shared/ui/bib-list-header/bib-list-header.component';
import { IconButtonComponent } from './shared/ui/form-controls/icon-button/icon-button.component';
import { ButtonModule } from 'primeng/button';
import { ListMapSwitchComponent } from './shared/ui/list-map-switch/list-map-switch.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LanguageSwitchComponent } from './shared/ui/language-switch/language-switch.component';
import { TranslationPipe } from './shared/pipes/translation.pipe';
import { ImpressumComponent } from './pages/mandatory/impressum/impressum.component';
import { DatenschutzComponent } from './pages/mandatory/datenschutz/datenschutz.component';
import { FilterComponent } from './shared/ui/filter/filter.component';
import { TextInputComponent } from './shared/ui/form-controls/text-input/text-input.component';
import { ButtonComponent } from './shared/ui/form-controls/button/button.component';
import { CheckboxComponent } from './shared/ui/form-controls/checkbox/checkbox.component';
import { LoadingComponent } from './shared/ui/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    MapComponent,
    IconButtonComponent,
    BibListElementComponent,
    BibListHeaderComponent,
    ListMapSwitchComponent,
    MainPageComponent,
    LanguageSwitchComponent,
    TranslationPipe,
    ImpressumComponent,
    DatenschutzComponent,
    FilterComponent,
    TextInputComponent,
    ButtonComponent,
    CheckboxComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    LeafletModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
