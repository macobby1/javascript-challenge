// from data.js
var tableData = data;

// Use the forEach to append the table rows 
var tbody = d3.select("tbody")

tableData. forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    //Use d3 to update each cell with UFO Data
    
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);

    });
});


var button = d3.select("#filter-btn");
var tbody = d3.select("tbody")
button.on("click", function () {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Filter UFO Data by date
    var filteredData = tableData.filter(bydate => bydate.datetime === inputValue);

    console.log(filteredData);

    //Use forEach to update each row
    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");

        // Use d3 to update each cell with data
        Object.entries(filteredReport).forEach(function([key, value]){
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value)

        });
    });
});