// Importo il modulo Express
const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")

// middleware per il CORS
app.use(cors({
    origin: 'http://localhost:5174'
}));

// importo il router
const postsRouter = require('./routers/posts');

// importo i middleware
const notFound = require('./middleware/notFound');
const errorsHandler = require('./middleware/errorsHandler');

// Serve i file statici dalla cartella 'public'
app.use(express.static('public'));

// registro il body-parser per "application/json"
// interpreta quello che sarà passato come file JSON
app.use(express.json());

// Gestisce la route principale ('/')
app.get('/', (req, res) => {
    // Invia una semplice risposta testuale
    res.send("Server del mio blog")
});

// Usa il router per le richieste alla route '/posts'
app.use("/posts", postsRouter)

// utilizzo middleware di gestione not found 404
app.use(notFound);

// utilizzo middleware di gestione errore server
app.use(errorsHandler);

// Avvia il server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})