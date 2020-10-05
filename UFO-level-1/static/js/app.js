// YOUR CODE HERE!
//use d3 to select the table
var table = d3.select("table");
//use d3 to create a bootstrap striped table
table.attr("class", "table table-striped");
//use d3 to select the table body
var tbody = d3.select("tbody");

data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    //append one table row 'tr' to the table body
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputField = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputField.property("value");

    var filteredData = data.filter(ufoSighting => ufoSighting.datetime == inputValue);
    console.log(filteredData);
    

    //use d3 to select the table body
    var tbody = d3.select("tbody");
    tbody.html("");

    filteredData.forEach((filteredDataRow) => {
        var selectRow = tbody.append("tr");
        Object.values(filteredDataRow).forEach((cell) => {
            var selectCell = selectRow.append("td");
            selectCell.text(cell);
        }
       )}
     );
     
   };