const router = require('express').Router();
const { getAll } = require('../controllers/indexController');

router.get('/', getAll);

module.exports = router;