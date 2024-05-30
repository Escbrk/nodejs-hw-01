import { dbArray, parsedJSON } from '../constants/jsonArray.js';

export const getAllContacts = async () => {
  try {
    if (parsedJSON.length !== 0) {
      return JSON.parse(dbArray);
    } else {
      return 'Nothing found!';
    }
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
