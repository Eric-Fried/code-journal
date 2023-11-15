/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', handleUnload);
const jsonData = JSON.stringify(data);

function handleUnload(event) {
  localStorage.setItem('jsonData', jsonData);
  console.log('local storage of jsonData:', localStorage.getItem('jsonData'));
}

if (localStorage.getItem('jsonData') !== null) {
  data = JSON.parse(jsonData);
}

console.log(data);
