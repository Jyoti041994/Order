# OrderAppUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

`ng generate component component-name` to generate a new component command has been used to create project

npm install is used to install dependency modules


## Specific File dependencies
1.To make use of translator npm i i18n module has been installed
Inside shared folder services, language.setting.ts file has been added to make it work
1.1 TranslateModule has been imported and installed.

2 To read json file inside order-listing and order-detail page, "resolveJsonModule":true is set inside compiler options inside tsconfig.json file

3 Routing of application is set inside app-routing.module.ts file

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

