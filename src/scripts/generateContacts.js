import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { parsedJSON } from '../constants/jsonArray.js';

const generateContacts = async (number) => {
  try {
    for (let i = 0; i < number; i += 1) {
      parsedJSON.push(createFakeContact());
    }
    await fs.writeFile(
      PATH_DB,
      Buffer.from(JSON.stringify(parsedJSON, null, 2)),
    );
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
