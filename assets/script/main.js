$( function() {
  $( "#datepicker" ).datepicker();

let projectDataMaster = [];
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

let inputValidator = {
  projectName: false,
  type: false,
  dueDate: false
}



$(formSubmit).on('click', $('button'), function(e) {
  e.preventDefault()
 //targeting input values
  const _name = $(this).parent().children("input").val()
  const _type = $(this).parent().children("select").val()
  const _date = $(this).parent().children("p").children().val()
 if (_name.length > 0) {
  inputValidator[projectName] = true;
} else {
  inputValidator[projectName] = false;
 }
 let allTrue = Object.keys(inputValidator).every((item) => {
  return inputValidator[item] === true
});

if (allTrue) {
  formSubmit.disabled = false;
} else {
  formSubmit.disabled = true;
}
})
})

  
  //object to hold input values
  projectData = [{name:_name,type:_type,dueDate: _date}]
   //saving object, as a string, to local storage
  localStorage.setItem(_name, JSON.stringify(projectData));
  
})











} );