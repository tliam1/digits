import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/contact';

const addContactsData = (data) => {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Contacts.collection.insert(data);
};

if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default data.');
    Meteor.settings.defaultContacts.forEach(data => addContactsData(data));
  }
}
