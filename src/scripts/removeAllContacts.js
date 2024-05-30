import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const arr = [];

    await fs.writeFile(PATH_DB, Buffer.from(JSON.stringify(arr, null, 2)));
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
