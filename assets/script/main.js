$( function() {
  $( "#datepicker" ).datepicker();


//element targeting 
//form
const formNameInput = $('#floatingInput')
const formTypeSelect = $('#floatingSelect')
const datePicker = $('#datePicker')
const formSubmit = $('#submitBtn')
//table
const tableElement = $('table')
const tableRows = Array.from(tableElement.children())
//table rows children will be stored as objects
//th[0] = project name
//th[1] = project type
//th[2] = due date



let projectData = [
  {
    name:formNameInput,
    type:formTypeSelect,
    due: datePicker
  }
]











} );