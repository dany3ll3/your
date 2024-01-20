document.addEventListener('DOMContentLoaded', function () {
    const originalList = document.getElementById('originalList');
    const rankingContainer = document.getElementById('rankingContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');
    let draggedItem = null;

    // Function to handle the start of dragging
    function handleDragStart(e) {
        draggedItem = e.target.closest('.rankItem');
    }

    // Function to handle dropping
    function handleDrop(e, container) {
        e.preventDefault();
        if (draggedItem && e.target.closest('.list')) {
            container.appendChild(draggedItem);
        }
    }

    // Function to handle touch moves
    function handleTouchMove(e) {
        e.preventDefault();
        var touchLocation = e.targetTouches[0];
        draggedItem.style.position = 'absolute';
        draggedItem.style.left = touchLocation.pageX + 'px';
        draggedItem.style.top = touchLocation.pageY + 'px';
    }

    // Function to handle touch end
    function handleTouchEnd(e) {
        draggedItem.style.position = 'static';
        handleDrop(e, rankingContainer);
    }

    // Desktop Events
    originalList.addEventListener('dragstart', handleDragStart);
    rankingContainer.addEventListener('dragover', e => e.preventDefault());
    rankingContainer.addEventListener('drop', e => handleDrop(e, rankingContainer));

    // Mobile Events
    originalList.addEventListener('touchstart', handleDragStart);
    originalList.addEventListener('touchmove', handleTouchMove);
    originalList.addEventListener('touchend', handleTouchEnd);
});

document.getElementById('submitRanking').addEventListener('click', function () {
    thankYouMessage.style.display = 'block';
});


