// importiamo il file data_posts
const posts = require('../data/data_posts');

// funzione index
function index(req, res) {
    res.send('visualizza tutti gli elementi')
}
// funzione show
function show(req, res) {
    res.send('visualizza un elemento')
}
// funzione store
function store(req, res) {
    res.send('Creazione nuovo post ')
}

// funzione update
function update(req, res) {
    res.send('Lista dei post ' + req.params.id);
}

// funzione destroy
function destroy(req, res) {
    res.send('Cancella post post' + req.params.id);
}

// esportiamo tutto tramite destructuring
module.exports = { index, show, store, update, destroy }