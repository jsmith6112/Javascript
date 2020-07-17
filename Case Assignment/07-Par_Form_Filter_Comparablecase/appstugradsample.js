// Use D3 to select the table
var student_table = d3.select("#student-table");
// Use D3 to select the table body
var tbody = d3.select("#student-tbody");
// Use D3 to set the table class to `table table-striped`
// Use a forEach function to loop through the array of objects (from your data)
grades.forEach((studentgrade) => {
  var row = tbody.append("tr");
  var grd = parseInt(studentgrade.grade);
  if (grd <= 60)
  {
    Object.entries(studentgrade).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    cell.classed("badred", true);
  });
  }
  else if (grd < 70 && grd > 60)
  {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      cell.classed("loweryellow", true);
    });
  }
  else if (grd > 70)
  {
    Object.entries(studentgrade).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      //cell.classed("loweryellow", true); - do nothing
    });
  }
});