require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const Route = require("./routes/api/route");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

// Gunakan route
app.use("/api" ,Route);

app.listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`);
});