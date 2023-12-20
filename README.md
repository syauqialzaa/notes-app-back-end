<h1 align="center"><b>notes-app-back-end</b></h1>

This is learning course projects from 'Belajar Fundamental Aplikasi Back-End' at Dicoding. Mid-level version.

## Tech Stack

| Technologies       |
| ------------------ |
| NodeJS             |
| Hapi               |
| Eslint: AirBnB     |
| Nodemon            |
| Nanoid             |
| Joi Validator      |

## Code Structure

```
├── src
│ ├── api                            // load folders that is Hapi plugin.
│ │ └── notes                        // notes plugin. url/notes.
│ │   ├── handler.js                 // load notes function handler which is used in routes file. (responses for client)
│ │   ├── index.js                   // where Hapi plugin created.
│ │   └── routes.js                  // load the routing notes configuration.
│ ├── services                       // load whole functions that used for write, fetch, change, or delete a resource. (CRUD operation in resource)
│ │ └── in-memory
│ │   └── notes-service.js
│ ├── validator                      // validate inputted data payload.
│ │ └── notes
│ │   ├── index.js                   // create function as validator.
│ │   └── schema.js                  // for create and write notes data schema.
│ └── server.js                      // load the code for create, configure, and run HTTP server using Hapi, registration will happen in here.
└── package.json
```