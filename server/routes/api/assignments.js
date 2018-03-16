const router = require("express").Router();
const assignmentsController = require("../../controllers/assignmentsController");

// Matches with "/api/assignments"
router.route("/")
  .get(assignmentsController.findAll)
  .post(assignmentsController.create)
  .put(assignmentsController.update)
  .delete(assignmentsController.remove)

// Matches with "/api/assignments/id
router
  .route("/id")
  .get(assignmentsController.findById)
  .put(assignmentsController.update)
  .delete(assignmentsController.remove);


module.exports = router;