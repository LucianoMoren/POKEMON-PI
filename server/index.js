const server = require("./src/app.js");
const { conn } = require("./src/db.js");

//!CUANDO VAYA A DEPLOYAR TENGO QUE IGUALAR EL FORCE EN FALSE
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("Server listening at 3001"); // eslint-disable-line no-console
  });
});
