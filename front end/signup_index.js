// // Function to handle the sign-up form submission
// document.getElementById("signup-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Get the form values
//     const firstName = document.getElementById("first-name").value;
//     const lastName = document.getElementById("last-name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Implement your sign-up logic here, e.g., sending data to a server
//     // Check for errors and display an error message if necessary
//     const errorMessage = validateSignUp(firstName, lastName, email, password);
//     if (errorMessage) {
//         document.getElementById("error-message").textContent = errorMessage;
//     } else {
//         // Clear any previous error message
//         document.getElementById("error-message").textContent = "";

//         // Proceed with sign-up
//         // You can redirect the user or perform other actions here
//         alert('Sign-up successful!');
//     }
// });

// // Function to handle the Google Sign-Up
// function signUpWithGoogle() {
//     // Implement Google Sign-Up functionality
//     // You'll need to include the Google Sign-In SDK and handle the sign-up process
//     // This function can be customized based on your implementation
//     alert('Sign up with Google clicked.');
// }

// // Function to validate sign-up form input
// function validateSignUp(firstName, lastName, email, password) {
//     // Add your validation logic here
//     // Return an error message if validation fails, or return null if it succeeds
//     if (!firstName || !lastName || !email || !password) {
//         return "Please fill in all fields.";
//     }
//     // Add more validation rules as needed
//     return null;
// }

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
