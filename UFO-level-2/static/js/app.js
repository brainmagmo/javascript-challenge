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
    var matches = ufoData;
    if (inputs.date) {
        matches = matches.filter(ufo => ufo.datetime == inputs.date);
    }
    if (inputs.city) {
        matches = matches.filter(ufo => ufo.city.includes(inputs.city.toLowerCase()));
    }
    if (inputs.state) {
        matches = matches.filter(ufo => ufo.state.includes(inputs.state.toLowerCase()));
    }
    if (inputs.country) {
        matches = matches.filter(ufo => ufo.country.includes(inputs.country.toLowerCase()));
    }
    if (inputs.duration) {
        matches = matches.filter(ufo => ufo.durationMinutes.includes(inputs.duration));
    }
    if (inputs.comments) {
        matches = matches.filter(ufo => ufo.comments.toLowerCase().includes(inputs.comments.toLowerCase()));
    }
    if (inputs.shape) {
        matches = matches.filter(ufo => ufo.shape.toLowerCase().includes(inputs.shape.toLowerCase()));
    }


    return matches;
}

// event handler function for the form
function makeTable(d) {

    // Prevent the page from refreshing
    // currently only working with button, not pressing enter in input box
    //also how to clear input?
    d3.event.preventDefault();

    //collect inputs
    var inputs = {date:'', city:'', state:'', country:'', shape:'', duration:0, comments:''};

    // Get the value property of the input elements
    inputs.date = d3.select("#datetime").property("value");
    inputs.city = d3.select("#city").property("value");
    inputs.state = d3.select("#state").property("value");
    inputs.country = d3.select("#country").property("value");
    inputs.duration = d3.select("#duration").property("value");
    inputs.comments = d3.select("#comments").property("value");
    inputs.shape = d3.select('#shape').property("value");

    // Use the form input to filter the data
    var matches = match_data(inputs);


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