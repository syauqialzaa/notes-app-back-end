/* eslint-disable camelcase */

exports.up = (pgm) => {
  // create new user
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_notes', 'old_notes', 'old_notes', 'old_notes')");

  // update owner of note value which is the owner has null value
  pgm.sql("UPDATE notes SET owner = 'old_notes' WHERE owner IS NULL");

  // give constraint foreign key to owner which has relation to users table
  pgm.addConstraint('notes', 'fk_notes.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('notes', 'fk_notes.owner_users.id');
  pgm.sql("UPDATE notes SET owner = NULL WHERE owner = 'old_notes'");
  pgm.sql("DELETE FROM users WHERE id = 'old_notes'");
};
