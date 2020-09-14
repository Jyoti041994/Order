import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { SettingConstant } from './shared/constants';
import { LanguageSettings} from './shared/services';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'product-app-ui';
  unsubscribe : Subject <void> = new Subject();

  constructor(private translate: TranslateService,
              private language: LanguageSettings,
              private settings: SettingConstant) {
      language.getLanguage().pipe(takeUntil(this.unsubscribe)).subscribe( lang => {
      const setLanguage: any = lang ? lang : settings.DEFAULT_LANGUAGE.locale;
      translate.setDefaultLang(setLanguage);
    });
  }
}
