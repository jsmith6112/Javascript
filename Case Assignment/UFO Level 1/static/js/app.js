// Assign the data from `data.js` to a descriptive variable
var sightings = ufodata;

// Select the button
var dbutton = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#form");

// Create event handlers 
dbutton.on("click", startfilter);
// form.on("submit",startfilter);

// Complete the event handler function for the form
function startfilter() {

  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var ufosightdate = d3.select("#datetime");

  // Get the value property of the input element
  var ufoValue = ufosightdate.property("value");

  console.log(ufoValue);
  console.log(sightings);


  var ufofilter = ufoValue.filter(sightings => sightings.datetime == ufoValue);

  console.log(ufofilter);

  // Generate a table
   ufofilter.forEach((sightings) => {
    var row = tbody.append("tr");
         Object.entries(sightings).forEach(([key, value]) => {
     var cell = row.append("td");
       cell.text(value);
     });
   });
  };



//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);