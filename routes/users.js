import express from "express";
import { getAllUsers,createUser, getUserById} from "../models/users.js";
import { getAllToDo,getTodoByID, createToDoList,updateToDo, DeleteToDo } from "../models/todo/index.js";
import { getAllReminder,getReminderByID, createReminderList,updateReminder, DeleteReminder } from "../models/reminders/index.js";
import { getAllGoals, createGoals, updateGoals, DeleteGoals, getGoalsById } from "../models/goals/index.js";
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
router.get("/:user_id", async function (req, res){
  const user_id = Number(req.params.user_id);
  const body = await getUserById(user_id);
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

/* GET todos by user ID. */
router.get("/:user_id/todo", async function (req, res) {
  const user_id = Number(req.params.user_id)
  const todo_list = await getAllToDo(user_id);

  res.json({
    success: true,
    payload: todo_list,
  });
});

/* GET reminders by user ID. */
router.get("/:user_id/reminder", async function (req, res) {
  const user_id = Number(req.params.user_id)
  const reminder_list = await getAllReminder(user_id);

  res.json({
    success: true,
    payload: reminder_list,
  });
});


/* GET todos by user ID and todo_id. */
router.get("/:user_id/todos/:todo_id", async function (req, res) {
  const todo_id = Number(req.params.todo_id);
  const user_id = Number(req.params.user_id)
  const todo_list = await getTodoByID(todo_id, user_id);

  res.json({
    success: true,
    payload: todo_list,
  });
});

/* GET reminders by user ID and reminder_id. */
router.get("/:user_id/reminders/:reminder_id", async function (req, res) {
  const reminder_id = Number(req.params.reminder_id);
  const user_id = Number(req.params.user_id)
  const todo_list = await getReminderByID(reminder_id, user_id);

  res.json({
    success: true,
    payload: todo_list,
  });
});


/* POST todos by user ID. */
router.post("/:user_id/todos", async function (req, res) {
  const body = req.body;
  const created = await createToDoList(body);

  res.json({
    success: true,
    payload: created,
  });
});

/* POST reminders by user ID. */
router.post("/:user_id/reminders", async function (req, res) {
  const body = req.body;
  const created = await createReminderList(body);

  res.json({
    success: true,
    payload: created,
  });
});

/* Update todos by user ID and todo_id. */
router.put("/:user_id/todos/:todo_id", async function (req, res) {
  //req.params.todo_id;
  const body = req.body;
  const updated = await updateToDo(body);

  res.json({
    success: true,
    payload: updated,
  });
});

/* Update reminders by user ID and reminder_id. */
router.put("/:user_id/reminders/:reminder_id", async function (req, res) {
  //req.params.reminder_id;
  const body = req.body;
  const updated = await updateReminder(body);

  res.json({
    success: true,
    payload: updated,
  });
});

/* DELETE todos by user ID and todo_id. */
router.delete("/:user_id/reminders/:todo_id", async function (req, res){
  const todo_id = Number(req.params.id)
  const user_id = Number(req.body.id)
  const remove = await DeleteToDo(todo_id, user_id);

  res.json({
    success: true,
    payload: remove,
  })
})

/* DELETE reminders by user ID and reminder_id. */
router.delete("/:user_id/reminders/:reminder_id", async function (req, res){
  const reminder_id = Number(req.params.reminder_id)
  const user_id = Number(req.body.user_id)
  const remove = await DeleteReminder(reminder_id, user_id);

  res.json({
    success: true,
    payload: remove,
  })
})

/* GET reminders by user ID. */
router.get("/:user_id/customise", async function (req, res) {
  const user_id = Number(req.params.user_id)
  const customise = await getCustomiseByUsers(user_id);

  res.json({
    success: true,
    payload: customise,
  });
});

/* GET customise by user_id and customise_id */
router.get("/:user_id/customise/:customise_id", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const customise_id = Number(req.params.customise_id);
  const customise = await getCustomiseByID(user_id, customise_id);

  res.json({
    success: true,
    payload: customise,
  });
});

router.post("/:user_id/customise", async function (req, res) {
  const body = req.body;
  const created = await createCustomise(body);

  res.json({
    success: true,
    payload: created,
  });
});

router.put("/:user_id/customise/:customise_id", async function (req, res ){
  const body = req.body;
  const update = await updateCustomise(body);

  res.json({
    success: true,
    payload: update,
  })
})

router.delete("/:user_id/customise/:customise_id", async function (req, res){
  const customise_id = Number(req.params.customise_id);
  const user_id = Number(req.params.user_id)
  const remove = await DeleteCustomise(customise_id, user_id);

  res.json({
    success: true,
    payload: remove,
  })
})

router.get("/:user_id/goals", async function (req, res) {
  const user_id = Number(req.params.user_id)
  const goals = await getAllGoals(user_id);

  res.json({
    success: true,
    payload: goals,
  });
});
/* GET customise by user_id and goal_id */
router.get("/:user_id/goals/:goals_id", async function (req, res) {
  const goal_id = Number(req.params.goals_id);
  const user_id = Number(req.params.user_id)
  const goal = await getGoalsById(goal_id, user_id);

  res.json({
    success: true,
    payload: goal,
  });
});
router.post("/:user_id/goals", async function (req, res) {
  const body = req.body;
  const create = await createGoals(body);
  res.json({
    success: true,
    payload: create,
  });
});

router.put("/:user_id/goals/:goals_id", async function (req, res) {
  const body = req.body;
  const update = await updateGoals(body);
  res.json({
    success: true,
    payload: update,
  });
});

router.delete("/:user_id/goals/:goals_id", async function (req, res) {
  const goals_id = Number(req.params.goals_id);
  const user_id = Number(req.params.user_id)
  const removed = await DeleteGoals(goals_id, user_id);

  res.json({
    success: true,
    payload: removed,
  });
});
export default router;
