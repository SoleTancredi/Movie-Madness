# Movie-Madness
The goal of this project is to secure movies-app using Keycloak(with PKCE). movies-app consists of two applications: one is a Spring Boot Rest API called movies-api and another is a ReactJS application called movies-ui

## Stack
### ☕ backend
- Java
- SpringBoot
- KeyCloack
- MongoDB
### 👩‍💻 frontend
- Angular
- NgPrime (ui-library)
- TypeScript
- imdbId API
- Docker 
- KeyCloack
## 
- ### movies-api

  `Spring Boot` Web Java backend application that exposes a REST API to manage **movies**. Its secured endpoints can just be accessed if an access token (JWT) issued by `Keycloak` is provided.
  
  `movies-api` stores its data in a [`Mongo`](https://www.mongodb.com/) database.

  `movie-api` has the following endpoints

  | Endpoint                                                          | Secured | Roles                       |
  |-------------------------------------------------------------------|---------|-----------------------------|
  | `GET /api/userextras/me`                                          | Yes     | `MOVIES_MANAGER` and `USER` |
  | `POST /api/userextras/me -d {avatar}`                             | Yes     | `MOVIES_MANAGER` and `USER` | 
  | `GET /api/movies`                                                 | No      |                             |
  | `GET /api/movies/{imdbId}`                                        | No      |                             |
  | `POST /api/movies -d {"imdb","title","director","year","poster"}` | Yes     | `MOVIES_MANAGER`            |
  | `DELETE /api/movies/{imdbId}`                                     | Yes     | `MANAGE_MOVIES`             |
  | `POST /api/movies/{imdbId}/comments -d {"text"}`                  | Yes     | `MOVIES_MANAGER` and `USER` |
