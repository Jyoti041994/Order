import { SettingConstant } from './constants';
import { LanguageSettings} from './services';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports : [CommonModule]
 })
export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [
          SettingConstant,
          LanguageSettings
        ]
      };
    }
  }
