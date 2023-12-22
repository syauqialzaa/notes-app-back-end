require('dotenv').config();

const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/notes-service');
const NotesValidator = require('./validator/notes');

const init = async () => {
  const noteService = new NotesService();

  const server = Hapi.server({
    port: process.env.SERVER_PORT,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : process.env.SERVER_HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: noteService,
      validator: NotesValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
