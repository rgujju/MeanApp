# MeanApp
Complete MEAN stack app. Live Demo: https://meanrg.herokuapp.com/

The app is made with :
* NodeJS
* Express
* MongoDB
* Angular
* Passport (JWT)


## Usage

### Important files
The 2 configuration files are ```env.js``` for back end configuration. Where you need to edit the MongoDB driver link.
and ```.../client/src/environments/environment.ts``` for front end configuration.

### Installation

Install the dependencies
If you dont want to develop:
This will only install server side dependencies.
```sh
$ git clone https://github.com/rgujju/MeanApp
$ cd MeanApp
$ npm install
```
Run app

```sh
$ npm start
```
Visit ```http://localhost:8080``` to use the app.


### Build Instructions

If you want to develop the client side, you need to run the following commands as well.
This will install client side dependencies.
```sh
$ cd client
$ npm install
```

To build the front end, run ```ng build``` in the client directory.

