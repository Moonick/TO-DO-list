var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app) {

    app.get('/', function(req, res) {
        var db = req.db;
        var collection = db.get('todo');
        collection.find({}, { sort: 'item' }, function(e, data) {
            res.render('todo', { todos: data })
        })
    });

    app.post('/', urlencodedParser, function(req, res) {
        var db = req.db;
        var collection = db.get('todo');
        collection.insert(req.body, function(err, result) {
            res.send(
                (err === null) ? { msg: '' } : { msg: err }
            );
        });
    });

    app.delete('/:item', function(req, res) {
        var db = req.db;
        var collection = db.get('todo');

        var item = req.params.item.replace(/\-/g, ' ');
        collection.remove({ 'item': item }, function(err) {
            res.send((err === null) ? { msg: '' } : { msg: 'error' + err })
        });
    });
}