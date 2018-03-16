const router = require("express").Router();

const userRoutes = require("./users");
const classroomRoutes = require("./classroom");
const notesRoutes = require("./notes");
const assignmentsRoutes = require("./assignments");
const gradebookRoutes = require("./gradebook");

// user routes
router.use("/users", userRoutes);

// classroom routes
router.use("/classroom", classroomRoutes);

// notes routes
router.use("/notes", notesRoutes);

// assignment routes
router.use("/assignments", assignmentsRoutes);

// gradebook routes
router.use("/gradebook", gradebookRoutes);

module.exports = router;
