<h1 align="center"><b>notes-app-back-end</b></h1>

This is learning course projects from 'Belajar Fundamental Aplikasi Back-End' at Dicoding. Mid-level version.

## Tech Stack

| Technologies & Libraries |
| ------------------------ |
| NodeJS                   |
| Hapi                     |
| Eslint: AirBnB           |
| Nodemon                  |
| Nanoid                   |
| Joi Validator            |
| Node Postgres            |
| Node Pg Migrate          |
| Dotenv                   |
| Bcrypt                   |

## Code Structure

```
├── src/
│ ├── api/                            // load folders that is Hapi plugin.
│ │ ├── notes/                        // notes plugin. url/notes.
│ │ └── users/                        // users plugin. url/users.
│ ├── exceptions/                     // custom error exception.
│ │ ├── client-error.js
│ │ ├── invariant-error.js
│ │ └── client-error.js
│ ├── services/                       // load whole functions that used for write, fetch, change, or delete a resource. (CRUD operation in resource)
│ │ ├── in-memory/
│ │ │ └── notes-service.js
│ │ └── postgres/
│ │   ├── notes-service.js
│ │   └── users-service.js
│ ├── utils/                          // mapping object of models structure.
│ │ └── index.js
│ ├── validator/                      // validate inputted data payload.
│ │ ├── notes/
│ │ └── users/
│ └── server.js                       // load the code for create, configure, and run HTTP server using Hapi, registration will happen in here.
└── package.json
```

## Run

1. Clone this repository
2. Run `npm install`
3. Create `.env` file then write the lines of code as shown in the `.env.example` file and adjust with your configuration
4. Run `npm run migrate up`
5. Run `npm run start:prod` for production mode or `npm run start:dev` for development mode with nodemon