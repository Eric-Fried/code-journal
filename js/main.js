/* global data */
const $photoURL = document.querySelector('#URL');
const $img = document.querySelector('#preview');

$photoURL.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
}

const $entryForm = document.querySelector('#entry-form');
$entryForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const entryFormValues = {
    title: $entryForm.title.value,
    url: $entryForm.URL.value,
    notes: $entryForm.notes.value,
    entryId: data.nextEntryId,
  };

  data.nextEntryId++;
  data.entries.unshift(entryFormValues);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}
