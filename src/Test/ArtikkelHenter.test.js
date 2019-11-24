import ArticleService from "../ArticleService.js";
var mysql = require("mysql");
const runsqlfile = require("./runsqlfile.js");

// GitLab CI Pool
var pool = mysql.createPool({
    connectionLimit: 4,
    host: process.env.CI ? "mysql" : "localhost",
    user: "root",
    password: process.env.CI ? "secret" : "",
    database: "mydb",
    debug: false,
    multipleStatements: true
});

beforeAll(done => {
    runsqlfile("src/Test/createTables.sql", pool, () => {
        runsqlfile("src/Test/insertData.sql", pool, done);
    });
});

afterAll(() => {
    pool.end();
});

test("Hent artikkler og sjekk den første artikkelen", done => {
    ArticleService.getArticles(0).then(response => {
        let articles = response.data;
        expect(articles.length).toBe(10);
        expect(articles[0].overskrift).toBe("Javascript injection rammer siden!");
        done();
    })
});

test("Hent artikkel med id 1", done => {
    ArticleService.getArticle(1).then(response => {
        let article = response.data[0];
        expect(article.overskrift).toBe("Ugler i mosen");
        done();
    })
});

test("Fjern artikkel og sjekker at affected rows er 1", done => {
    ArticleService.fjernArtikkel(2).then(response => {
        console.log("Fjern artikkel resultat: " + JSON.stringify(response.data));
        expect(response.status).toBe(200);
        done();
    })
});

test("Legg til artikkel", done => {
    var article = {
        overskrift: "Test",
        innhold: "Test",
        fultInnhold: "Test",
        bilde: "www.test.com/test.jpg",
        bildeAlt: "Test bilde",
        kategori: 1,
        viktighet: 1
    }
    ArticleService.addArticle(article).then(response => {
        var id = response.data.insertId;
        expect(id).toBe(11);
        done();
    })
});

test("Hent kommentarer og sjekk den første kommentaren", done => {
    ArticleService.getAllComments().then(response => {
        let comments = response.data;
        console.log("Første kommentar: " + JSON.stringify(comments[0]));
        expect(comments.length).toBe(6);
        expect(comments[0].innhold).toBe("Wow, programmerte han denne helt selv?!");
        done();
    })
});
/*
test("get unknown person from db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data=" + JSON.stringify(data)
        );
        expect(data.length).toBe(0);
        done();
    }

    personDao.getOne(0, callback);
});

test("add person to db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data=" + JSON.stringify(data)
        );
        expect(data.affectedRows).toBeGreaterThanOrEqual(1);
        done();
    }

    personDao.createOne(
        { navn: "Nils Nilsen", alder: 34, adresse: "Gata 3" },
        callback
    );
});

test("get all persons from db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.length).toBeGreaterThanOrEqual(2);
        done();
    }
    personDao.getAll(callback);
});

test("test rediger", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.affectedRows).toBeGreaterThanOrEqual(1);
        done();
    }

    personDao.editOne(
        { navn: "Nils Nilsen", alder: 34, adresse: "Gata 3" }, 1,
        callback
    );
});

test("test slett", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data.length=" + data.length
        );
        expect(data.affectedRows).toBeGreaterThanOrEqual(1);
        done();
    }

    personDao.deleteOne(
        1,
        callback
    );
});
*/