let express = require('express');
let router = express.Router();
/*let mongoose = require ('mongoose');*/
/*let passport = require('passport'); */

let BuisnessController = require('../controllers/buisness');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Component-list page. READ */
router.get('/', BuisnessController.DisplayBuisnessList);
  
/* GET Display Add page. CREATE  */
router.get('/add', requireAuth, BuisnessController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', requireAuth, BuisnessController.ProcessAddPage);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', requireAuth, BuisnessController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', requireAuth, BuisnessController.ProcessEditPage);

/* GET process the Delete page. DELETE */
router.get('/delete/:id', requireAuth, BuisnessController.ProcessDeletePage);


module.exports = router;