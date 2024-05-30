import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { parsedJSON } from '../constants/jsonArray.js';

export const addOneContact = async () => {
  try {
    parsedJSON.push(createFakeContact());

    return await fs.writeFile(
      PATH_DB,
      Buffer.from(JSON.stringify(parsedJSON, null, 2)),
    );
  } catch (error) {
    console.log(error);
  }
};

await addOneContact();
