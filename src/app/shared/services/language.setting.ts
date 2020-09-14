import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { environment} from './../../../environments/environment';

import { SettingConstant } from './../constants/settings.constant';
@Injectable({
    providedIn: 'root'
})
export class LanguageSettings {
    private language: string;

    constructor(private settings: SettingConstant, private localStorage: LocalStorage){
    }

    setLanguage(language){
        this.localStorage.setItem(environment.languageName, language).subscribe(() => {
            this.language = language;
        }, ()=> {
            console.log("Could not able to save the language name in the data file!");
        });
    }

    getLanguage(){
        return this.localStorage.getItem(environment.languageName)
    }
}