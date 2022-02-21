import express from "express";
import {getAllUsers,createUser, getUserById} from "../models/users.js";
import {getAllToDo,getTodoByID, createToDoList,updateToDo, DeleteToDo } from "../models/reminders/index.js";
import { getAllGoals, createGoals, updateGoals, DeleteGoals } from "../models/goals/index.js";
import { getCustomiseByUsers, getCustomiseByID, createCustomise, updateCustomise, DeleteCustomise } from "../models/customise/index.js";

const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res) {
  const body = await getAllUsers();

  res.json({
    success: true,
    payload: body,
  });
});

/* GET users by ID. */
router.get("/:id", async function (req, res){
  const id = Number(req.params.id);
  const body = await getUserById(id);
  res.json({
    sucess:true,
    payload:body,
  })
})


/* POST new users to users table. */
router.post("/", async function (req, res) {
  const body = req.body;
  const create = await createUser(body);
  res.json({
    success: true,
    payload: create,
  });
});

/* GET reminders by user ID. */
router.get("/:id/reminders", async function (req, res) {
  const id = Number(req.params.id)
  const todo_list = await getAllToDo(id);

  res.json({
    success: true,
    payload: todo_list,
  });
});


/* GET reminders by user ID and todo_id. */
router.get("/:id/reminders/:id", async function (req, res) {
  const id = Number(req.params.id)
  const todo_list = await getTodoByID(id);

  res.json({
    success: true,
    payload: todo_list,
  });
});


/* POST reminders by user ID. */
router.post("/:id/reminders", async function (req, res) {
  const body = req.body;
  const created = await createToDoList(body);

  res.json({
    success: true,
    payload: created,
  });
});

/* Update reminders by user ID and todo_id. */
router.put("/:id/reminders/:id", async function (req, res) {
  const body = req.body;
  const updated = await updateToDo(body);

  res.json({
    success: true,
    payload: updated,
  });
});

/* DELETE reminders by user ID and todo_id. */
router.delete("/:id/reminders/:id", async function (req, res){
  const id = Number(req.params.id)
  const remove = await DeleteToDo(id);

  res.json({
    success: true,
    payload: remove,
  })
})

/* GET reminders by user ID. */
router.get("/:id/customise", async function (req, res) {
  const id = Number(req.params.id)
  const customise = await getCustomiseByUsers(id);

  res.json({
    success: true,
    payload: customise,
  });
});

router.get("/:id/customise/:id", async function (req, res) {
  const id = Number(req.params.id)
  const customise = await getCustomiseByID(id);
console.log("Just a check: " + id)
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
  const id = Number(req.params.id)
  const goals = await getAllGoals(id);

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
