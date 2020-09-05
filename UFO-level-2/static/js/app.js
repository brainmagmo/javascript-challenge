// from data.js
var ufoData = data;
//console.log(ufoData);
// Select the input button
var button = d3.select("#filter-btn");

// Select the input form
var form = d3.select("#form");

//  select output table
var ufoTable = d3.select("#ufo-results");

function match_data(inputs) {

}

// event handler function for the form
function makeTable(d) {

    // Prevent the page from refreshing
    // currently only working with button, not pressing enter in input box
    //also how to clear input?
    d3.event.preventDefault();

    // Get the value property of the input element
    var date = d3.select("#datetime").property("value");

    //console.log(inputValue);
    // Use the form input to filter the data by date
    var matches = ufoData.filter(function(ufo) {return ufo.datetime === date;});
    //console.log(matches);
    //clear info
    ufoTable.html("");

    matches.forEach(match => {
        var row = ufoTable.append("tr");
        row.append("td").text(`${match.datetime}`);
        row.append("td").text(`${match.city}`);
        row.append("td").text(`${match.state}`);
        row.append("td").text(`${match.country}`);
        row.append("td").text(`${match.shape}`);
        row.append("td").text(`${match.durationMinutes}`);
        row.append("td").text(`${match.comments}`);
    });

    //dttext.text("");
    
};

// event handlers 
button.on("click", makeTable);
form.on("submit", makeTable);