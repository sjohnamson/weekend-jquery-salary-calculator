$(document).ready(onReady);

let totalMonthlySalary = 0;
const numFor = Intl.NumberFormat('en-US');

function onReady() {
  // submit button listener
  $('#submit-button').on('click', handleSubmit);

  // delete button listener
  $('#salaryTableBody').on('click', '#delete-button', handleDelete);
}

// function that calls when submit is clicked
function handleSubmit(event) {
  event.preventDefault();

  // get input boxes' values and assign to variables
  const firstNameEntry = $('#firstName').val();
  const lastNameEntry = $('#lastName').val();
  const idNumberEntry = $('#idNumber').val();
  const jobTitleEntry = $('#jobTitle').val();
  const salaryEntry = $('#salary').val();

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
  totalMonthlySalary += Number(salaryEntry.replaceAll(",", "")) / 12;

  // round to 2 decimal places
  const roundMonthlySalary = totalMonthlySalary.toFixed(2);

  // check if totalMonthlySalary is more than $20,000
  if (roundMonthlySalary > 20000) {
    $('h3').css({ 'background-color': 'red', 'color': 'yellow' })
  }

  // turn totalMonthlySalary into a string with commas
  const stringMonthlySalary = numFor.format(roundMonthlySalary);

  // input totalMonthlySalary into monthlySalary
  $('#monthlySalary').text(stringMonthlySalary);
}

// function to delete rows and subtract salary when remove button is clicked
function handleDelete() {
  // remove row
  $(this).closest('tr').remove();

  // subtract from total monthly salary

  const toSubtract = $(this).closest('tr').find('td:eq(4)').text();
  // find monthly amount to subtract
  totalMonthlySalary -= Number(toSubtract.replaceAll(",", "")) / 12;

  // round to nearest hundreth
  const roundMonthlySalary = totalMonthlySalary.toFixed(2);

  // check if totalMonthlySalary is less than 20,000, if so change background back
  if (roundMonthlySalary <= 20000) {
    $('h3').css({ 'background-color': 'darksalmon', 'color': '#4b4949' })
  }
  // turn totalMonthlySalary back into a string with commas
  const stringMonthlySalary = numFor.format(roundMonthlySalary);

  // replace monthlySalary with new value
  $('#monthlySalary').text(stringMonthlySalary);
}

