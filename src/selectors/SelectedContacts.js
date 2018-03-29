export default (contacts) => {
  return contacts.filter(({selected}) => selected === true);
}