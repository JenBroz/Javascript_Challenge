// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");


tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


var button = d3.select("#filter-btn")
var resetButton = d3.select("#reset-filter-btn")


button.on("click", function() {

  d3.select("tbody").html("");

  d3.event.preventDefault();


  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value").toLowerCase();
  var state = d3.select("#state").property("value").toLowerCase();
  var country = d3.select("#country").property("value").toLowerCase();
  var shape = d3.select("#shape").property("value").toLowerCase();

 
  filterData = tableData;


  if (date) {
    filterData = filterData.filter(record => record.datetime === date);}
  if (city) {
    filterData = filterData.filter(record => record.city === city);}
  if (state) {
    filterData = filterData.filter(record => record.state === state);}
  if (country) {
    filterData = filterData.filter(record => record.country === country);}
  if (shape) {
    filterData = filterData.filter(record => record.shape === shape);}


  filterData.forEach((report) => {
    var row = tbody.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        //console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    }); }); });


resetButton.on("click", () => {
	tbody.html("");
	tableData.forEach((report) => {
 
    var row = tbody.append('tr');
 

Object.entries(report).forEach(([key, value]) => {
    
    var cell = row.append('td');
    cell.text(value);
    }); });

console.log("Table reset") });