function setError(id, error) {
  // sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
}
function clearErrors() {
  errors = document.getElementsByClassName("formError");
  for (const item of errors) {
    item.innerHTML = "";
  }
}

function formValidation() {
  let returnValue = true;
  clearErrors();
  // perform validation and if validation fails, the value of returnValue is false
    // userName validation
   let userName = document.forms["myForm"]["username"].value;
  if (userName.length < 5) {
    setError("username", "*Length of username is too short");
    returnValue = false;
  } else if (!/^[A-Z]/.test(userName)) {
    setError("username", "*Username must start with an uppercase letter");
    returnValue = false;
  }
    // email validation
  let email = document.forms["myForm"]["email"].value;
  if (email.length > 50) {
    setError("email", "*length of email is to long");
    returnValue = false;
  }
   // phone validation
  let phone = document.forms["myForm"]["phone"].value;
  if (phone.length !== 10) {
    setError("phone", "*Please! Enter the correct phone no.");
    returnValue = false;
  }
   // password validation
  let password = document.forms["myForm"]["password"].value;
  // regex: at least 8 chars, one uppercase, one number, one underscore, one special char
  let passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*_)(?=.*[!@#$%^&*()\-+={}[\]|\\:;"'<>,.?/~`]).{8,}$/;

  if (!passwordPattern.test(password)) {
    setError(
      "password",
      "*Password must be at least 8 characters long, include one uppercase letter, one number, one underscore, and one special character"
    );
    returnValue = false;
  }
   // confirm password validation
  let cPassword = document.forms["myForm"]["cpassword"].value;
  if (cPassword !== password) {
    setError("cpassword", "*password and confirm password should be match");
    returnValue = false;
  }

  return returnValue;
}
