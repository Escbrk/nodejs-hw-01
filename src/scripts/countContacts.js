import { parsedJSON } from '../constants/jsonArray.js';

export const countContacts = async () => {
  try {
    return parsedJSON.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
