document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the database (mock JSON file)
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error fetching data:', error));

    // Function to display data on the web page
    function displayData(data) {
        const dataContainer = document.getElementById('data-container');

        // Loop through the data and create HTML elements
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<strong>${item.name}</strong>: ${item.value}`;
            dataContainer.appendChild(itemElement);
        });
    }
});
