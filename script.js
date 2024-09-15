function toggleNestedList(event) {
    event.preventDefault(); // Prevent default anchor click behavior

    // Find the closest parent '.pdf-item' and then the nested '.nested-list' inside it
    const parentItem = event.target.closest('.pdf-item');
    const nestedList = parentItem.querySelector('.nested-list');

    // Toggle visibility for the specific nested list
    if (nestedList.style.display === "block") {
        nestedList.style.display = "none"; // Hide the nested list if it is already shown
        event.target.querySelector('.arrow-icon').style.transform = 'rotate(0deg)'; // Reset arrow direction
    } else {
        nestedList.style.display = "block"; // Show the nested list if it is hidden
        event.target.querySelector('.arrow-icon').style.transform = 'rotate(90deg)'; // Rotate arrow down
    }
}
