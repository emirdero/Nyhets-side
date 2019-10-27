var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
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
app.use(bodyParser.urlencoded()); // for å tolke JSON

app.use(express.static(path.join(__dirname, 'build')));

app.get("/artikkler/kategori/:kategoriId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    console.log("Fikk request fra klient");
    pool.getConnection((err, connection) => {
        console.log("Connected to database");
        if (err) {
            console.log("Feil ved kobling til databasen");
            res.json({ error: "feil ved ved oppkobling" });
        }
        else {
            var queryString = "select * from artikkel";
            if (req.params.kategoriId != 0) {
                queryString += " where kategoriId = " + req.params.kategoriId;
            }
            queryString += " order by innleggelseTid";
            connection.query(
                queryString
                ,
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

app.get("/artikkler/:artikkelId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    console.log("Fikk request fra klient");
    pool.getConnection((err, connection) => {
        console.log("Connected to database");
        if (err) {
            console.log("Feil ved kobling til databasen");
            res.json({ error: "feil ved ved oppkobling" });
        }
        else {
            connection.query(
                "select * from artikkel where artikkelId=? limit 20", req.params.artikkelId,
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

app.post("/artikkler", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log("Overskrift: " + req.body.overskrift);
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.body.overskrift, req.body.innhold, req.body.bilde, req.body.bildeAlt, req.body.kategori, req.body.viktighet];
            connection.query(
                "insert into artikkel (overskrift,innhold,bilde,bildeAlt,kategoriId,viktighet) values (?,?,?,?,?,?)",
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

app.put("/artikkler/:artikkelId", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log("Overskrift: " + req.body.overskrift);
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.body.overskrift, req.body.innhold, req.body.bilde, req.body.bildeAlt, req.body.kategori, req.body.viktighet, req.params.artikkelId];
            connection.query(
                "update artikkel set overskrift=?,innhold=?,bilde=?,bildeAlt=?,kategoriId=?,viktighet=? where artikkelId=?",
                val,
                err => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved insert" });
                    } else {
                        console.log("Update gjennomført");
                        res.send("");
                    }
                }
            );
        }
    });
});

app.delete("/artikkler/:artikkelId", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.params.artikkelId];
            connection.query(
                "delete from artikkel where artikkelId=?",
                val,
                err => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved insert" });
                    } else {
                        console.log("Slett gjennomført");
                        res.send("");
                    }
                }
            );
        }
    });
});


var server = app.listen(8080);