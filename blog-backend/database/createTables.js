const pool = require('./db');
/*
async function createTables() {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS "user" (
          userId SERIAL PRIMARY KEY,
          username VARCHAR(25) UNIQUE NOT NULL,
          password TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          admin BOOLEAN NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      
      await pool.query(`
        CREATE TABLE IF NOT EXISTS post (
          postId SERIAL PRIMARY KEY,
          userId INTEGER NOT NULL,
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES "user"(userId)
        );
      `);


      console.log("Tabellen erfolgreich erstellt");
    } catch (error) {
      console.error("Fehler beim Erstellen der Tabellen", error);
    } finally {
      await pool.end(); // Verbindung schließen
    }
  }
  
createTables();
*/
/*
async function insertUsersInTable() {
  try {
    const password = 'test123';
    const admin = false;

    for (let i = 1; i <= 5; i++) {
      const username = `user${i}`;
      const email = `user${i}@tw7.com`;

      await pool.query(
        `INSERT INTO "user" (username, password, email, admin) VALUES ($1, $2, $3, $4)`,
        [username, password, email, admin]
      );

      console.log(`User ${username} erfolgreich hinzugefügt`);
    }
  } catch (error) {
    console.error("Fehler beim Hinzufügen der User", error);
  } finally {
    await pool.end(); // Verbindung schließen
  }
}

insertUsersInTable();
*/
/*
async function listTables() {
    try {
      const res = await pool.query(`
        SELECT * FROM "user";
      `);
      console.log("Tabellen: ", res.rows);
    } catch (err) {
      console.error("Fehler beim Abrufen der Tabellen", err);
    } finally {
      await pool.end();
    }
  }
  
listTables();
*/

async function createSamplePosts() {
  const admins = [1, 2, 3]; // Die UserIds der Admins
  const numberOfPosts = 30;

  try {
    for (let i = 0; i < numberOfPosts; i++) {
      // Wähle zufällig einen Admin aus
      const randomAdmin = admins[Math.floor(Math.random() * admins.length)];

      // Generiere Titel und Content für den Post
      const title = `Sample Post ${i + 1}`;
      const content = `This is a sample post number ${i + 1} created by Admin ${randomAdmin}.`;

      // Führe den INSERT-Befehl aus
      await pool.query(`
        INSERT INTO post (userID, title, content, createdAt)
        VALUES ($1, $2, $3, CURRENT_TIMESTAMP);
      `, [randomAdmin, title, content]);

      // Alle 100 Posts eine kurze Ausgabe
      if (i % 100 === 0) {
        console.log(`${i + 1} posts inserted.`);
      }
    }

    console.log('30 sample posts successfully inserted.');
  } catch (error) {
    console.error('Error inserting posts:', error);
  } finally {
    await pool.end();
  }
}

createSamplePosts();
