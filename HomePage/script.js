// Basic form validation for login
function validateLogin(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Check if fields are empty
  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Basic email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Redirect to index.html after successful validation
  window.location.href = "../HomePage/index.html"; // Adjust the path as necessary
  return true; // This line may be omitted since the redirect occurs
}

// Attach event listener to the login form
document.getElementById("loginForm").addEventListener("submit", validateLogin);

// Basic form validation for signup (if needed in the future)
function validateSignup(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // Check if fields are empty
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Basic email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check for minimum password length (e.g., 6 characters)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  alert("Signup successful!"); // Placeholder for actual signup logic
  return true; // This line may be omitted since the form handling can be different
}

// Attach event listeners to signup form (if you implement it)
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", validateSignup);
}
