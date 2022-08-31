const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, mesg) {
  const formControl = input.parentElement;

  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = mesg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  console.log();
  formControl.classList.add("success");
}

//check email verification
function validateEmail(inp) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(inp.value.trim())) {
    showSuccess(inp);
  } else {
    showError(inp, "Email is not valid");
  }
}
function fieldName(name) {
  return name.id.charAt(0).toUpperCase() + name.id.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "")
      showError(input, `${fieldName(input)} is required`);
    else showSuccess(input);
  });
}
//check length
function checkLength(input, min, max) {
  console.log(input);
  if (input.value.length < min)
    showError(input, `${fieldName(input)} must be ${min} character long`);
  else if (input.value.length > max) {
    showError(input, `${fieldName(input)} must be ${max} character long`);
  } else showSuccess(input);
}

//check Password
function checkPassword(inp1, inp2) {
  if (inp1.value !== inp2.value) showError(inp2, "Password donot match");
}

//event Listner
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 17);
  checkLength(password, 6, 25);
  validateEmail(email);
  checkPassword(password, password2);
  // checkLength([password2, 6, 17]);

  // if (username.value === "") showError(username, "Username is required");
  // else {
  //   showSuccess(username);
  // }
  // if (email.value === "") showError(email, "Email is required");
  // else if (!validateEmail(email.value)) showError(email, "Email is not valid");
  // else showSuccess(email);

  // if (password.value === "") showError(password, "Password is required");
  // else if (/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g)
  //   showError(password, "Password must be 6 character long");
  // else showSuccess(password);

  // if (password2.value === "") showError(password2, "Re-type password");
  // else if (password2.value !== password.value)
  //   showError(password2, "Password Doesn't match");
  // else showSuccess(password2);
});
