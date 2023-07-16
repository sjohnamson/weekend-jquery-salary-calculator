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
  totalMonthlySalary += Number(salaryEntry.replaceAll(",", ""))/12;
  // round to 2 decimal places
  totalMonthlySalary = totalMonthlySalary.toFixed(2);
  // check if totalMonthlySalary is more than $20,000
  if (totalMonthlySalary > 20000) {
    $('#monthlySalary').css('background-color', 'red')
    }
  // turn totalMonthlySalary into a string with commas
  totalMonthlySalary = totalMonthlySalary.toLocaleString("en-US");
  console.log('total monthly convert to string after add:', totalMonthlySalary)
  // input totalMonthlySalary into monthlySalary
  $('#monthlySalary').text(totalMonthlySalary);
  // convert totalMonthly salery back into a number for next input
  totalMonthlySalary = Number(totalMonthlySalary.replaceAll(",", ""));
  console.log(totalMonthlySalary)

}

// function to delete rows and subtract salary when remove button is clicked
function handleDelete() {
  // remove row
  $(this).closest('tr').remove();

  // subtract from total monthly salary
  let toSubtract = $(this).closest('tr').find('td:eq(4)').text();
  totalMonthlySalary -= Number(toSubtract.replaceAll(",", ""))/12;
  totalMonthlySalary = totalMonthlySalary.toFixed(2);
  console.log('after subtract: ', totalMonthlySalary);
  // check if totalMonthlySalary is less than 20,000
  if (totalMonthlySalary <= 20000) {
    $('#monthlySalary').css('background-color', 'darksalmon')
    }
  // turn totalMonthlySalary back into a string with commas
  totalMonthlySalary = totalMonthlySalary.toLocaleString("en-US");
  console.log('total monthly back to string: ', totalMonthlySalary)
  // replace monthlySalary with new value
  $('#monthlySalary').text(totalMonthlySalary);
  // convert totalMonthly salery back into a number for next input
  totalMonthlySalary = Number(totalMonthlySalary.replaceAll(",", ""));
}

