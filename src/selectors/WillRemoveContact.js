export default (contacts) => {
  return contacts.filter(({remove}) => remove === true);
}