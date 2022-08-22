# BTAR

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Run image in local
docker build -t btar-ui:test .	
docker run -p 80:80 -it (image name)
## Create docker image and deploy to server
docker build -t btar-ui:test .	
docker save btar-ui:test | gzip > btar-ui.tar.gz
scp btar-ui.tar.gz dev@172.18.22.81:/home/dev/Downloads
## In the server
/home/dev/Downloads zcat btar-ui.tar.gz | docker load
cd /opt/docker compose up -d
## check the container status
docker logs Container-name --tail 300

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
