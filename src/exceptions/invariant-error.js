const ClientError = require('./client-error');

class InvarianError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InvariantError';
  }
}

module.exports = InvarianError;
