
module.exports = {
    "development": {
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "database": "issue_tracker_development",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "issue_tracker_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "issue_tracker_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }    
}