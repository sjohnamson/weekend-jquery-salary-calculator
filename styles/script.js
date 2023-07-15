$(document).ready(onReady);

let totalMonthlySalary = 0;

function onReady() {
// submit button listener
$('#submit-button').on('click', handleSubmit);

// delete button listener
$('#salaryTableBody').on('click', '#delete-button', handleDelete);
}

function handleSubmit(event) {
  event.preventDefault();

  // get input boxes' values and assign to variables
  const firstNameEntry = $('#firstName').val();
  const lastNameEntry = $('#lastName').val();
  const idNumberEntry = $('#idNumber').val();
  const jobTitleEntry = $('#jobTitle').val();
  const salaryEntry = $('#salary').val();

  // console.log(firstNameEntry, lastNameEntry, idNumberEntry, jobTitleEntry, salaryEntry);

  // return input boxes back to placeholder text
  $('input').val('');

  // put entered information into the submission table along with a remove button 
  $('#salaryTableBody').append(`
    <tr>
      <td>${firstNameEntry}</td>
      <td>${lastNameEntry}</td>
      <td>${idNumberEntry}</td>
      <td>${jobTitleEntry}</td>
      <td>${salaryEntry}</td>
      <td><button id='delete-button'>🪓</button></td>
    </tr>
  `)

  // calculate monthly salary and add to totalMonthlySalary
  totalMonthlySalary = totalMonthlySalary + Number(salaryEntry)/12;
  $('#monthlySalary').text(totalMonthlySalary);
  // console.log(totalMonthlySalary);

  // check if totalMonthlySalary is more than $20,000
  if (totalMonthlySalary > 20000) {
    $('#monthlySalary').css('background-color', 'red')
  }
}

// function to delete rows when remove button is clicked
function handleDelete() {
$(this).parent().parent().remove();
}