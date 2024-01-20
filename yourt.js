document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('draggable-list');
    const submitButton = document.getElementById('submit-button');

    // Sample data, replace with actual data
    const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    // Populate the list
    listItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    let draggingEle;
    let placeholder;
    let isDraggingStarted = false;

    // Swap list items
    const swap = function (nodeA, nodeB) {
        const parentA = nodeA.parentNode;
        const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

        // Move `nodeA` to before the `nodeB`
        nodeB.parentNode.insertBefore(nodeA, nodeB);

        // Move `nodeB` to before the sibling of `nodeA`
        parentA.insertBefore(nodeB, siblingA);
    };

    // Check if `nodeA` is on top of `nodeB`
    const isAbove = function (nodeA, nodeB) {
        const rectA = nodeA.getBoundingClientRect();
        const rectB = nodeB.getBoundingClientRect();

        return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
    };

    const mouseDownHandler = function (e) {
        draggingEle = e.target;

        // Calculate the mouse position
        const rect = draggingEle.getBoundingClientRect();
        const x = e.pageX - rect.left;
        const y = e.pageY - rect.top;

        // Attach the listeners to `document`
        document.addEventListener('mousemove
