import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const constants = await fs.readFile(PATH_DB);
  return JSON.parse(constants);
};

console.log(await readContacts());
