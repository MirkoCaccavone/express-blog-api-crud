// importiamo il file data_posts
const posts = require('../data/data_posts');

// funzione index
function index(req, res) {
    // res.send('visualizza tutti gli elementi')
    
    // restituisce l'array di oggetti in formato json
    res.json(posts)
}
// funzione show
function show(req, res) {
    // res.send('visualizza un elemento')

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);
        // Restituiamolo sotto forma di JSON   
        res.json(post);
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
    // res.send('Cancella post post' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // cancello il post
    posts.splice(posts.indexOf(post), 1);

    // log di riscontro di check su aggiornamento dati
    console.log(posts);

    // ritorno la risposta positiva di avvenuta cancellazione
    res.sendStatus(204);
}

// esportiamo tutto tramite destructuring
module.exports = { index, show, store, update, destroy }