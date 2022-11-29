import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  public englishActive?: boolean;
  constructor() {
    if (TranslationService.activeLanguage === 'eng') {
      this.englishActive = true;
    } else {
      this.englishActive = false;
    }
  }

  public switchLanguages() {
    this.englishActive = !this.englishActive;
    TranslationService.activeLanguage = 'ger';
    if (this.englishActive) {
      TranslationService.activeLanguage = 'eng';
    }

    window.location.reload();
  }
}
