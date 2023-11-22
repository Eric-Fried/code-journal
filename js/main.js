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
  if (data.editing === null) {
    data.nextEntryId++;
    data.entries.unshift(entryFormValues);
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
    $entryForm.reset();
    $ul.prepend(renderEntry(entryFormValues));
    viewSwap('entries');
    toggleNoEntries();
  } else if (data.editing !== null) {
    entryFormValues.entryId = data.editing.entryId;
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i].title = entryFormValues.title;
        data.entries[i].url = entryFormValues.url;
        data.entries[i].notes = entryFormValues.notes;
      }
    }

    renderEntry(entryFormValues);
  }
  console.log(data.entries);
}
function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('class', 'row');
  $li.setAttribute('data-entry-id', entry.entryId);
  console.log(
    'Data Entry Id attribute value: ',
    $li.getAttribute('data-entry-id')
  );
  const $imgWrapper = document.createElement('div');
  $imgWrapper.setAttribute('class', 'column-half');
  const $img = document.createElement('img');
  $img.setAttribute('src', entry.url);
  const $contentWrapper = document.createElement('div');
  $contentWrapper.setAttribute('class', 'column-half');
  const $titleRow = document.createElement('div');
  $titleRow.setAttribute('class', 'row title-row');
  const $title = document.createElement('h3');
  $title.textContent = entry.title;
  const $pencil = document.createElement('i');
  $pencil.setAttribute('class', 'fas fa-pencil');
  const $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $li.appendChild($imgWrapper);
  $imgWrapper.appendChild($img);
  $li.appendChild($contentWrapper);
  $contentWrapper.appendChild($titleRow);
  $titleRow.appendChild($title);
  $titleRow.appendChild($pencil);
  $contentWrapper.appendChild($notes);
  return $li;
}
const $ul = document.querySelector('.ul');
document.addEventListener('DOMContentLoaded', handleDOMContent);
function handleDOMContent(event) {
  // debugger
  for (let i = 0; i < data.entries.length; i++) {
    const newEntry = renderEntry(data.entries[i]);
    $ul.appendChild(newEntry);
  }
  toggleNoEntries();
  viewSwap(data.view);
}
const $noEntriesMessage = document.getElementById('noEntries');
function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntriesMessage.classList.remove('hidden');
  } else {
    $noEntriesMessage.classList.add('hidden');
  }
}
const $dataViewEntryForm = document.querySelector("[data-view='entry-form']");
const $dataViewEntries = document.querySelector("[data-view='entries']");
function viewSwap(nameOfView) {
  if (nameOfView === 'entries') {
    $dataViewEntryForm.className = 'entry-form hidden';
    $dataViewEntries.className = 'entries';
    data.view = nameOfView;
  } else if (nameOfView === 'entry-form') {
    $dataViewEntries.className = 'entries hidden';
    $dataViewEntryForm.className = 'entry-form';
    data.view = nameOfView;
  }
}
const $entriesNavBar = document.querySelector('.entries-link');
const $newButton = document.querySelector('.new-button');
$newButton.addEventListener('click', handleClicktwo);
$entriesNavBar.addEventListener('click', handleClick);
function handleClick(event) {
  viewSwap('entries');
}
function handleClicktwo(event) {
  viewSwap('entry-form');
}
$ul.addEventListener('click', handlePencilCLick);
const $entryHeader = document.querySelector('.entry-header');
const $title = document.querySelector('#title');
const $URL = document.querySelector('#URL');
const $notes = document.querySelector('#notes');
function handlePencilCLick(event) {
  if (event.target.tagName === 'I') {
    const closestDataEntry = event.target
      .closest('li')
      .getAttribute('data-entry-id');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId.toString() === closestDataEntry) {
        data.editing = data.entries[i];
        console.log(data.editing);
      }
    }
    $img.src = data.editing.url;
    $title.value = data.editing.title;
    $URL.value = data.editing.url;
    $notes.value = data.editing.notes;
    $entryHeader.textContent = 'Edit Entry';
    viewSwap('entry-form');
  }
  console.log(data.editing);
}
