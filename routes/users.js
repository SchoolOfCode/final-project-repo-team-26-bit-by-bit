import express from "express";
import {getAllUsers,createUser} from "../models/users.js";
import { getAllToDo, createToDoList } from "../models/reminders/index.js";
import { getAllGoals, createGoals, updateGoals, DeleteGoals } from "../models/goals/index.js";
import { getAllCustomise, createCustomise, updateCustomise, DeleteCustomise } from "../models/customise/index.js";
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

router.get("/:id/reminders", async function (req, res) {
  const todo_list = await getAllToDo();

  res.json({
    success: true,
    payload: todo_list,
  });
});

router.post("/:id/reminders", async function (req, res) {
  const body = req.body;
  const created = await createToDoList(body);

  res.json({
    success: true,
    payload: created,
  });
});

router.get("/:id/customise", async function (req, res) {
  const customise = await getAllCustomise();

  res.json({
    success: true,
    payload: customise,
  });
});

router.post("/:id/customise", async function (req, res) {
  const body = req.body;
  const created = await createCustomise(body);

  res.json({
    success: true,
    payload: created,
  });
});

router.put("/:id/customise/:id", async function (req, res ){
  const body = req.body;
  const update = await updateCustomise(body);

  res.json({
    success: true,
    payload: update,
  })
})

router.delete("/:id/customise/", async function (req, res){
  const id = Number(req.params.id);
  const remove = await DeleteCustomise(id);

  res.json({
    success: true,
    payload: remove,
  })
})

router.get("/:id/goals", async function (req, res) {
  const goals = await getAllGoals();

  res.json({
    success: true,
    payload: goals,
  });
});

router.post("/:id/goals", async function (req, res) {
  const body = req.body;
  const create = await createGoals(body);
  res.json({
    success: true,
    payload: create,
  });
});

router.put("/:id/goals/:id", async function (req, res) {
  const body = req.body;
  const update = await updateGoals(body);
  res.json({
    success: true,
    payload: update,
  });
});

router.delete("/:id/goals/", async function (req, res) {
  const id = Number(req.params.id);
  const removed = await DeleteGoals(id);

  res.json({
    success: true,
    payload: removed,
  });
});
export default router;
