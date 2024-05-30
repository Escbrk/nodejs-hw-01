import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const db = await fs.readFile(PATH_DB);
  return JSON.parse(db);
};

console.log(await getAllContacts());
