require("dotenv").config();
const express = require("express");
const cors = require("cors");
const handleClick = require("./jobs/handleClick");
const Connections = require("./libs/Connection");
const Config = require("./config/configuration");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/click", handleClick);

Connections();

app.listen(Config.PORT, () => {
    console.log(`Server running on port, ${Config.PORT}`);
});
