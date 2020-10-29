require('dotenv').config();

const sqlite = require('sqlite3').verbose();

const dbpath = process.cwd() + process.env.DBPATH;

module.exports = class DB {
    static instance = null;

    constructor() {
        try {
            this.instance = new sqlite.Database(dbpath);
        } catch (error) {
            console.error('Error connecting to DB');
        }
    }

    static getInstance() {
        if (!(this.instance))
            this.instance = new this;
        return this.instance;
    }

    run(query) {
        return new Promise((resolve, reject) => {
            this.instance.run(query, (err) => {
                if (err) reject(err);
                else resolve(true);
            });
        });
    }

    get(query, params = []) {
        return new Promise((resolve, reject) => {
            this.instance.get(query, params, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            })
        });
    }

    all(query, params = []) {
        return new Promise((resolve, reject) => {
            this.instance.all(query, params, (err, data)  => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }
}