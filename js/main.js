/* global data */
const $photoURL = document.querySelector('#URL');
const $img = document.querySelector('#preview');

$photoURL.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
  console.log($img.getAttribute('src'));
}

const $entryForm = document.querySelector('#entry-form');
console.dir('$entryForm:', $entryForm);
console.log('$entryForm.elements:', $entryForm.elements);
console.log('data.nextentryid:', data.nextEntryId);
$entryForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log('$entryForm.elements:', $entryForm.elements);

  const entryFormValues = {
    title: $entryForm.title.value,
    url: $entryForm.URL.value,
    notes: $entryForm.notes.value,
    entryId: data.nextEntryId,
  };

  data.nextEntryId++;
  console.log('data.nextEntryID:', data.nextEntryId);
  console.log('entryFormValues:', entryFormValues);
  data.entries.unshift(entryFormValues);
  console.log('data.entries:', data.entries);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}
