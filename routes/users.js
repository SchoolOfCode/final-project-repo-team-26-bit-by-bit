import express from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
} from "../models/users.js";
import {
  getAllToDo,
  getToDoByID,
  createToDoList,
  updateToDo,
  deleteToDo,
  deleteToDoByUser,
} from "../models/todo/index.js";
import {
  getAllReminder,
  getReminderByID,
  createReminderList,
  updateReminder,
  deleteReminder,
  deleteReminderByUser,
} from "../models/reminders/index.js";
import {
  getAllGoals,
  createGoals,
  updateGoals,
  updateCompletedGoals,
  deleteGoals,
  getGoalsById,
  deleteGoalsByUser,
} from "../models/goals/index.js";

import {
  createCustom,
  deleteCustom,
  deleteCustomByUser,
  getCustomByID,
  getCustomByUsers,
  updateCustom,
} from "../models/custom_section/index.js";
import {
  createSettings,
  deleteSettings,
  deleteSettingsByUser,
  getAllSettingsByUser,
  getSettingsBySettingId,
  updateSettings,
} from "../models/settings/index.js";
import {
  createCustomSectionItem,
  deleteCustomSectionItem,
  deleteCustomSectionItemByUser,
  getCustomSectionItemByID,
  getCustomSectionItemByUsers,
  updateCustomSectionItem,
} from "../models/custom_item/index.js";

const router = express.Router();

/* GET users listing. */
//
router.get("/", async function (req, res) {
  const body = await getAllUsers();

  res.json({
    success: true,
    payload: body,
  });
});

/* GET users by ID. */
router.get("/:user_id", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const body = await getUserById(user_id);

  res.json({
    success: true,
    payload: body,
  });
});

/* POST new users to users table. */
router.post("/", async function (req, res) {
  const body = req.body;
  const create = await createUser(body);
  res.json({
    success: true,
    payload: create,
  });
});

/* Update user */
router.put("/:user_id", async function (req, res) {
  const body = req.body;
  const update = await updateUser(body);
  res.json({
    success: true,
    payload: update,
  });
});

/* GET todos by user ID. */
router.get("/:user_id/todo", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const todo_list = await getAllToDo(user_id);

  res.json({
    success: true,
    payload: todo_list,
  });
});

/*GET todos by user_id & todo_id */
router.get("/:user_id/todo/:todo_id", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const todo_id = Number(req.params.todo_id);
  const todo_list = await getToDoByID(todo_id, user_id);

  res.json({
    success: true,
    payload: todo_list,
  });
});

/* POST todos by user ID. */
router.post("/:user_id/todo", async function (req, res) {
  const body = req.body;
  const created = await createToDoList(body);
  res.json({
    success: true,
    payload: created,
  });
});

/* Update todos by user ID & todo_id. */
router.put("/:user_id/todo/:todo_id", async function (req, res) {
  const body = req.body;
  const updated = await updateToDo(body);
  res.json({
    success: true,
    payload: updated,
  });
});

/*Delete todos by user_id & todo_id*/
router.delete("/:user_id/todo/:todo_id", async function (req, res) {
  const todo_id = Number(req.params.todo_id);
  const user_id = Number(req.body.user_id);
  const remove = await deleteToDo(todo_id, user_id);

  res.json({
    success: true,
    payload: remove,
  });
});

/*Delete todos by user_id*/
router.delete("/:user_id/todo", async function (req, res) {
  const user_id = Number(req.body.user_id);
  const remove = await deleteToDoByUser(user_id);

  res.json({
    success: true,
    payload: remove,
  });
});

/* GET reminders by user ID. */
router.get("/:user_id/reminders", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const reminder = await getAllReminder(user_id);

  res.json({
    success: true,
    payload: reminder,
  });
});

/* GET reminders by user_id & reminder_id. */
router.get("/:user_id/reminders/:reminder_id", async function (req, res) {
  const reminder_id = Number(req.params.reminder_id);
  const user_id = Number(req.params.user_id);
  const reminder_list = await getReminderByID(reminder_id, user_id);
  res.json({
    success: true,
    payload: reminder_list,
  });
});

/* POST reminders by user_id*/
router.post("/:user_id/reminders", async function (req, res) {
  const body = req.body;
  const created = await createReminderList(body);

  res.json({
    success: true,
    payload: created,
  });
});

/* Update reminders by user_id & reminder_id */
router.put("/:user_id/reminders/:reminder_id", async function (req, res) {
  //req.params.reminder_id;
  const body = req.body;
  const updated = await updateReminder(body);

  res.json({
    success: true,
    payload: updated,
  });
});

router.delete("/:user_id/reminders/:reminder_id", async function (req, res) {
  const reminder_id = Number(req.params.reminder_id);
  const user_id = Number(req.body.user_id);
  const remove = await deleteReminder(reminder_id, user_id);
  res.json({
    success: true,
    payload: remove,
  });
});

/* Delete reminders by user_id*/
router.delete("/:user_id/reminders", async function (req, res) {
  const user_id = Number(req.body.user_id);
  const remove = await deleteReminderByUser(user_id);
  res.json({
    success: true,
    payload: remove,
  });
});

/* GET custom_section by user_id*/
router.get("/:user_id/custom_section", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const custom = await getCustomByUsers(user_id);
  res.json({
    success: true,
    payload: custom,
  });
});

/* GET custom_section by user_id & custom_id*/
router.get("/:user_id/custom_section/:custom_id", async function (req, res) {
  const custom_id = Number(req.params.custom_id);
  const user_id = Number(req.params.user_id);
  const allCustom = await getCustomByID(custom_id, user_id);

  res.json({
    success: true,
    payload: allCustom,
  });
});

/* POST custom_section by user_id. */
router.post("/:user_id/custom_section", async function (req, res) {
  const body = req.body;
  const created = await createCustom(body);

  res.json({
    success: true,
    payload: created,
  });
});

/* Update custom_section by user_id & custom_id. */

router.put("/:user_id/custom_section/:custom_id", async function (req, res) {
  const body = req.body;
  const update = await updateCustom(body);

  res.json({
    success: true,
    payload: update,
  });
});

/* Delete custom_section by user_id & custom_id. */
router.delete("/:user_id/custom_section/:custom_id", async function (req, res) {
  const custom_id = Number(req.params.custom_id);
  const user_id = Number(req.params.user_id);
  const remove = await deleteCustom(custom_id, user_id);

  res.json({
    success: true,
    payload: remove,
  });
});

/* Delete whole custom_section by user_id */
router.delete("/:user_id/custom_section", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const remove = await deleteCustomByUser(user_id);

  res.json({
    success: true,
    payload: remove,
  });
});

/* GET goals by user_id. */
router.get("/:user_id/goals", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const goals = await getAllGoals(user_id);

  res.json({
    success: true,
    payload: goals,
  });
});

/* GET goals by user_id & goal_id */
router.get("/:user_id/goals/:goals_id", async function (req, res) {
  const goal_id = Number(req.params.goals_id);
  const user_id = Number(req.params.user_id);
  const goal = await getGoalsById(goal_id, user_id);

  res.json({
    success: true,
    payload: goal,
  });
});

/* POST goals by user_id. */
router.post("/:user_id/goals", async function (req, res) {
  const body = req.body;
  const create = await createGoals(body);
  res.json({
    success: true,
    payload: create,
  });
});

router.patch("/:user_id/goals", async function (req, res) {
  const body = req.body;
  const create = await updateCompletedGoals(body);
  res.json({
    success: true,
    payload: create,
  });
});

/* UPDATE goals by user_id & goal_id */
router.put("/:user_id/goals/:goals_id", async function (req, res) {
  const body = req.body;
  const update = await updateGoals(body);
  res.json({
    success: true,
    payload: update,
  });
});

/* DELETE goals by user_id and goal_id */
router.delete("/:user_id/goals/:goals_id", async function (req, res) {
  const goals_id = Number(req.params.goals_id);
  const user_id = Number(req.params.user_id);
  const removed = await deleteGoals(goals_id, user_id);

  res.json({
    success: true,
    payload: removed,
  });
});

/* DELETE goals by user_id*/
router.delete("/:user_id/goals", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const removed = await deleteGoalsByUser(user_id);

  res.json({
    success: true,
    payload: removed,
  });
});

/* GET settings by user_id */
router.get("/:user_id/settings", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const settings = await getAllSettingsByUser(user_id);

  res.json({
    success: true,
    payload: settings,
  });
});

/* GET settings by user_id & setting_id */
router.get("/:user_id/settings/:setting_id", async function (req, res) {
  const setting_id = Number(req.params.setting_id);
  const user_id = Number(req.params.user_id);
  const settings = await getSettingsBySettingId(setting_id, user_id);

  res.json({
    success: true,
    payload: settings,
  });
});

/* POST settings by user_id */
router.post("/:user_id/settings", async function (req, res) {
  const body = req.body;
  const create = await createSettings(body);
  res.json({
    success: true,
    payload: create,
  });
});

/* UPDATE settings by user_id & setting_id */
router.put("/:user_id/settings/:setting_id", async function (req, res) {
  const body = req.body;
  const update = await updateSettings(body);
  res.json({
    success: true,
    payload: update,
  });
});

/* DELETE settings by user_id & setting_id */
router.delete("/:user_id/settings/:setting_id", async function (req, res) {
  const setting_id = Number(req.params.setting_id);
  const user_id = Number(req.params.user_id);
  const removed = await deleteSettings(setting_id, user_id);

  res.json({
    success: true,
    payload: removed,
  });
});

/* DELETE settings by user_id */
router.delete("/:user_id/settings", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const removed = await deleteSettingsByUser(user_id);

  res.json({
    success: true,
    payload: removed,
  });
});

/* GET custom_section_item by user_id */
router.get("/:user_id/custom_item", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const custom_item = await getCustomSectionItemByUsers(user_id);

  res.json({
    success: true,
    payload: custom_item,
  });
});

/* GET custom_section_item by user_id & setting_id */
router.get("/:user_id/custom_item/:section_id", async function (req, res) {
  const section_id = Number(req.params.section_id);
  const user_id = Number(req.params.user_id);
  const custom_item = await getCustomSectionItemByID(section_id, user_id);

  res.json({
    success: true,
    payload: custom_item,
  });
});

/*POST custom_section_item by user_id */
router.post("/:user_id/custom_item", async function (req, res) {
  const body = req.body;
  const create = await createCustomSectionItem(body);
  res.json({
    success: true,
    payload: create,
  });
});

/* UPDATE custom_section_item by user_id & setting_id */
router.put("/:user_id/custom_item/:section_id", async function (req, res) {
  const body = req.body;
  const update = await updateCustomSectionItem(body);
  res.json({
    success: true,
    payload: update,
  });
});

/* DELETE custom_section_item by user_id & setting_id */
router.delete("/:user_id/custom_item/:section_id", async function (req, res) {
  const section_id = Number(req.params.section_id);
  const user_id = Number(req.params.user_id);
  const removed = await deleteCustomSectionItem(section_id, user_id);

  res.json({
    success: true,
    payload: removed,
  });
});

/* DELETE custom_section_item by user_id  */
router.delete("/:user_id/custom_item", async function (req, res) {
  const user_id = Number(req.params.user_id);
  const removed = await deleteCustomSectionItemByUser(user_id);

  res.json({
    success: true,
    payload: removed,
  });
});

export default router;
