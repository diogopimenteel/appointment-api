# appointment-api :computer::clock1::syringe:

API created as a challenge for a job position at Pitang Agile IT.

This API focuses on managing appointments for COVID-19 vaccination, following some rules:

- There are 20 vacancies available per day.
- Only 2 appointments can be made at the same scheduled time.
- The time interval between one schedule and another is 1 hour.
- It will only be possible to schedule appointments between 6 AM and 6 PM.
- The patient must inform his/her name, date of birth and day and time for the scheduling.

### Requirements :white_check_mark:
- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation :arrow_down:

### Clone this project :octocat:
1. Using the command:

```sh
git clone git@github.com:diogopimenteel/appointment-api.git
```

### Using npm :package:

1. Install dependencies using the command:

 ```sh
 npm i
 ```

2. Run api using the command:
   
  ```sh
  npm run dev
  ```

### Using yarn :cat:

1. Install dependencies using the command:

 ```sh
 yarn
 ```

 2. Run api using the command:

   ```sh
   yarn dev
   ```

## .env variables :house:

1. DATABASE_URL= Your MongoDB URL 
2. PORT= The port you want to use


## Using Docker :whale:

1. Run the command:

 ```sh
 docker-compose up -d
 ```