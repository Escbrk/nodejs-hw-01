import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  const db = await fs.readFile(PATH_DB);
  const parsedJSON = JSON.parse(db);

  return parsedJSON.length;
};

console.log(await countContacts());
