// // import 'dotenv/config';
// import express from "express";
// import * as projects from "./model.mjs";

// const PORT = process.env.PORT;
// const app = express();
// app.use(express.json()); // REST needs JSON MIME type.

// // RETRIEVE by Project ID controller
// app.get("/projects", (req, res) => {
//   projects
//     .retrieveProjectID(req.params._id)
//     .then((project) => {
//       if (project !== null) {
//         res.json(project);
//       } else {
//         res
//           .status(404)
//           .json({ Error: "That project was not found in the database." });
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(400).json({
//         Error:
//           "Unable to retrieve that project data. Please review your input for accuracy and try again.",
//       });
//     });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });
