import { Router } from "express";
import {
  renderTasks,
  createTask,
  editTask,
  deleteTask,
  editTaskUpdate,
  taskDone,
} from "../controllers/tasks.controllers";

const router = Router();

router.get("/", renderTasks);

router.post("/task/add", createTask);

// Edit a task

router.get("/tasks/:id/edit", editTask);

router.post("/tasks/:id/edit", editTaskUpdate);

// Delete a task

router.get("/tasks/:id/delete", deleteTask);

// When a Task is Done
router.get("/tasks/:id/toggleDone", taskDone);

export default router;
