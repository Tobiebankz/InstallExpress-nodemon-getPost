const express = require("express")
const app = express()
const path = require("path")
const fs = require ("fs")
const contacts = JSON.parse(fs.readFileSync("./contact.json, utf8"))
// console.log(contacts)
// console.log(typeof contacts)

// GET request: this is a type of request that is use to fetch datas from the server or database through the server.
// POST request: this is a type of request that is used to post data to the database through the server.
// PATCH request: this is a type of request that is use to partially update a document on the database through the server
// PUT request: this is a type of request that is use to totally update a document on the database through the server
// DELETE request: this is a type of request that is use to delete a document on the database through the server

//to install nodemon as a dependency= "npm i nodemon --save-dev"

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})
app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/blog.html'))
})
app.get("/blog/details", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/blog-single.html'))
})
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/contact.html'))
})

app.post("/contact", (req, res) => {
    const { subject, message, yourname, youremail } = req.body;
    if (
        !yourname ||
        !youremail ||
        !subject ||
        !message ||
        yourname.trim() == "" ||
        youremail.trim() == "" ||
        subject.trim() == "" ||
        message.trim() == "" ||
     ) {
        return res.sendFile(path.join(__dirname, "/views/contact.html"));
    }
    const contactDatas = JSON.parse(fs.readFileSync("./contact.json, utf8"))
    fs.writeFileSync("./database.json", JSON.stringify(contacts));
    return res.sendFile(path.join(__dirname, "/views/contact.html"));
})

app.get("/courses", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/courses.html'))
})
app.get("/teacher", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/teacher.html'))
})



app.listen(4545, () => {
    console.log("Server is running on port 4545")
})