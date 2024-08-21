// import "dotenv/config";

// import * as projects from "./model.mjs";
const express = require("express");
const PORT = 8000;
const app = express();
const apiRoutes = require("./routes");
app.use(express.json()); // REST needs JSON MIME type.
app.use("/api", apiRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
