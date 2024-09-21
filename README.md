# Angular System Design Library

A reusable Angular library for implementing system design components and patterns, providing tools and utilities to help developers create scalable, maintainable, and efficient applications.

## Reference(s)

> 1. <https://angular.dev/cli/new>

## Few Commmands - 17-Sep-2024

> 1. Create a new workspace
> 1. Create a new library
> 1. Create a new component
> 1. Modified the component
> 1. Export the HelloWorld Component
> 1. Build the Library
> 1. Update `package.json`
> 1. Log In to GitHub Packages
> 1. Navigate to the `dist` folder and publish the package

```powershell
PS D:\TSA\ng-system-design-library>
npm install -g @angular/cli

PS D:\TSA\ng-system-design-library>
ng new sv-ng-18-ws --create-application=false

PS D:\TSA\ng-system-design-library\sv-ng-18-ws>
ng generate library sv-ng-system-design

PS D:\TSA\ng-system-design-library\sv-ng-18-ws\projects\sv-ng-system-design\src\lib>
ng generate component heading
ng generate component button

PS D:\TSA\ng-system-design-library\sv-ng-18-ws>
ng build

npm login --registry=https://npm.pkg.github.com/
username: vishipayyallore
password: gph

PS D:\TSA\ng-system-design-library\sv-ng-18-ws\dist\sv-ng-system-design>
npm publish

ng build "sv-ng-system-design"
```

### package.json

```json
"repository": {
    "type": "git",
    "url": "https://github.com/ViswanathaSwamy-PK-TechSkillz-Academy/ng-hello-world-lib.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
```

## Create the Sample Application to use the library

> 1. Create a new folder called `test-apps`
> 1. Create a new Angular 18 appliation

```powershell
ng new hwh1-sampleapp --standalone --skip-tests --routing false --style css
```
