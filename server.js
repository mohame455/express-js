const express = require("express")

const app = express()

app.use(date = (req, res, next) => {
    let newdate = new Date()
    console.log(newdate)
    var hour = newdate.getHours();
    console.log(hour)
    var day=newdate.getDay()
    console.log(day)


    if (hour >= 9 && hour <= 17 && day>=1 && day<=5) {
        app.use(express.static(__dirname + '/public'));
        next()
    }
    else { res.send("closed") }
})





app.listen(4000, (err) => {
    if (err) console.log("Server is not Running ")
    else console.log("Server is Running")
})