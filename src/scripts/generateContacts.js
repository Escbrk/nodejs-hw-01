import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  const db = await fs.readFile(PATH_DB);
  //   console.log(db.toString());

  for (let i = 0; i < number; i += 1) {
    const contact = {
      fullName: faker.person.fullName(),
      phoneNumber: faker.phone.number(),
      email: faker.internet.email(),
      occupation: faker.person.jobTitle(),
    };


    await fs.appendFile(PATH_DB, Buffer.from(JSON.stringify(contact)));
    // console.log(contact);
  }
};

await generateContacts(5);
