/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', handleUnload);

function handleUnload(event) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('jsonData', jsonData);
  console.log('local storage of jsonData:', localStorage.getItem('jsonData'));
}
const jsonData = localStorage.getItem('jsonData');
if (jsonData !== null) {
  data = JSON.parse(jsonData);
}

console.log(data);
