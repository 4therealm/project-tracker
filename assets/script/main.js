$( function() {
//element targeting 
//form
const formNameInput = $('#floatingInput')
const formTypeSelect = $('#floatingSelect')
const datePicker = $('#datePicker')
const formSubmit = $('#submitBtn')
//table
const tableElement = $('table')

//table rows children will be stored as objects
//th[0] = project name
//th[1] = project type
//th[2] = due date
let tableData = [];

$('window').on("load", renderTable)

$(formSubmit).on('click', $('button'), function(e) {
  e.preventDefault()
 //targeting input values
  const _name = $(this).parent().children("input").val()
  const _type = $(this).parent().children("select").val()
  const _date = $(this).parent().children("p").children().val()
 
  //object to hold input values
  projectData = {name:_name,type:_type,dueDate: _date}
     localStorage.setItem(('tableData'), JSON.stringify(projectData));
  tableData.push(projectData)
   //saving object, as a string, to local storag
  
})
function renderTable() {
 console.log('fired')
 tableData = tableData.concat(JSON.parse(localStorage.getItem('tableData')||'[]'))
tableData.forEach(obj => {

    var row =  $('<tr/>'); 
    row.append($('<td/>').append(obj.name));
    row.append($('<td/>').append(obj.type));
    row.append($('<td/>').append(obj.dueDate).attr('scope', 'row'));
    tableElement.find('tbody').append(row);
    console.log(obj)
})}
  






} );