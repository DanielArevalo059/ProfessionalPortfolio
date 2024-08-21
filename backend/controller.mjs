// import 'dotenv/config';
import express from "express";
import * as discStats from "./model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json()); // REST needs JSON MIME type.

// RETRIEVE by ID controller
app.get("/log/:_id", (req, res) => {
  discStats
    .retrieveDiscStatsByID(req.params._id)
    .then((discStat) => {
      if (discStat !== null) {
        res.json(discStat);
      } else {
        res
          .status(404)
          .json({ Error: "That stat was not found in the database." });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error:
          "Unable to retrieve that stat. Please review your input for accuracy and try again.",
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
