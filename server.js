var express = require("express")
var app = express()

app.get("/about", function (req, res, next) {
    console.log("== GET request for /about")

    // res.type("text/html")
    // res.status(200)
    res.status(200).send("<html><body><h1>About Page</h1></body></html>")

    // next()
})

app.get("/", function (req, res, next) {
    console.log("== GET request for /")
    res.status(200).sendFile(__dirname + "/static/index.html")
})

app.get("/people", function (req, res, next) {
    console.log("== GET request for /people")
    res.status(200).sendFile(__dirname + "/static/people.html")
})

app.get("/people/:person", function (req, res, next) {
    console.log("== GET request for /people/:person")
    console.log("  -- req.params:", req.params)
    var person = req.params.person
    res.status(200).sendFile(__dirname + "/static/people/" + person + ".html")
    // next()
})

app.get("*", function (req, res, next) {
    console.log("== 404!")
    res.status(404).sendFile(__dirname + "/static/404.html")
})

// app.post()
// app.put()
// app.patch()
// app.delete()

app.listen(8000, function () {
    console.log("== Server is listening on port 8000")
})
