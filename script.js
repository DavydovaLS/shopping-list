const groceries = document.querySelector('.groceries');
const inputForm = document.querySelector('#input');
const labelForm = document.querySelector('#items');

labelForm.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const labelText = inputForm.value;
        const newItem = documentCreateElement('div');
        newItem.classList.add('items');
        newItem.textContent = labelText;

        if (labelText != '') {
            groceries.append(newItem);
        }
    inputForm.value = '';
    }
});

newItem.addEventListener('click', function() {
    newItem.classList.toggle('done');
});



/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
