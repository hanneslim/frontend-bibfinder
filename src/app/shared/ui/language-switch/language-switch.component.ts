import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  public englishActive = false;

  public switchLanguages() {
    this.englishActive = !this.englishActive;
  }
}
