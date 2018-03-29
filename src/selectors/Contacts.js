//Get visible expenses
export default (contacts, { sortBy }) => {
  return contacts.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    } else if (sortBy === 'gender') {
      return a.gender < b.gender ? 1 : -1;
    } else if (sortBy === 'birthday') {
      return a.birthday < b.birthday ? 1 : -1;
    }
  });
};

