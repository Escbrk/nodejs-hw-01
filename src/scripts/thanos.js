import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { parsedJSON } from '../constants/jsonArray.js';

export const thanos = async () => {
  try {
    parsedJSON.map((contact) => {
      const inxToRemove = parsedJSON.indexOf(contact);
      if (Math.random() < 0.5) {
        parsedJSON.splice(inxToRemove, 1);
      }
    });

    return await fs.writeFile(
      PATH_DB,
      Buffer.from(JSON.stringify(parsedJSON, null, 2)),
    );
  } catch (error) {
    console.log(error);
  }
};

await thanos();
