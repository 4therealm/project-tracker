$( function() {
//element targeting 
//form
const formNameInput = $('#floatingInput')
const formTypeSelect = $('#floatingSelect')
const datePicker = $('#datePicker')
const formSubmit = $('#submitBtn')
//table
const tableElement = $('table')

let existingProjectData = JSON.parse(localStorage.getItem('existingProjectData'))
if (existingProjectData ==null) existingProjectData = [];
renderTable(existingProjectData)

//event listener-form submit
$(formSubmit).on('click', $('button'), function(e) {
  e.preventDefault()

  //targeting input values
  const _name = $(this).parent().children("input").val()
  const _type = $(this).parent().children("select").val()
  const _date = $(this).parent().children("p").children().val()

  //object to hold input values
  let newProjectData = {name:_name,type:_type,dueDate:_date}

//saving object, as a string, to local storage
  localStorage.setItem('newProjectData', JSON.stringify(newProjectData))
      existingProjectData.push(newProjectData);
  localStorage.setItem('existingProjectData', JSON.stringify(existingProjectData))
})











function renderTable(array) {
 console.log('fired')

array.forEach(obj => {

    var row =  $('<tr/>'); 
    row.append($('<td/>').append(obj.name));
    row.append($('<td/>').append(obj.type));
    row.append($('<td/>').append(obj.dueDate).attr('scope', 'row'));
    tableElement.find('tbody').append(row);
    console.log(array)
})}
  






} );