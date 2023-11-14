// /* global data */
const $photoURL = document.querySelector('#URL');
const $img = document.querySelector('#preview');

$photoURL.addEventListener('input', handleInput);

function handleInput(event) {
  $img.setAttribute('src', event.target.value);
  console.log($img.getAttribute('src'));
}

const $entryForm = document.querySelector('#entry-form');
console.dir($entryForm);
console.log($entryForm.elements);
$entryForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log($entryForm.elements);

  const entryFormValues = {
    title: $entryForm.title.value,
    URL: $entryForm.URL.value,
    Notes: $entryForm.Notes.value,
  };

  console.log(entryFormValues);
}
