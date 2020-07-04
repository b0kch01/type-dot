var path = require("path")
var words = require("random-words")
var express = require("express")
var app = express()

var wordList = []

var player = {
    name: "Guest 1",
    color: "#fff",
    wpm: 0,
    word: 0,
};

var players = [];

function generateWords() {
    wordList = words(15);
}


app.use("/stuff", express.static(__dirname + "/stuff"))
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"));
app.locals.basedir = __dirname;

app.get("/", (req, res) => {
    generateWords()

    res.render("index", {
        words: wordList
    });
});

app.listen(3000, () => {
    console.log("Game initialized at localhost: 3000");
});