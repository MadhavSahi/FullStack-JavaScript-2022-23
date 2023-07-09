function validateForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const genderInput = document.getElementById('gender');
    const dobInput = document.getElementById('dob');
    const colorInput = document.getElementById('color');
  
    if (nameInput.value === '') {
      showError(nameInput, 'Name is required');
    } else {
      showSuccess(nameInput);
    }
  
    if (emailInput.value === '') {
      showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, 'Email is not valid');
    } else {
      showSuccess(emailInput);
    }
  
    if (phoneInput.value === '') {
      showError(phoneInput, 'Phone number is required');
    } else {
      showSuccess(phoneInput);
    }
  
    if (passwordInput.value === '') {
      showError(passwordInput, 'Password is required');
    } else {
      showSuccess(passwordInput);
    }
  
    if (ageInput.value === '' || ageInput.value < 0 || ageInput.value > 150) {
      showError(ageInput, 'Age is required and must be between 0 and 150');
    } else {
      showSuccess(ageInput);
    }
  
    if (genderInput.value === '') {
      showError(genderInput, 'Gender is required');
    } else {
      showSuccess(genderInput);
    }
  
    if (dobInput.value === '') {
      showError(dobInput, 'Date of Birth is required');
    } else {
      showSuccess(dobInput);
    }
  
    if (colorInput.value === '') {
      showError(colorInput, 'Favorite color is required');
    } else {
      showSuccess(colorInput);
    }
  
    if (isFormValid()) {
      alert('Form submitted successfully!');
      document.getElementById('form').reset();
    }
  }
  
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
  
    const errorElement = formControl.querySelector('.error-message');
    errorElement.textContent = message;
  }
  
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }
  
  function isValidEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }
  
  function isFormValid() {
    const inputs = document.querySelectorAll('.form-control input, .form-control select');
    let isValid = true;
  
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
        isValid = false;
      }
    });
  
    return isValid;
  }
  
  function getFieldName(input) {
    const id = input.id;
    return id.charAt(0).toUpperCase() + id.slice(1);
  }
  