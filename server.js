
// Gets the Router routes, tells server to make an express server
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Server initialized
const app = express();
const PORT = process.env.PORT || 3001;

// Nessecary Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Requirement for the server to work
app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));