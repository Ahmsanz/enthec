### Description
This is a simple API with just two endpoints, _find_ and _users_.

- The first one allows to access the _Google Play_ store web site and obtain the details of five apps, given a category (if none is provided, it will return the tp-five free apps in the store).

- The second endpoint provides a list of users from the fake API service [Go Rest](https://gorest.co.in/ "Online REST API for Testing and Prototyping"). If an user id is passed as query parameter, it will return the details of the user, as well as the posts he/she has authored.

You can install all the needed dependencies by calling 

``` bash
$ npm i
```

and run it locally with 

``` bash
$ npm run start:dev
```