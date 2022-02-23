import router from "../users";
import { getAllCustomSections } from "../../models/custom_section/index.js";

// Get all custom sections for a user
router.get("/:user_id/:section_id/custom_sections", async function (req, res) {
    const user_id = Number(req.params.user_id);
    const body = await getAllCustomSections(user_id);
    
    res.json({
        success: true,
        payload: body,
    })
})

// Get all items for a specific custom section
router.get("/:user_id/custom_sections/:section_id/items", async function (req, res) {
    const section_id = Number(req.params.section_id);
    const body = await getCustomSectionItems(section_id);

    res.json({
        success: true,
        payload: body,
    })
})

// Create a new custom section for the user
router.post("/:user_id/custom_section", async function(req, res) {
    const user_id = Number(req.params.user_id);
    const body = req.body;
    const result = await createCustomSection(user_id, body.name);

    res.json({
        success: true,
        payload: result
    })
})

// Create a new item for a specific custom section
router.post("/:user_id/custom_section/:section_id/item", async function(req, res) {
    const section_id = Number(req.params.section_id);
    const body = req.body;

    // TODO:
    // Best to format due date from JS to SQL format here

    const result = await createItemForCustomSection(section_id, body.text, body.due_date);

    res.json({
        success: true,
        payload: result
    })
})

