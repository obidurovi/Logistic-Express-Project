const express = require('express');
const { homePage, aboutPage, blogPage, contactPage, pricePage, servicePage, singlePage } = require('../controllers/pageController');

// Init Router 
const router = express.Router();


// Routing
router.get('/', homePage);

router.get('/about', aboutPage);

router.get('/blog', blogPage);

router.get('/contact', contactPage);

router.get('/price', pricePage);

router.get('/service', servicePage);

router.get('/single', singlePage);



// Export Router
module.exports = router;