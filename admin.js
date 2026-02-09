// Form handler for generating card links
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cardForm');
  const resultEl = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('photoInput');
    const file = fileInput.files[0];
    if (!file) {
      alert('Please select a profile photo.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const photoData = reader.result;
      const dataObj = {
        photo: photoData,
        name: document.getElementById('name').value.trim(),
        ecNo: document.getElementById('ecNo').value.trim(),
        ecDate: document.getElementById('ecDate').value.trim(),
        birthDate: document.getElementById('birthDate').value.trim(),
        passportNo: document.getElementById('passportNo').value.trim(),
        passportIssueDate: document.getElementById('passportIssueDate').value.trim(),
        passportExpireDate: document.getElementById('passportExpireDate').value.trim(),
        visaNo: document.getElementById('visaNo').value.trim(),
        visaIssueDate: document.getElementById('visaIssueDate').value.trim(),
        visaExpireDate: document.getElementById('visaExpireDate').value.trim(),
        referralNo: document.getElementById('referralNo').value.trim(),
        recruitingAgency: document.getElementById('recruitingAgency').value.trim(),
        employer: document.getElementById('employer').value.trim(),
        country: document.getElementById('country').value.trim(),
        bmetNo: document.getElementById('bmetNo').value.trim(),
        bmetName: document.getElementById('name').value.trim(),
        bmetBirthDate: document.getElementById('bmetBirthDate').value.trim(),
        gender: document.getElementById('gender').value,
        bloodGroup: document.getElementById('bloodGroup').value.trim(),
        nid: document.getElementById('nid').value.trim(),
        passportName: document.getElementById('passportName').value.trim(),
        passportNo1: document.getElementById('passportNo1').value.trim()
      };
      try {
        const json = JSON.stringify(dataObj);
        const encoded = btoa(json);
        const link = 'card.html?data=' + encodeURIComponent(encoded);
        resultEl.style.display = 'block';
        resultEl.innerHTML = `<strong>Generated link:</strong> <a href="${link}" target="_blank">${link}</a>`;
      } catch (err) {
        console.error('Failed to encode data', err);
        alert('Failed to generate link.');
      }
    };
    reader.onerror = () => {
      alert('Failed to read the selected photo.');
    };
    reader.readAsDataURL(file);
  });
});
