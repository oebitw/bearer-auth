# bearer-auth


## Author: Omar Ewies
* [Tests Report]()

* [Heroku Deployment]()

* [Pull Request]()

## Setup

1) Clone the repo
2) npm init -y.
3) npm install.
4) Create .env file with PORT=3030.

## Test
* npm test

![](img/auth-test.JPG)


## Run the app
* npm start

## End points

### `/signup`: POST Method

[]()

* You can Sign-up by sending post request using postman.

Example of the data when you sign up :

```
{
    "user": {
        "_id": "60aca3b2b68af20a82b9d956",
        "username": "omer12",
        "password": "$2b$10$vd3lLt7kMR9fJk8h3l3BHeB1bbfqhDRSe8GpNtAzYOWzWYFcl9k1W",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9tZXIxMiIsImlhdCI6MTYyMTkyNjgzNSwiZXhwIjoxNjIxOTI3NzM1fQ.Srod5-acfbXsexJU_4e-zu5y1dr4gZay51MfMvlo-7s"
}
```






### `/signin`:  POST Method

[]()


* You can signin by sending post request using postman.

Example of the data when you sign in :

**NOTE That the token received after signing in is different from the token received when the user sign-up**

```
{
    "user": {
        "_id": "60aca3b2b68af20a82b9d956",
        "username": "omer12",
        "password": "$2b$10$vd3lLt7kMR9fJk8h3l3BHeB1bbfqhDRSe8GpNtAzYOWzWYFcl9k1W",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9tZXIxMiIsImlhdCI6MTYyMTkyNzAzMywiZXhwIjoxNjIxOTI3OTMzfQ.TTIG_yaGheLW9Jm6ljivxp3MmxXWmGwxPpmFqPv0meg"
}
```


### `/users`:  GET Method

* You can access the /users route and get all the usernames available in the DB by sending a get request with bearer auth and pass the token after you signin.

Example of the received data :

```
[
    "ewies",
    "oe",
    "omar",
    "oeoeoe",
    "omer12"
]
```

### `/secret`:  GET Method

* You can access the /secret route by sending a get request with bearer auth and pass the token after you signin.

You will see the following message when you access the secret route:

```
Secret route welcomes you
```






## UML

![](./img/uml.jpg)
