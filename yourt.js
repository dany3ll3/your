document.addEventListener('DOMContentLoaded', function () {
    const originalList = document.getElementById('originalList');
    const rankingContainer = document.getElementById('rankingContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');
    let draggedItem = null;

    // Allow dragging from original list
    originalList.addEventListener('dragstart', function (e) {
        if (e.target.className.includes('rankItem')) {
            draggedItem = e.target;
        }
    });

    // Handle drag over ranking container
    rankingContainer.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    // Drop item into ranking container
    rankingContainer.addEventListener('drop', function (e) {
        e.preventDefault();
        if (draggedItem) {
            rankingContainer.appendChild(draggedItem);
        }
    });

    // Allow reordering within ranking container
    rankingContainer.addEventListener('dragstart', function (e) {
        if (e.target.className.includes('rankItem')) {
            draggedItem = e.target;
        }
    });

    rankingContainer.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.target.className.includes('rankItem')) {
            const children = Array.from(rankingContainer.children);
            const dropIndex = children.indexOf(e.target);
            const dragIndex = children.indexOf(draggedItem);

            if (dropIndex > dragIndex) {
                rankingContainer.insertBefore(draggedItem, e.target.nextSibling);
            } else {
                rankingContainer.insertBefore(draggedItem, e.target);
            }
        }
    });

    document.getElementById('submitRanking').addEventListener('click', function () {
        thankYouMessage.style.display = 'block';
    });
});

