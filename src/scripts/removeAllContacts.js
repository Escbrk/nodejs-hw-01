import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  const arr = [];

  await fs.writeFile(PATH_DB, Buffer.from(JSON.stringify(arr, null, 2)));
};

await removeAllContacts();
