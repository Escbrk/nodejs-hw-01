import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  const db = await fs.readFile(PATH_DB);
  const parsedJSON = JSON.parse(db);

  const contact = {
    fullName: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    occupation: faker.person.jobTitle(),
  };
  parsedJSON.push(contact);

  return await fs.writeFile(
    PATH_DB,
    Buffer.from(JSON.stringify(parsedJSON, null, 2)),
  );
};

await addOneContact();
