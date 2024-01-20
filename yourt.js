document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('draggable-list');
    let draggedItem = null;

    // Function to handle the drag start event
    function handleDragStart(e) {
        draggedItem = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    // Function to handle the drag over event
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        return false;
    }

    // Function to handle the drop event
    function handleDrop(e) {
        e.stopPropagation();
        if (draggedItem !== this) {
            draggedItem.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }

    // Function to handle the drag end event
    function handleDragEnd(e) {
        items.forEach((item) => {
            item.classList.remove('over');
        });
    }

    let items = list.querySelectorAll('li');
    items.forEach((item) => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });

    // Submit button event listener
    document.getElementById('submit-button').addEventListener('click', () => {
        alert('Thanks for making your list');
        // You can replace the alert with any other action you'd like to perform
    });
});
