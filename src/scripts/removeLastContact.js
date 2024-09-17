import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.length = contacts.length - 1;

  await writeContacts(contacts);
};

removeLastContact();
