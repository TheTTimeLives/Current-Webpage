const path = require('path');


module.exports = function (app) {

    app.get('/', function (req, res) {
        // res.send(console.log('Get at index has been pinged'));
        res.sendFile(path.join(__dirname, "../../index.html"));
    });

    app.get('/back2', function (req, res) {
        // res.send(console.log('Get at index has been pinged'));
        res.sendFile(path.join(__dirname, "../../back2.html"));
    });

    app.get('/pillpair', function (req, res) {
        // res.send(console.log('Get at index has been pinged'));
        res.sendFile(path.join(__dirname, "../../pillpair.html"));
    });

    app.get('/contact', function (req, res) {
        // res.send(console.log('Get at index has been pinged'));
        res.sendFile(path.join(__dirname, "../../contact.html"));
    });

    app.get('/about', function (req, res) {
        // res.send(console.log('Get at index has been pinged'));
        res.sendFile(path.join(__dirname, "../../about.html"));
    });


}
