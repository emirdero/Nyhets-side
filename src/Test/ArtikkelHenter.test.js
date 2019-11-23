import ArticleService from "../ArticleService.js";
var mysql = require("mysql");
var app = require("../../server.js");
const runsqlfile = require("./runsqlfile.js");

// GitLab CI Pool
var pool = mysql.createPool({
    connectionLimit: 1,
    host: "mysql",
    user: "root",
    password: "secret",
    database: "mydb",
    debug: false,
    multipleStatements: true
});

beforeAll(done => {
    runsqlfile("src/Test/mydb.sql", pool, done);
});

afterAll(() => {
    pool.end();
});

test("get one person from db", done => {
    ArticleService.getArticles(0).then(response => {
        let articles = response.data
        console.log(
            "Test callback: data=" + JSON.stringify(articles)
        );
        expect(articles.length).toBe(9);
        expect(articles[0].overskrift).toBe("Ugler i mosen");
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