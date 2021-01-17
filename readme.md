### Description
This is a simple API with just two endpoints, _find_ and _users_.

- The first one allows to access the _Google Play_ store web site and obtain the details of five apps, given a category (if none is provided, it will return the tp-five free apps in the store).

- The second endpoint provides a list of users from the fake API service [Go Rest](https://gorest.co.in/ "Online REST API for Testing and Prototyping"). If an user id is passed as a parameter in the URL, it will return the details of the user, as well as the posts he/she has authored. A _page=X_ and a _limit=X_ can be also passed as query parameters to customize the users list.

You can install all the needed dependencies by calling 

``` bash
$ npm i
```

and run it locally with 

``` bash
$ npm run start:dev
```

#### Accepted categories:
  APPLICATION,
  ANDROID_WEAR,
  ART_AND_DESIGN,
  AUTO_AND_VEHICLES,
  BEAUTY,
  BOOKS_AND_REFERENCE,
  BUSINESS,
  COMICS,
  COMMUNICATION,
  DATING,
  EDUCATION,
  ENTERTAINMENT,
  EVENTS,
  FINANCE,
  FOOD_AND_DRINK,
  HEALTH_AND_FITNESS,
  HOUSE_AND_HOME,
  LIBRARIES_AND_DEMO,
  LIFESTYLE,
  MAPS_AND_NAVIGATION,
  MEDICAL,
  MUSIC_AND_AUDIO,
  NEWS_AND_MAGAZINES,
  PARENTING,
  PERSONALIZATION,
  PHOTOGRAPHY,
  PRODUCTIVITY,
  SHOPPING,
  SOCIAL,
  SPORTS,
  TOOLS,
  TRAVEL_AND_LOCAL,
  VIDEO_PLAYERS,
  WEATHER,
  GAME,
  GAME_ACTION,
  GAME_ADVENTURE,
  GAME_ARCADE,
  GAME_BOARD,
  GAME_CARD,
  GAME_CASINO,
  GAME_CASUAL,
  GAME_EDUCATIONAL,
  GAME_MUSIC,
  GAME_PUZZLE,
  GAME_RACING,
  GAME_ROLE_PLAYING,
  GAME_SIMULATION,
  GAME_SPORTS,
  GAME_STRATEGY,
  GAME_TRIVIA,
  GAME_WORD,
  FAMILY,
  FAMILY_ACTION,
  FAMILY_BRAINGAMES,
  FAMILY_CREATE,
  FAMILY_EDUCATION,
  FAMILY_MUSICVIDEO,
  FAMILY_PRETEND