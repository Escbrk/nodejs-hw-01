import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const dbArray = await fs.readFile(PATH_DB);
const parsedJSON = JSON.parse(dbArray);

export { dbArray, parsedJSON };
