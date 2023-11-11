
# cdrrmo-server

**Ormoc CDRRMO Information Management System**

1. Install docker and docker compose 
2. install yarn


Run these commands in terminal:
1. yarn install -> this will install dependencies
2. yarn db:dev:up -> this will run the docker-compose.yml. It will set up the postgres db. see the file docker-compose.yml for more details located in the root directory
3. yarn start:dev -> this will start the nodejs server


Note: only run yarn db:dev:up initially. Run yarn db:dev:restart for development


Api endpoints are using REST api 

To test the api endpoints install postman or insomnia

CRUD pattern: 

 - GET REQUEST: http://localhost:3000/api/v1/user
 - GET REQUEST: http://localhost:3000/api/v1/user/<uuid>
 - PATCH REQUEST: http://localhost:3000/api/v1/user/<uuid>
 - POST REQUEST: http://localhost:3000/api/v1/user
 - DELETE REQUEST: http://localhost:3000/api/v1/user/<uud>

------------------
- GET REQUEST: http://localhost:3000/api/v1/team
- GET REQUEST: http://localhost:3000/api/v1/team/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/team/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/team
- DELETE REQUEST: http://localhost:3000/api/v1/team/<uud>
- POST REQUEST: http://localhost:3000/api/v1/team/member
- DELETE REQUEST: http://localhost:3000/api/v1/team/member/<uud>
----
- GET REQUEST: http://localhost:3000/api/v1/emergency
- GET REQUEST: http://localhost:3000/api/v1/emergency/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/emergency/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/emergency
- DELETE REQUEST: http://localhost:3000/api/v1/emergency/<uud>

---

- GET REQUEST: http://localhost:3000/api/v1/training-skill
- GET REQUEST: http://localhost:3000/api/v1/training-skill/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/training-skill/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/training-skill
- DELETE REQUEST: http://localhost:3000/api/v1/training-skill/<uud>

-----

- GET REQUEST: http://localhost:3000/api/v1/bart
- GET REQUEST: http://localhost:3000/api/v1/bart/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/bart/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/bart
- DELETE REQUEST: http://localhost:3000/api/v1/bart/<uud>

------

- GET REQUEST: http://localhost:3000/api/v1/po
- GET REQUEST: http://localhost:3000/api/v1/po/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/po/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/po
- DELETE REQUEST: http://localhost:3000/api/v1/po/<uud>

-----

- GET REQUEST: http://localhost:3000/api/v1/cso
- GET REQUEST: http://localhost:3000/api/v1/cso/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/cso/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/cso
- DELETE REQUEST: http://localhost:3000/api/v1/cso/<uud>

-----

- GET REQUEST: http://localhost:3000/api/v1/na
- GET REQUEST: http://localhost:3000/api/v1/na/<uuid>
- PATCH REQUEST: http://localhost:3000/api/v1/na/<uuid>
- POST REQUEST: http://localhost:3000/api/v1/na
- DELETE REQUEST: http://localhost:3000/api/v1/na/<uud>

------

To populate the entire database: 
POST REQUEST: http://localhost:3000/api/v1/seeder/seed-data

To truncate the entire database
POST REQUEST: http://localhost:3000/api/v1/seeder/truncate-db

