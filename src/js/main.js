import { contacts } from "../data/contacts.js";

//console.log(contacts);

const contactsResults = contacts.results;

// 1.Sort the array by last name
function sortByLastName(contactsArr) {
  const sortedContacts = [...contactsArr];
  return sortedContacts.sort((a, b) => {
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();

    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });
}

//console.log(sortByLastName(contactsResults));

// 2.Return the array in reverse order without using reverse()
function getReverseArray(contactsArr) {
  return [...contactsArr].sort(
    (a, b) => contactsArr.indexOf(b) - contactsArr.indexOf(a)
  );
}

//console.log(getReverseArray(contactsResults));

// 3.Get the first 5 contacts from the sorted list
function getFirstFiveContacts(contactsArr) {
  return contactsArr.slice(0, 5);
}

const sortedContacts = sortByLastName(contactsResults);

//console.log(getFirstFiveContacts(sortedContacts));

// 4.Return an array of all unique first names
function getUniqueFirstNames(contactsArr) {
  const allFirstNames = contactsArr.map((contact) => contact.name.first);

  const uniqueFirstNames = [...new Set(allFirstNames)];
  return uniqueFirstNames;
}

//console.log(getUniqueFirstNames(sortedContacts));

// 5.Concatenates the first and last name of each contact into a new array of full names
function getFullNames(contactsArr) {
  return contactsArr.map(contact => `${contact.name.first} ${contact.name.last}`);
}

console.log(getFullNames(contactsResults));