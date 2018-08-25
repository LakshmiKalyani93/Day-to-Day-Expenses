'use strict';
module.exports = (app) => {
    const ds = app.datasources.db;

    ds.define('createuser', {
        'username': { 'type': 'string' },
        'password': { 'type': 'string' },
        'email': { 'type': 'string' },
        'phoneNumber': { 'type': 'string', 'id': true }
    });
};
