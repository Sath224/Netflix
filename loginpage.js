function validateLoginButton() {
  var emailField = document.getElementById('email');
  var passwordField = document.getElementById('password');

  // Basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value.trim()) || emailField.value.indexOf('@') === -1 || emailField.value.indexOf('.com') === -1) {
      alert('Invalid email format or missing @ or .com');
      return;
  }

  // Password length validation
  var password = passwordField.value.trim();
  if (password.length < 6 || password.length > 20) {
      alert('Password should be between 6 and 20 characters');
      return;
  }

  var conditionsMet = (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[@$!%*?&]/.test(password)
  );

  if (!conditionsMet) {
      alert('Password does not meet complexity requirements');
      return;
  }
  
  // If both email and password pass validation, show success alert
  alert('Login Successful !\nEmail: ' + emailField.value + '\nPassword: ' + passwordField.value);
}

// show password warning when mouseover on password input
function showInfoDiv() {
  var infoDiv = document.getElementById('passwordWarning');
  infoDiv.style.display = 'flex';
}
// hide password warning when mouseover on password input
function hideInfoDiv() {
  var infoDiv = document.getElementById('passwordWarning');
  infoDiv.style.display = 'none';
}