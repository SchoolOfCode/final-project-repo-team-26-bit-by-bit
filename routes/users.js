import express from "express";
import {
  getAllUsers,
  createUser,
  getAllToDo,
  createToDoList,
  getAllCustomise,
  createCustomise,
  getAllGoals,
  createGoals,
  DeleteGoals,
  updateGoals,
} from "../models/users.js";
const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const body = await getAllUsers();

  res.json({
    success: true,
    payload: body,
  });
});

router.post("/", async function (req, res) {
  const body = req.body;
  const create = await createUser(body);
  res.json({
    success: true,
    payload: create,
  });
});

router.get("/reminders", async function (req, res) {
  const todo_list = await getAllToDo();

  res.json({
    success: true,
    payload: todo_list,
  });
});

router.post("/reminders", async function (req, res) {
  const body = req.body;
  const created = await createToDoList(body);

  res.json({
    success: true,
    payload: created,
  });
});

router.get("/customise", async function (req, res) {
  const customise = await getAllCustomise();

  res.json({
    success: true,
    payload: customise,
  });
});

router.post("/customise", async function (req, res) {
  const body = req.body;
  const created = await createCustomise(body);

  res.json({
    success: true,
    payload: created,
  });
});

router.get("/goals", async function (req, res) {
  const goals = await getAllGoals();

  res.json({
    success: true,
    payload: goals,
  });
});

router.post("/goals", async function (req, res) {
  const body = req.body;
  const create = await createGoals(body);
  res.json({
    success: true,
    payload: create,
  });
});

router.put("/goals/:id", async function (req, res) {
  const body = req.body;
  const update = await updateGoals(body);
  res.json({
    success: true,
    payload: update,
  });
});

router.delete("/goals/:id", async function (req, res) {
  const id = Number(req.params.id);
  const removed = await DeleteGoals(id);

  res.json({
    success: true,
    payload: removed,
  });
});
export default router;
