
// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody");

// using Object.entries to get key, value data inside of the table
// and loop through them to add to the table in html
function createTable(data){ 
    tbody.text("");
    data.forEach(function(sighting){
    new_tr = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	;
    });
})};

createTable(tableData);

// // //select the web user's input and the filter button

var day = d3.select("#datetime");
var button = d3.select("#filter-btn");


// // // filter data with date that the user inputs

function handleClick(){
  // button.on("click", function(){
    tbody.html("");
    //prevents page to refresh
  d3.event.preventDefault();
    //print the date entered
  console.log(day.property("value"));
  var  day_value=day.property("value");
  // create a new table showing only the filterd data
    newTable = tableData.filter(selectPoint);
    function selectPoint(sight) {
      return sight.datetime==day_value;
    };
    //display the new table
  
  console.log(newTable);
  createTable(newTable);
};

// // // event listener to handle change and click
button.on("click", handleClick);
// createTable(newTable);