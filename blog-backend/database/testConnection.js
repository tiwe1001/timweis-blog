const pool = require('./db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Fehler bei der Verbindung zur Datenbank:', err);
  } else {
    console.log('Verbindung erfolgreich! Aktuelle Zeit in der DB:', res.rows[0]);
  }
  pool.end(); // Verbindung schließen
});