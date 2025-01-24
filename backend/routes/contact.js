const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contactcontroller');

router.post('/',handleContactForm);

module.exports = router;