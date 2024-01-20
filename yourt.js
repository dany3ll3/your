document.addEventListener('DOMContentLoaded', function () {
    const rankingContainer = document.getElementById('rankingContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');
    let draggedItem = null;

    rankingContainer.addEventListener('dragstart', function (e) {
        draggedItem = e.target;
    });

    rankingContainer.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    rankingContainer.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.target.className === 'rankItem') {
            rankingContainer.insertBefore(draggedItem, e.target);
        }
    });

    document.getElementById('submitRanking').addEventListener('click', function () {
        thankYouMessage.style.display = 'block';
    });
});
