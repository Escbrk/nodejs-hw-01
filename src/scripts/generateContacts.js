import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const db = await fs.readFile(PATH_DB);
  const parsedJSON = JSON.parse(db);

  for (let i = 0; i < number; i += 1) {
    const contact = {
      fullName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      occupation: faker.person.jobTitle(),
    };

    parsedJSON.push(contact);
  }
  await fs.writeFile(PATH_DB, Buffer.from(JSON.stringify(parsedJSON, null, 2)));
  // console.log(arr);
};

await generateContacts(5);
