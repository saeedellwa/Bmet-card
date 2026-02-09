// Script to populate the card based on encoded data in URL
(function() {
  /**
   * Helper to get query parameter by name
   * @param {string} name
   */
  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  /**
   * Populate the HTML elements with data
   * @param {object} data
   */
  function populate(data) {
    function set(id, value) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = value || '';
      }
    }
    // Photo
    const photoEl = document.getElementById('photo');
    if (photoEl && data.photo) {
      photoEl.src = data.photo;
    }
    set('name', data.name);
    set('ecNo', data.ecNo);
    set('ecDate', data.ecDate);
    set('birthDate', data.birthDate);
    set('passportNo', data.passportNo);
    set('passportIssueDate', data.passportIssueDate);
    set('passportExpireDate', data.passportExpireDate);
    set('visaNo', data.visaNo);
    set('visaIssueDate', data.visaIssueDate);
    set('visaExpireDate', data.visaExpireDate);
    set('referralNo', data.referralNo);
    set('recruitingAgency', data.recruitingAgency);
    set('employer', data.employer);
    set('country', data.country);

    set('bmetNo', data.bmetNo);
    set('bmetName', data.bmetName);
    set('bmetBirthDate', data.bmetBirthDate);
    set('gender', data.gender);
    set('bloodGroup', data.bloodGroup);
    set('nid', data.nid);

    set('passportName', data.passportName);
    set('passportNo1', data.passportNo1 || data.passportNo);
  }

  // Main execution
  const encoded = getParam('data');
  if (!encoded) {
    console.warn('No data provided in URL');
    return;
  }
  try {
    const jsonStr = atob(decodeURIComponent(encoded));
    const data = JSON.parse(jsonStr);
    populate(data);
  } catch (err) {
    console.error('Failed to parse data', err);
  }
})();
