const router = require('express').Router();
const authManagement = require('../middleware/authware');
const firstController = require('../controllers/firstController');

// CREATE
router.post('/', authManagement, firstController.postItem);
// --------------------------------------------------------------------

// READ
router.get('/:id', firstController.getSingleItem);
// --------------------------------------------------------------------

// UPDATE some fields
router.patch('/:id', authManagement, firstController.patchItem);
// --------------------------------------------------------------------

// UPDATE whole element
router.put('/:id', authManagement, firstController.putItem);
// --------------------------------------------------------------------

// DELETE
router.delete('/:id', authManagement, firstController.deleteItem);
// --------------------------------------------------------------------

module.exports = router;
