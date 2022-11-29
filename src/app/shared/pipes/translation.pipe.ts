import { Pipe, PipeTransform } from '@angular/core';
import {
  TranslationKey,
  TranslationService,
} from '../services/translation.service';

@Pipe({
  name: 'translation',
})
export class TranslationPipe implements PipeTransform {
  transform(str: TranslationKey): string {
    return TranslationService.get(str);
  }
}
