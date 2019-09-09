var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mysql = require("mysql");
var pool = mysql.createPool({
 connectionLimit: 2,
 host: "mysql.stud.iie.ntnu.no",
 user: "emirde",
 password: "5AeX3tYs",
 database: "emirde",
 debug: false
});
app.use(bodyParser.json()); // for å tolke JSON

app.get("/artikkler", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("Fikk request fra klient");
    pool.getConnection((err, connection) => {
        console.log("Connected to database");
        if (err) {
            console.log("Feil ved kobling til databasen");
            res.json({ error: "feil ved ved oppkobling" });
        } 
        else {
            connection.query(
                "select * from artikkel",
                (err, rows) => {
                    connection.release();
                    if (err) {
                    console.log(err);
                    res.json({ error: "error querying" });
                    } else {
                    console.log(rows);
                    res.json(rows);
                    }
                }
            );
        }
    });
});
app.post("/leggTilArtikkel", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log("Overskrift: " + req.body.overskrift);
    pool.getConnection((err, connection) => {
        if (err) {
        console.log("Feil ved oppkobling");
        res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.body.overskrift, req.body.innhold, req.body.bilde, req.body.kategoriId, req.body.viktighet];
            connection.query(
                "insert into artikkel (overskrift,innhold,bilde,kategoriId,viktighet) values (?,?,?,?,?)",
                val,
                err => {
                    if (err) {
                    console.log(err);
                    res.status(500);
                    res.json({ error: "Feil ved insert" });
                    } else {
                        console.log("insert ok");
                        res.send("");
                    }
                }
            );
        }
    });
});
   
var server = app.listen(8080);