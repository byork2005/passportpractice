const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const passport = require('../../passport');

// Matches with "/api/users"
router
  .route('/')
  // .get(usersController.findAll)
  .get(() => {console.log('GET Hello')})

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Need to dive into issue of login route vs sign-up route. Probably need to make sign-up
// The log of req.body below works. Current error is 400, bad request.
// router.post(
//   '/login',
//   function(req, res, next) {
//     console.log('hello');
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('req', req);
//     const userInfo = {
//       email: req.user.email
//     };
//     res.send(userInfo);
//   }
// );

// router
//   .route('/login')
//   .post(usersController.login)


router.post('/login', passport.authenticate('local', {failureRedirect: '/logout' }), usersController.login)

// Matches with api/users/signup
router
  .route('/signup')
  .post(usersController.create)

// Matches with api/users/logout
router
  .route('/logout')
  .post(usersController.logout)

module.exports = router;

