const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const chapter = input.value;
  input.value = '';  /* erase content from input box when entering items */

  const chapName = document.createElement('li');
  const listChap = document.createElement('span');
  const deleteBtn = document.createElement('button');

  chapName.appendChild(listChap);
  listChap.textContent = chapter;
  chapName.appendChild(deleteBtn);
  deleteBtn.textContent = 'X';
  list.appendChild(chapName);

  deleteBtn.addEventListener('click', () => {
    list.removeChild(chapName);
  });

  input.focus(); /* this puts the cursor back into the input box so more content should be added */
});