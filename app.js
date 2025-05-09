const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");

const app = express();

app.use(expressEjsLayouts);
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("layout", "layout");

const indexRouter = require("./routes/index");
const storyRouter = require("./routes/story");
const profileRouter = require("./routes/profile");

app.use("/", indexRouter);
app.use("/story", storyRouter);
app.use("/profile", profileRouter);

app.listen(3000, () => console.log("server up"));
