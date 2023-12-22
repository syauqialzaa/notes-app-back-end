require('dotenv').config();

const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/notes-service');
const NotesValidator = require('./validator/notes');
const ClientError = require('./exceptions/client-error');

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

  server.ext('onPreResponse', (request, h) => {
    // get response context from request
    const { response } = request;

    // handling client errors internally
    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });

      newResponse.code(response.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
