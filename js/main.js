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

// function renderEntry (entry) {

//   const $li =document.createElement("li");
//   $li.setAttribute('class', 'row');

//   const $imgWrapper =document.createElement('div')
//   $imgWrapper.setAttribute('class', 'column-half')

//   const $img = document.createElement('img')
//   $img.setAttribute ('src', entry.url)

//   const $contentWrapper =document.createElement('div')
//   $contentWrapper.setAttribute('class', 'column-half')

//   const $title =document.createElement('h3')
//   $title.textContent =entry.title

//   const $notes = document.createElement('p')
//   $notes.textContent= entry.notes

// }
