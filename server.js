// @flow
var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
var app = express();
var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 2,
    host: process.env.CI ? 'mysql' : "mysql.stud.iie.ntnu.no",
    user: process.env.CI ? "root" : "emirde",
    password: process.env.CI ? "secret" : "5AeX3tYs",
    database: process.env.CI ? "mydb" : "emirde",
    debug: false
});
//app.use(bodyParser.urlencoded()); // for å tolke JSON
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get("/Artikler/kategori/:kategoriId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("Fikk request fra klient");
    pool.getConnection((err, connection) => {
        console.log("Connected to database");
        if (err) {
            console.log("Feil ved kobling til databasen");
            res.json({ error: "feil ved ved oppkobling" });
        }
        else {
            var queryString = "select * from artikkel";
            var kategoriId = req.params.kategoriId;
            if (kategoriId != 0) {
                queryString += " where kategoriId = " + kategoriId;
            }
            queryString += " order by innleggelseTid DESC limit 20";
            connection.query(
                queryString
                ,
                (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        res.json({ error: "error querying" });
                    } else {
                        res.json(rows);
                    }
                }
            );
        }
    });
});

app.get("/Artikler/:artikkelId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("Fikk request fra klient");
    pool.getConnection((err, connection) => {
        console.log("Connected to database");
        if (err) {
            console.log("Feil ved kobling til databasen");
            res.json({ error: "feil ved ved oppkobling" });
        }
        else {
            connection.query(
                "select * from artikkel where artikkelId=?", req.params.artikkelId,
                (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        res.json({ error: "error querying" });
                    }
                    else {
                        console.log(rows);
                        res.json(rows);
                    }
                }
            );
        }
    });
});

app.post("/Artikler", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log("Overskrift: " + req.body.overskrift);
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.body.overskrift, req.body.innhold, req.body.fultInnhold, req.body.bilde, req.body.bildeAlt, req.body.kategori, req.body.viktighet];
            connection.query(
                "insert into artikkel (overskrift,innhold,fultInnhold,bilde,bildeAlt,kategoriId,viktighet) values (?,?,?,?,?,?,?)",
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

app.put("/Artikler/:artikkelId", (req, res) => {
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
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved insert" });
                    } else if (result.affectedRows == 0) {
                        console.log("Ingen endret")
                        res.status(500);
                        res.json({ error: "Ingen endret" });
                    } else {
                        console.log("Update gjennomført");
                        res.send("");
                    }
                }
            );
        }
    });
});

app.put("/Artikler/Like/:artikkelId", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.params.artikkelId];
            connection.query(
                "update artikkel set likes = likes + 1 where artikkelId=?",
                val,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved insert" });
                    } else if (result.affectedRows == 0) {
                        console.log("Ingen endret")
                        res.status(500);
                        res.json({ error: "Ingen endret" });
                    } else {
                        console.log("Update gjennomført");
                        res.send("");
                    }
                }
            );
        }
    });
});

app.delete("/Artikler/:artikkelId", (req, res) => {
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
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved slett" });
                    } else if (result.affectedRows == 0) {
                        console.log("Ingen slettet");
                        res.status(500);
                        res.json({ error: "Ingen slettet" });
                    } else {
                        console.log("Slett gjennomført");
                        res.send("");
                    }
                }
            );
        }
    });
});

app.get("/Kommentarer", (req, res) => {
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
                "select * from kommentar",
                (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        res.json({ error: "error querying" });
                    }
                    else {
                        res.json(rows);
                    }
                }
            );
        }
    });
});

app.get("/Kommentarer/:kategoriId", (req, res) => {
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
                "select * from kommentar join artikkel where kategoriId = ?",
                [parseInt(req.params.kategoriId)],
                (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        res.json({ error: "error querying" });
                    }
                    else {
                        res.json(rows);
                    }
                }
            );
        }
    });
});


app.post("/Kommentarer", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log(req.body);
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.body.innhold, req.body.artikkelId];
            connection.query(
                "insert into kommentar (innhold, artikkelId) values (?, ?)",
                val,
                (err, rows) => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved insert" });
                    } else {
                        console.log("insert ok");
                        res.send(rows);
                    }
                }
            );
        }
    });
});

app.put("/Kommentarer/:kommentarId", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.params.kommentarId];
            connection.query(
                "update kommentar SET likes = likes + 1 where kommentarId=?",
                val,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.json({ error: "Feil ved insert" });
                    } else if (result.affectedRows == 0) {
                        console.log("Ingen endret")
                        res.status(500);
                        res.json({ error: "Ingen endret" });
                    } else {
                        console.log("Update gjennomført");
                        res.send("");
                    }
                }
            );
        }
    });
});

let port = 80;
console.log("listening on port: " + port)
var server = app.listen(port);