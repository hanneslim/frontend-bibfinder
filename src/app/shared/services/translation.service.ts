import { Injectable } from '@angular/core';
import { clientTranslations } from '../translations';

type TranslationKey = keyof typeof clientTranslations;
type ApplicationLanguage = 'eng' | 'ger';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  static get(key: TranslationKey): string {
    return (
      clientTranslations[key]?.[TranslationService.activeLanguage] ??
      'unknown translation'
    );
  }

  static get activeLanguage(): ApplicationLanguage {
    return (localStorage.getItem('lang') as ApplicationLanguage) ?? 'eng';
  }

  static set activeLanguage(language: ApplicationLanguage) {
    localStorage.setItem('lang', language);
  }
}
