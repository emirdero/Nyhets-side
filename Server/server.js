// @flow
var express = require("express");
var bodyParser = require("body-parser");
const path = require('path');
var app = express();
var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 6,
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
    debug: false
});
const ArticleDao = require("./dao/ArticleDao.js");
/*
    For local testing:
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",

    For Production:
    host: process.env.CI ? 'mysql' : "mysql.stud.iie.ntnu.no",
    user: process.env.CI ? "root" : "emirde",
    password: process.env.CI ? "secret" : "5AeX3tYs",
    database: process.env.CI ? "mydb" : "emirde",
*/

//app.use(bodyParser.urlencoded()); // for å tolke JSON
app.use(bodyParser.json());

var articleDao = new ArticleDao(pool);

app.use(express.static(path.join(__dirname, '/../Klient/build')));

app.get("/Artikler/kategori/:kategoriId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("Fikk hent artikler request fra klient");

    articleDao.getArticles(req.params.kategoriId, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    })
    /*pool.getConnection((err, connection) => {
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
    });*/
});

app.get("/Artikler/:artikkelId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("Fikk request fra klient");

    articleDao.getArticle(req.params.artikkelId, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    })
    /*
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
                        res.json(rows);
                    }
                }
            );
        }
    });*/
});

app.post("/Artikler", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log("Overskrift: " + req.body.overskrift);

    articleDao.postArticle(req.body, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    })
    /*pool.getConnection((err, connection) => {
        if (err) {
            console.log("Feil ved oppkobling");
            res.json({ error: "feil ved oppkobling" });
        } else {
            console.log("Fikk databasekobling");
            var val = [req.body.overskrift, req.body.innhold, req.body.fultInnhold, req.body.bilde, req.body.bildeAlt, req.body.kategori, req.body.viktighet];
            connection.query(
                "insert into artikkel (overskrift,innhold,fultInnhold,bilde,bildeAlt,kategoriId,viktighet) values (?,?,?,?,?,?,?)",
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
    });*/
});

app.put("/Artikler/:artikkelId", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    console.log("Overskrift: " + req.body.overskrift);
    articleDao.editArticle(req.body, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
    /*pool.getConnection((err, connection) => {
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
                        res.send(result);
                    }
                }
            );
        }
    });*/
});

app.put("/Artikler/Like/:artikkelId", (req, res) => {
    console.log("Fikk like-request fra klienten");
    articleDao.likeArticle(req.params.artikkelId, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
    /*pool.getConnection((err, connection) => {
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
    });*/
});

app.delete("/Artikler/:artikkelId", (req, res) => {
    console.log("Fikk slett artikkel fra klienten");
    articleDao.deleteArticle(req.params.artikkelId, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
    /*pool.getConnection((err, connection) => {
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
                        res.sendStatus(200);
                    }
                }
            );
        }
    });*/
});

app.get("/Kommentarer", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("Fikk get kommetar request fra klient");
    articleDao.getComments((status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
    /*
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
    });*/
});

/*app.get("/Kommentarer/:kategoriId", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    console.log("Fikk request fra klient");
    articleDao.getComment((status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
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
});*/


app.post("/Kommentarer", (req, res) => {
    console.log("Fikk POST-request fra klienten");

    articleDao.sendComment(req.body, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
    /*
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
    });*/
});

app.put("/Kommentarer/:kommentarId", (req, res) => {
    console.log("Fikk POST-request fra klienten");
    articleDao.likeComment(req.params.kommentarId, (status, data) => {
        if (status === "500") {
            res.json({ error: "error querying" });
        } else {
            res.json(data);
        }
    });
    /*pool.getConnection((err, connection) => {
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
    });*/
});

let port = 8080;
console.log("listening on port: " + port)
var server = app.listen(port);