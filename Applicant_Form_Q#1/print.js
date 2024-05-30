document.addEventListener('DOMContentLoaded', () => {
  const printedApplicantsDiv = document.getElementById('printedApplicants');

  const queryParams = new URLSearchParams(window.location.search);
  const encodedApplicants = queryParams.get('applicants');
  if (!encodedApplicants) {
    printedApplicantsDiv.textContent = 'No applicants to display';
    return;
  }

  const applicants = JSON.parse(decodeURIComponent(encodedApplicants));
  if (applicants.length === 0) {
    printedApplicantsDiv.textContent = 'No applicants to display';
    return;
  }

  // Sort applicants by last name
  applicants.sort((a, b) => a.lastName.localeCompare(b.lastName));

  const headerRow = document.createElement('div');
  headerRow.innerHTML = '<strong>CNIC    FirstName LastName</strong>';
  printedApplicantsDiv.appendChild(headerRow);

  applicants.forEach(applicant => {
    const row = document.createElement('div');
    row.textContent = `${applicant.cnic} ${applicant.firstName} ${applicant.lastName}`;
    printedApplicantsDiv.appendChild(row);
  });
});
