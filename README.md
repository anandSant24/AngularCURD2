# Angular8
#7  How do you pre-populate the form and nested form in Angular
    How do you prepopulate only nested form group
#6

#5 Quest: Access a Form Control in Form Group 
    display the input value using template 
    display the input value using component on ngSubmit log them
    What are the different states of FormGroup and FormControl   

#4 Quest: Create a Reactive form that and display user input as part of the console logs

    #creating a Routing module sepeartely for modularity and sepreation of concern

    $ ERROR
        Uncaught Error: Template parse errors:
        'router-outlet' is not a known element:
    FIX
        In app-routing.module.ts
            exports: [RouterModule]
        
        Inside app.module.ts
        imports: [
            BrowserModule,
            AppRoutingModule
        ]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
