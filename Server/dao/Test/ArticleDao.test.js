var mysql = require("mysql");
const runsqlfile = require("./runsqlfile.js");
const ArticleDao = require("../ArticleDao.js");

// GitLab CI Pool
var pool = mysql.createPool({
    connectionLimit: 1,
    host: process.env.CI ? "mysql" : "localhost",
    user: "root",
    password: process.env.CI ? "secret" : "",
    database: "mydb",
    debug: false,
    multipleStatements: true
});

const articleDao = new ArticleDao(pool);

beforeAll(done => {
    runsqlfile("dao/Test/createTables.sql", pool, () => {
        runsqlfile("dao/Test/insertData.sql", pool, done);
    });
});

afterAll(() => {
    pool.end();
});

test("Hent artikkler og sjekk den første artikkelen", done => {
    function callback(status, response) {
        console.log("Status: " + status);
        expect(response.length).toBe(10);
        expect(response[0].overskrift).toBe("Javascript injection rammer siden!");
        done();
    }
    articleDao.getArticles(0, callback);
});

test("Hent artikkel med id 1", done => {
    function callback(status, response) {
        console.log("Status: " + status);
        let article = response[0];
        expect(article.overskrift).toBe("Ugler i mosen");
        done();
    }
    articleDao.getArticle(1, callback);
});

test("Fjern artikkel og sjekker at affected rows er 1", done => {
    function callback(status, response) {
        console.log("Status: " + status);
        console.log("Fjern artikkel resultat: " + JSON.stringify(response));
        expect(response.affectedRows).toBe(1);
        done();
    }
    articleDao.deleteArticle(2, callback);
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
    function callback(status, response) {
        expect(response.insertId).toBe(11);
        done();
    }
    articleDao.postArticle(article, callback);
});

test("Hent kommentarer og sjekk den første kommentaren", done => {
    function callback(status, response) {
        let comments = response;
        console.log("Første kommentar: " + JSON.stringify(comments[0]));
        expect(comments.length).toBe(6);
        expect(comments[0].innhold).toBe("Wow, programmerte han denne helt selv?!");
        done();
    }
    articleDao.getComments(callback);
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