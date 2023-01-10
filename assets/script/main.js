$( function() {
  $( "#datepicker" ).datepicker();

let projectData = [];
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





$(formSubmit).on('click', $('button'), function(e) {
  e.preventDefault()
console.log("fired")
const _name = $(formNameInput).text
const _type = $(formTypeSelect).val()
const _date = $(datePicker).input
projectData = [
  {
    name:_name,
    type:_type,
    due: _date
  }
]
console.log($(this).parent().children("input").val())
// document.localStorage.setItem((formNameInput.text, projectData))
  
})











} );