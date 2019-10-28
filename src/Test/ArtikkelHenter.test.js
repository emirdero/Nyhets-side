var mysql = require("mysql");
var app = require("../../server.js");
const runsqlfile = require("./runsqlfile.js");

// GitLab CI Pool
var pool = mysql.createPool({
    connectionLimit: 1,
    host: "mysql",
    user: "root",
    password: "secret",
    database: "supertestdb",
    debug: false,
    multipleStatements: true
});

let artikkelHenter = new ArtikkelHenter();

var chai = require('chai');
var chaiHttp = require('chai-http');
// Interesting part
var app = require('../server/server');

chai.use(chaiHttp);
chai.should();

describe('/users', function () {
    it('returns users as JSON', function (done) {
        // This is what launch the server
        chai.request(app)
            .get('/api/users')
            .set('Authorization', auth.token)
            .then(function (res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.instanceof(Array).and.have.length(1);
                res.body[0].should.have.property('username').equal('admin');
                done();
            })
            .catch(function (err) {
                return done(err);
            });
    });
});

beforeAll(done => {
    runsqlfile("artikkel.sql", pool, done);
});

afterAll(() => {
    pool.end();
});

test("get one person from db", done => {
    function callback(status, data) {
        console.log(
            "Test callback: status=" + status + ", data=" + JSON.stringify(data)
        );
        expect(data.length).toBe(1);
        expect(data[0].navn).toBe("Hei Sveisen");
        done();
    }

    personDao.getOne(1, callback);
});

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
