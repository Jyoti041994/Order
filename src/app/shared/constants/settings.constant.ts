import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class SettingConstant {

    DEFAULT_LANGUAGE = {
        name: 'English (India)',
        locale: 'en',
        flagURL: 'assets/images/india.png'
      };
      DEFAULT_CONTENT_TYPE = '';
      LANG_KEY = 'lang';
      LANGUAGES = [
        {
          name: 'English (India)',
          locale: 'en',
          flagURL: ''
        },
        {
          name: '普通话（中国）',
          locale: 'zh',
          flagURL: ''
        }
      ];

}