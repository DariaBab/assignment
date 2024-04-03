import { contacts } from "../data/contacts.js";

//console.log(contacts);

//Array Order Methods
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
  return contactsArr.map(
    (contact) => `${contact.name.first} ${contact.name.last}`
  );
}

//console.log(getFullNames(contactsResults));

//Looping Through Arrays

// 1. Loop that iterates through the array and logs each contact's email to the console
contactsResults.forEach((contact) => {
  //console.log(contact.email);
});

// 2. Write a function that takes an ID as a parameter and returns the contact with that ID.

function getContactByUUID(uuid) {
  const contact = contactsResults.find(
    (contact) => contact.login.uuid.toLowerCase() === uuid.toLowerCase()
  );
  return contact || null;
}

const contactUUID = "7ab84c9d-7C75-4f40-bbfe-61e279de158f";
const foundContact = getContactByUUID(contactUUID);

if (foundContact) {
  // console.log('Contact found:', foundContact);
} else {
  // console.log('Contact not found.');
}

// 3. Create a function that counts how many contacts are from a specific country. The country should be a parameter of the function.
function countContactsByCountry(contactsArr, country) {
  const contactsCountByCountry = contactsArr.reduce((acc, contact) => {
    const contactCountry = contact.location.country.toLowerCase();

    if (contactCountry === country.toLowerCase()) {
      if (!acc[contactCountry]) {
        acc[contactCountry] = 0;
      }
      acc[contactCountry]++;
    }

    return acc;
  }, {});

  return contactsCountByCountry;
}

//console.log(countContactsByCountry(contactsResults, "Germany"));

// 4. Write a function that returns a new array of contacts that are within a given age range, e.g., 25 to 35 years old.

function GetContactsByAge(contactsArr, minAge, maxAge) {
  return contactsArr.filter(contact => {
    const contactAge = contact.dob.age;
    return contactAge >= minAge && contactAge <= maxAge;
  });
}

console.log(GetContactsByAge(contacts.results, 25, 35));