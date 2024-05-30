class Applicant {
  constructor(cnic, firstName, lastName) {
    this.cnic = cnic;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const applicantForm = document.getElementById('applicantForm');
const cnicInput = document.getElementById('cnic');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const saveButton = document.getElementById('save');
const printButton = document.getElementById('print');
const applicantDataDiv = document.getElementById('applicantData');

let applicants = [];

saveButton.addEventListener('click', () => {
  const cnic = cnicInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  if (!cnic || !firstName || !lastName) {
    alert('Please fill in all fields');
    return;
  }

  applicants.push(new Applicant(cnic, firstName, lastName));

  cnicInput.value = '';
  firstNameInput.value = '';
  lastNameInput.value = '';
});

printButton.addEventListener('click', () => {
  if (applicants.length === 0) {
    alert('No applicants to print');
    return;
  }

  const encodedApplicants = encodeURIComponent(JSON.stringify(applicants));
  window.location.href = `print.html?applicants=${encodedApplicants}`;
});
