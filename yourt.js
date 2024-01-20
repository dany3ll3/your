document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('draggable-list');
    let draggedItem = null;

    function handleDragStart(e) {
        this.style.opacity = '0.4';
        draggedItem = this;
    }

    function handleDragEnd(e) {
        this.style.opacity = '';
        draggedItem = null;
        items.forEach(item => item.classList.remove('over'));
    }

    function handleDragOver(e) {
        e.preventDefault();
        if (e.target.tagName === 'LI' && e.target !== draggedItem) {
            e.target.classList.add('over');
        }
    }

    function handleDragEnter(e) {
        if (e.target.tagName === 'LI' && e.target !== draggedItem) {
            e.target.classList.add('over');
        }
    }

    function handleDragLeave(e) {
        e.target.classList.remove('over');
    }

    function handleDrop(e) {
        e.preventDefault();
        if (draggedItem && e.target.tagName === 'LI' && e.target !== draggedItem) {
            // Swap items
            let from = draggedItem.innerHTML;
            let to = e.target.innerHTML;
            draggedItem.innerHTML = to;
            e.target.innerHTML = from;
            e.target.classList.remove('over');
        }
    }

    function handleTouchMove(e) {
        if (!draggedItem) {
            return;
        }

        let touchLocation = e.targetTouches[0];
        let targetElement = document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
        if (targetElement && targetElement.tagName === 'LI' && targetElement !== draggedItem) {
            // Swap items
            let from = draggedItem.innerHTML;
            let to = targetElement.innerHTML;
            draggedItem.innerHTML = to;
            targetElement.innerHTML = from;
        }
    }

    let items = list.querySelectorAll('li');
    items.forEach(item => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragend', handleDragEnd, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);

        // Touch events
        item.addEventListener('touchmove', handleTouchMove, false);
    });

    // Submit button event listener
    document.getElementById('submit-button').addEventListener('click', () => {
        alert('Thanks for making your list');
    });
});

