const boxInput = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

boxInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const shopText = boxInput.value;
        
        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = shopText;

        if (shopText != '') {
            itemsContainer.append(newItem);
        }
        
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');   
            });

        boxInput.value = '';
    }    
});




/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
