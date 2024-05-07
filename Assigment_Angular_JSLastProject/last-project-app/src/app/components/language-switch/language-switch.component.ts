import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent {
    constructor(private translateService: TranslateService) {}

    changeLanguage(lang: 'en' | 'da') {
        this.translateService.use(lang);
    }
}
