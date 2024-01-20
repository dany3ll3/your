document.addEventListener('DOMContentLoaded', function () {
    const originalList = document.getElementById('originalList');
    const rankingContainer = document.getElementById('rankingContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Function to handle item click for mobile
    function handleItemClick(e) {
        const item = e.target.closest('.rankItem');
        if (item && originalList.contains(item)) {
            rankingContainer.appendChild(item);
        }
    }

    // Desktop Drag-and-Drop Events
    originalList.addEventListener('dragstart', e => {
        if (e.target.className.includes('rankItem')) {
            e.dataTransfer.setData('text/plain', null); // for Firefox compatibility
        }
    });

    rankingContainer.addEventListener('dragover', e => e.preventDefault());

    rankingContainer.addEventListener('drop', e => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        const draggedItem = document.getElementById(data);
        if (draggedItem) {
            rankingContainer.appendChild(draggedItem);
        }
    });

    // Mobile Click Events
    if ('ontouchstart' in window) { // Check if touch events are supported
        originalList.addEventListener('click', handleItemClick);
    }

    // Submit button
    document.getElementById('submitRanking').addEventListener('click', function () {
        thankYouMessage.style.display = 'block';
    });
});


