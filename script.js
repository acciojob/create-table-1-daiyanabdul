function insert_Row() {
    // Get the table by its ID
    const table = document.getElementById("sampleTable");

    // Create a new row element
    const newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create two new cell elements
    const cell1 = newRow.insertCell(0); // First cell
    const cell2 = newRow.insertCell(1); // Second cell

    // Set the innerHTML of the cells to the required values
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
