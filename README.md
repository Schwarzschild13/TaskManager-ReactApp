# Task Manager

Task Manager app developed using ReactJS, MongoDB and Spring Boot.

The app has been deployed on Heroku.

#### Click here for a > [Live preview](https://frontend-reactapp-panther.herokuapp.com/)

## Features

- Add new tasks
- Mark existing tasks as completed or not completed
- Delete existing tasks

## Tech

#### Frontend:

- [ReactJS](https://reactjs.org/) - An open-source front-end JavaScript library for building user interfaces or UI components.
- [Node.js](https://nodejs.org/en/) - A Node.js server makes your app available to serve HTTP requests.

#### Backend:

- [MongoDB](https://www.mongodb.com/) - MongoDB is a source-available cross-platform document-oriented database program.
- [Spring Boot](https://spring.io/projects/spring-boot) - Spring Boot is basically an extension of the Spring framework, which eliminates the boilerplate configurations required for setting up a Spring application.
- [Postman](https://www.postman.com/) - A collaboration platform for API development to test APIs.

## Run

#### Backend

- Install mongodb
  > Go inside the bin folder of mongodb and use the command `mongod` to start the mongoserver.

Clone the repo.

```sh
git clone https://github.com/Schwarzschild13/TaskManager-ReactApp.git

cd TaskManager-ReactApp/backend
```

Go to `TaskManager-ReactApp\backend\src\main\resources\application.properties` and update the `spring.data.mongodb.uri` value to `mongodb://localhost:mongodbPortNumber/dbname` to run on using local mongdb.

Open the `backend` folder using Spring Tool Suite or any other IDEs that support springboot and run the project. The backend Spring application will start serving on `http://localhost:6039/` as defined in the `application.properties` file. This port number can be changed.

#### Frontend

```sh
cd TaskManager-ReactApp/frontend
```

Open this folder in any IDEs.

- Make sure you have Node.js installed

Install the required packages

```sh
npm i
```

To run the project

```
npm start
```

`npm run build ` creates a `build ` directory with a production build of your app.

Access your project via `http://localhost:portnumber`. Check your terminal for the port number.
