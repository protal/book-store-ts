const { Router } = require('express');
const bookController = require('../controllers/bookController');

const router = Router();
router.route('/').get(bookController.getAll);
router.route('/').post(bookController.create);
router.route('/:id').get(bookController.getByID);
router.route('/:id').put(bookController.updateByID);
router.route('/:id').delete(bookController.deleteByID);

module.exports = router;
