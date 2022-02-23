import query from "../../db/connection.js";

export async function getAllCustomSections(user_id) {
    const result = query(`SELECT * FROM custom_section WHERE user_id = $1;`, [user_id]);
    return result.rows();
}

export async function getCustomSectionItems(section_id) {
    const result = query(`SELECT * FROM custom_section_item WHERE section_id = $1;`, [section_id]);
    return result.rows();
}

export async function createCustomSection(user_id, name) {
    const result = query(`INSERT INTO custom_section (user_id, name) VALUES ($1, $2)`, [user_id, name])
    return result.rows();
}

export async function createItemForCustomSection(section_id, text, due_date) {
    const result = query(`INSERT INTO custom_section_items (section_id, text, due_date) VALUES ($1, $2, $3)`, [section_id, text, due_date])
    return result.rows()
}
