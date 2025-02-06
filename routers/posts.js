const express = require('express')
const router = express.Router();

// importiamo il controller_post.js
const postController = require('../controllers/controller_posts')

// index visualizza tutti gli elementi
router.get('/', postController.index); 

// show visualizza un elemento per id
router.get('/:id', postController.show);

// store crea un elemento
router.post('/', postController.store);

// update modifica l'elemento  
// .put = tutto l'elemento .patch = una parte dell'elemento
router.put('/:id', postController.update);

// delete cancella un elemento
router.delete('/:id', postController.destroy);

module.exports = router;