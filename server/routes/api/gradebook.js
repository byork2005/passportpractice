const router = require("express").Router();
const gradebookController = require("../../controllers/gradebookController");

// Matches with "/api/gradebook"
router.route("/")
  .get(gradebookController.findAll)
  .post(gradebookController.create)
  .put(gradebookController.update)
  .delete(gradebookController.remove)

// Matches with "/api/gradebook/id
router
  .route("/id")
  .get(gradebookController.findById)
  .put(gradebookController.update)
  .delete(gradebookController.remove);


module.exports = router;